import React from "react";
import Image from "next/image";
import DirectionButton from "@/app/_components/Button/DirectionButton";
import useImageIndex from "@/app/_hooks/useImageIndex";
import { ProjectResponse } from "@/app/_apis/schema/projectResponse";
import { IMAGE_TYPE } from "@/app/_constants/ProjectData";

interface Props {
  project: ProjectResponse;
}

function ButtonSlide({ project }: Props) {
  const { index, translate, handlePrev, handleNext } = useImageIndex();
  const { largeWidth: imageWidth, largeStyle: imageWidthStyle } = IMAGE_TYPE[project.imageType];

  return (
    <section className="relative flex">
      {index > 0 && (
        <DirectionButton
          direction="left"
          className="absolute -left-5 top-1/2 z-10 -translate-y-1/2 transition-transform"
          onClick={() => handlePrev(imageWidth)}
        />
      )}
      {index < project.imageUrlList.length - 1 && (
        <DirectionButton
          direction="right"
          className="absolute -right-5 top-1/2 z-10 -translate-y-1/2 transition-transform"
          onClick={() => handleNext(imageWidth, project.imageUrlList.length)}
        />
      )}

      <div className={`h-[406px] ${imageWidthStyle} overflow-hidden rounded-xl border border-solid border-gray-300`}>
        <div
          className="flex h-fit w-fit gap-0 duration-500 ease-in-out"
          style={{ transform: `translateX(-${translate}px)` }}>
          {project.imageUrlList.map(image => (
            <div className={`flex h-[406px] ${imageWidthStyle}`} key={image.id}>
              <Image src={image.url} alt="서비스 프로젝트." width={imageWidth} height={406} priority />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ButtonSlide;
