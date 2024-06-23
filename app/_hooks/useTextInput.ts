import { ChangeEvent, useState } from "react";

const useTextInput = () => {
  const [value, setValue] = useState("");

  const handleChangeValue = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const handleRemoveValue = () => {
    setValue("");
  };

  const handleSetValue = (insertValue: string) => {
    setValue(insertValue);
  };

  return { value, handleChangeValue, handleRemoveValue, handleSetValue };
};

export default useTextInput;
