import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { UseFormRegisterReturn, FieldError } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  inputSize: InputSize;
  register?: UseFormRegisterReturn;
  error?: FieldError;
}

type InputSize = "normal" | "small";

const inputClasses = {
  normal: "w-[384px] px-2 py-3",
  small: "w-[114px] px-2 py-2",
};

function Input({ register, title, type, name, placeholder, inputSize, className, error }: InputProps) {
  const inputClass = twMerge(inputClasses[inputSize], className);
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
        className={`${inputClass} h-11 rounded-lg border border-gray-200 text-sm focus:border-gray-900 focus:outline-none`}
      />
      <div className="h-4">{error?.message && <span className="text-sm text-red-500">{error.message}</span>}</div>
    </div>
  );
}

export default Input;
