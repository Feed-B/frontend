import React from "react";
import Image from "next/image";
import { ProjectResponse } from "@/app/_apis/schema/projectResponse";
import { IMAGE_TYPE } from "@/app/_constants/ProjectData";

interface Props {
  project: ProjectResponse;
}

function ScrollSlide({ project }: Props) {
  const { width: imageWidth, style: imageWidthStyle } = IMAGE_TYPE[project.imageType];

  return (
    <section>
      <div className="flex h-[406px] overflow-x-scroll scrollbar-hide">
        <div className="flex h-fit w-fit gap-x-2">
          {project.imageUrlList.map(image => (
            <div
              className={`flex h-[406px] ${imageWidthStyle} overflow-hidden rounded-xl border border-solid border-gray-300`}
              key={image.id}>
              <Image src={image.url} alt="서비스 프로젝트." width={imageWidth} height={406} priority />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ScrollSlide;
