"use client";

import React, { ChangeEvent, useRef, useState } from "react";
import Image from "next/image";
import { DragDropContext, Draggable, Droppable, DropResult } from "@hello-pangea/dnd";
import fullFileIcon from "@/public/icons/fullFile.svg";
import uploadIcon from "@/public/icons/upload.svg";
import Button from "@/app/_components/Button/Button";
import whitePlusIcon from "@/public/icons/whitePlus.svg";
import RadioButton from "../RadioButton";
import ProjectImageCard from "./ProjectImageCard";

const ImageDescription = "프로젝트를 설명할 이미지를 업로드해주세요";

interface ImageType {
  id: string;
  url: string;
}

function ProjectImageBox() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [selectedSize, setSelectedSize] = useState("웹");
  const [showImageUrls, setShowImageUrls] = useState<ImageType[]>([]);

  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSize(event.target.value);
  };

  const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files) {
      const imageUrlList = Array.from(files).map(file => ({
        id: `${file.name}-${file.lastModified}`,
        url: URL.createObjectURL(file),
      }));

      setShowImageUrls(prevImages => {
        const existingImageIds = prevImages.map(image => image.id);
        const newImages = imageUrlList.filter(image => !existingImageIds.includes(image.id));
        return [...prevImages, ...newImages].slice(0, 5); // 이미지는 최대 5개까지만 허용
      });
    }
  };

  const handleUploadButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageDelete = (indexToDelete: number) => {
    setShowImageUrls(prevImages => prevImages.filter((_, index) => index !== indexToDelete));
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const reorderedImages = Array.from(showImageUrls);
    const [removed] = reorderedImages.splice(result.source.index, 1);
    reorderedImages.splice(result.destination.index, 0, removed);

    setShowImageUrls(reorderedImages);
  };

  return (
    <>
      <div className="flex gap-3">
        <RadioButton value="웹" checked={selectedSize === "웹"} onChange={handleSizeChange} text="웹" />
        <RadioButton value="모바일" checked={selectedSize === "모바일"} onChange={handleSizeChange} text="모바일" />
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="cardLists" direction="horizontal">
          {provided => (
            <div className="cardLists" {...provided.droppableProps} ref={provided.innerRef}>
              <div
                className={`flex h-[252px] ${showImageUrls.length > 0 ? "w-full" : "w-[690px]"} items-center justify-center rounded-lg border-2 border-dashed border-gray-200 bg-gray-100 p-4`}>
                {showImageUrls.length > 0 ? (
                  <div className="flex h-full w-full flex-row items-start gap-4">
                    {showImageUrls.map((image, index) => (
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
                    {showImageUrls.length < 5 && (
                      <div className="flex h-[220px] w-[220px] items-center justify-center rounded-xl border border-solid border-blue-500 bg-blue-100">
                        <div
                          className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-blue-500"
                          onClick={handleUploadButtonClick}>
                          <Image src={whitePlusIcon} width={18} alt="이미지 추가 버튼" />
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-5">
                    <div className="flex flex-col items-center gap-3">
                      <p className="text-center text-base font-normal text-gray-900">{ImageDescription}</p>
                      <Image src={fullFileIcon} width={64} alt="파일 이미지" />
                    </div>
                    <Button
                      buttonSize="normal"
                      bgColor="mainBlue"
                      className="flex items-center justify-center gap-1"
                      onClick={handleUploadButtonClick}>
                      <Image src={uploadIcon} alt="프로젝트 업로드" width={20} priority />
                      <p>업로드</p>
                    </Button>
                  </div>
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
