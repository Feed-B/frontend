import { ChangeEvent, useRef, useState } from "react";

const useFileInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      setImageFile(file);
    }
  };

  const handleRemoveImage = () => {
    setImage("default");
  };

  const handleSelectImageClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleSetImage = (imageUrl: string) => {
    setImage(imageUrl);
  };

  return {
    inputRef,
    image,
    handleImageChange,
    handleRemoveImage,
    handleSelectImageClick,
    handleSetImage,
    imageFile,
  };
};

export default useFileInput;
