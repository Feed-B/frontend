"use client";

import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { DragDropContext, Draggable, Droppable, DropResult } from "@hello-pangea/dnd";
import whitePlusIcon from "@/public/icons/whitePlus.svg";
import RadioButton from "../RadioButton";
import ProjectImageCard from "./ProjectImageCard";
import EmptyProjectImage from "./EmptyProjectImage";

interface ImageType {
  id: string;
  url: string;
  file: File;
}

interface ProjectImageBoxProps {
  setImageType: (image: string) => void;
  handleImageFile: (fileList: File[]) => void;
}

function ProjectImageBox({ setImageType, handleImageFile }: ProjectImageBoxProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [selectedSize, setSelectedSize] = useState("웹");
  const [showImageUrlList, setShowImageUrlList] = useState<ImageType[]>([]);

  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSize(event.target.value);
    setImageType(event.target.value);
  };

  const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;

    if (fileList) {
      const imageUrlList = Array.from(fileList).map(file => ({
        id: `${file.name}-${file.lastModified}-${Math.random()}`,
        url: URL.createObjectURL(file),
        file: file, // 각 이미지에 해당하는 File 객체 추가
      }));

      setShowImageUrlList(prevImages => {
        const newImages = [...prevImages, ...imageUrlList];
        return newImages.slice(0, 5); // 이미지는 최대 5개까지만 허용
      });

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

    const reorderedImages = Array.from(showImageUrlList);
    const [removed] = reorderedImages.splice(result.source.index, 1);
    reorderedImages.splice(result.destination.index, 0, removed);

    setShowImageUrlList(reorderedImages);
  };

  useEffect(() => {
    const filesArray: File[] = showImageUrlList.map(image => image.file);
    handleImageFile(filesArray);
  }, [showImageUrlList, handleImageFile]);

  return (
    <>
      <div className="flex gap-3">
        <RadioButton value="웹" checked={selectedSize === "웹"} onChange={handleSizeChange} />
        <RadioButton value="모바일" checked={selectedSize === "모바일"} onChange={handleSizeChange} />
      </div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="cardLists" direction="horizontal">
          {provided => (
            <div className="cardLists" {...provided.droppableProps} ref={provided.innerRef}>
              <div
                className={`flex h-[252px] ${showImageUrlList.length > 0 ? "w-full" : "w-[690px]"} items-center justify-center rounded-lg border-2 border-dashed border-gray-200 bg-gray-100 p-4`}>
                {showImageUrlList.length > 0 ? (
                  <div className="flex h-full w-full flex-row items-start gap-4">
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
                      <div className="hover:bg-blue-50 flex h-[220px] w-[220px] cursor-pointer items-center justify-center rounded-xl border-2 border-dashed border-blue-500">
                        <div
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500"
                          onClick={handleUploadButtonClick}>
                          <Image src={whitePlusIcon} width={18} alt="이미지 추가 버튼" />
                        </div>
                      </div>
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
      <input type="file" id="fileInput" ref={fileInputRef} className="hidden" multiple onChange={handleImageChange} />
    </>
  );
}

export default ProjectImageBox;
