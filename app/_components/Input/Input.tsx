import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { UseFormRegisterReturn, FieldError } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  inputSize: InputSize;
  register: UseFormRegisterReturn;
  error?: FieldError;
}

type InputSize = "large" | "medium" | "small";

const inputClasses = {
  large: "w-[958px] px-3 py-3",
  medium: "w-[379px] px-4 py-2",
  small: "w-[197px] px-4 py-2",
};

function Input({ register, title, type, name, placeholder, inputSize, className, error }: InputProps) {
  const inputClass = twMerge(inputClasses[inputSize], className);
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-base font-bold text-gray-900">
        {title}
      </label>
      <input
        {...register}
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className={`${inputClass} h-12 rounded border border-gray-200`}
      />
      {error?.message && <span className="text-sm text-red-500">{error.message}</span>}
    </div>
  );
}

export default Input;
