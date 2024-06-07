import React from "react";
import ThumbnailBox from "../ImageBox/ThumbnailBox";
import ImageBox from "../ImageBox/ImageBox";

interface ImageSectionProps {
  title: string;
}

function ImageSection({ title }: ImageSectionProps) {
  return (
    <section>
      <h2 className="mb-4 mt-6 text-base font-bold text-gray-900">{title} *</h2>
      {title == "썸네일" && <ThumbnailBox />}
      {title == "이미지" && <ImageBox />}
    </section>
  );
}

export default ImageSection;
