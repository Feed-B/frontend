import { ChangeEventHandler, InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { UseFormRegisterReturn, FieldError } from "react-hook-form";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  inputSize: InputSize;
  register?: UseFormRegisterReturn;
  error?: FieldError;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

type InputSize = "large" | "normal" | "small";

const inputClasses = {
  large: "w-[690px] px-2 py-3",
  normal: "w-[384px] px-2 py-3",
  small: "w-[114px] px-2 py-2",
};

function Input({ register, title, type, name, placeholder, inputSize, className, error, onChange }: InputProps) {
  const inputClass = twMerge(inputClasses[inputSize], className);
  const borderClass = error ? "border-red-300" : "border-gray-200";
  const errorBorderClass = error ? "focus:border-red-500" : "focus:border-gray-900";

  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="mb-2 text-base font-bold text-gray-900">
        {title}
      </label>
      <input
        {...register}
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className={`${inputClass} h-11 rounded-lg border ${borderClass} text-sm ${errorBorderClass} focus:outline-none`}
      />
      <div className="h-4">{error?.message && <span className="text-sm text-red-500">{error.message}</span>}</div>
    </div>
  );
}

export default Input;
