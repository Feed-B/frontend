"use client";

import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { DragDropContext, Draggable, Droppable, DropResult } from "@hello-pangea/dnd";
import Resizer from "react-image-file-resizer";
import { UseFormRegisterReturn } from "react-hook-form";
import whitePlusIcon from "@/public/icons/whitePlus.svg";
import EmptyProjectImage from "@/app/addproject/_components/ProjectImageBox/EmptyProjectImage";
import ProjectImageCard from "@/app/addproject/_components/ProjectImageBox/ProjectImageCard";
import RadioButton from "@/app/addproject/_components/RadioButton";
import { useToast } from "@/app/_context/ToastContext";
import AddImageButton from "./AddImageButton";

interface ImageType {
  id: string;
  url: string;
  file?: File;
}

interface ProjectImageBoxProps {
  setImageType: (image: string) => void;
  handleImageFile: (fileList: any[]) => void;
  initialImageType?: string;
  initialUrlList?: string[];
  register?: UseFormRegisterReturn;
}

function ProjectImageBox({
  setImageType,
  handleImageFile,
  initialImageType = "",
  initialUrlList = [],
  register,
}: ProjectImageBoxProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedSize, setSelectedSize] = useState(initialImageType || "웹");
  const [showImageUrlList, setShowImageUrlList] = useState<ImageType[]>([]);
  const { addToast } = useToast();

  useEffect(() => {
    if (initialUrlList.length > 0) {
      const urlList = initialUrlList.map(url => ({
        id: `${url}-${Math.random()}`,
        url: url,
      }));
      setShowImageUrlList(urlList);
    }
  }, [initialUrlList]);

  useEffect(() => {
    setSelectedSize(initialImageType || "웹");
  }, [initialImageType]);

  const resizeFile = (file: Blob): Promise<File> =>
    new Promise((resolve, reject) => {
      Resizer.imageFileResizer(
        file,
        1000,
        1000,
        "JPEG",
        80,
        0,
        uri => {
          if (typeof uri === "string") {
            fetch(uri)
              .then(res => res.blob())
              .then(blob => {
                const resizedFile = new File([blob], (file as File).name, {
                  type: "image/jpeg",
                  lastModified: Date.now(),
                });
                resolve(resizedFile);
              })
              .catch(reject);
          } else if (uri instanceof Blob) {
            const resizedFile = new File([uri], (file as File).name, {
              type: "image/jpeg",
              lastModified: Date.now(),
            });
            resolve(resizedFile);
          } else {
            reject(new Error("Unexpected type of uri"));
          }
        },
        "blob"
      );
    });

  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSize(event.target.value);
    setImageType(event.target.value);
  };

  const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const MAX_FILE_NUMBER = 5; // 최대 이미지 수
    const fileList = event.target.files;

    if (fileList) {
      if (showImageUrlList.length + fileList.length > MAX_FILE_NUMBER) {
        addToast("이미지는 최대 5장까지만 업로드할 수 있습니다", "error");
        return;
      }

      const resizedImageList = await Promise.all(
        Array.from(fileList).map(async file => {
          const resizedFile = await resizeFile(file);
          return {
            id: `${file.name}-${file.lastModified}-${Math.random()}`,
            url: URL.createObjectURL(resizedFile),
            file: resizedFile, // 리사이징된 파일을 저장
          };
        })
      );

      setShowImageUrlList(prevImages => [...prevImages, ...resizedImageList]);

      // 파일 입력 값을 리셋
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleUploadButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageDelete = (indexToDelete: number) => {
    setShowImageUrlList(prevImages => prevImages.filter((_, index) => index !== indexToDelete));
  };

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const reorderedImageList = Array.from(showImageUrlList);
    const [removed] = reorderedImageList.splice(result.source.index, 1);
    reorderedImageList.splice(result.destination.index, 0, removed);

    setShowImageUrlList(reorderedImageList);
  };

  useEffect(() => {
    handleImageFile(showImageUrlList);
  }, [showImageUrlList, handleImageFile]);

  return (
    <>
      <div className="mb-4 flex gap-3">
        <RadioButton value="웹" checked={selectedSize === "웹"} onChange={handleSizeChange} />
        <RadioButton value="모바일" checked={selectedSize === "모바일"} onChange={handleSizeChange} />
      </div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="cardLists" direction="horizontal">
          {provided => (
            <div className="cardLists" {...provided.droppableProps} ref={provided.innerRef}>
              <div className="flex items-center justify-center overflow-y-hidden rounded-lg border-2 border-dashed border-gray-200 bg-gray-100 p-4 mb:h-24 mb:justify-start mb:p-3 tbc:h-24 tbc:justify-start tbc:p-3 tbr:h-[156px] tbr:justify-start pc:min-h-[252px]">
                {showImageUrlList.length > 0 ? (
                  <div className="flex w-full flex-row items-start gap-4 pc:flex-wrap">
                    {showImageUrlList.map((image, index) => (
                      <Draggable draggableId={image.id} index={index} key={image.id}>
                        {provided => (
                          <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                            <ProjectImageCard
                              key={image.id}
                              index={index}
                              imageUrl={image.url}
                              handleImageDelete={handleImageDelete}
                            />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                    {showImageUrlList.length < 5 && (
                      <>
                        <div
                          className="flex min-h-[220px] min-w-[220px] cursor-pointer items-center justify-center rounded-xl border-2 border-dashed border-blue-500 hover:bg-blue-50 mb:hidden tbc:hidden tbr:hidden"
                          onClick={handleUploadButtonClick}>
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500">
                            <Image src={whitePlusIcon} width={18} alt="이미지 추가 버튼" />
                          </div>
                        </div>
                        <AddImageButton count={showImageUrlList.length + 1} onClick={handleUploadButtonClick} />
                      </>
                    )}
                  </div>
                ) : (
                  <EmptyProjectImage onButtonClick={handleUploadButtonClick} />
                )}
              </div>
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <input
        {...register}
        type="file"
        id="fileInput"
        ref={fileInputRef}
        className="hidden"
        multiple
        onChange={handleImageChange}
      />
    </>
  );
}

export default ProjectImageBox;
