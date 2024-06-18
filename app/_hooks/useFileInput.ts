import { ChangeEvent, useRef, useState } from "react";

const useHandleInputFile = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<string>("");

  const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleImageListChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleRemoveImage = () => {
    setImage("");
  };

  const handleSelectImageClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return { inputRef, image, handleImageChange, handleImageListChange, handleRemoveImage, handleSelectImageClick };
};

export default useHandleInputFile;
