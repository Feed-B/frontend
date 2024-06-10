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
        className={`${inputClass} h-11 rounded-lg border border-gray-200 text-sm focus:border-gray-900 focus:outline-none`}
      />
      {error?.message && <span className="text-sm text-red-500">{error.message}</span>}
    </div>
  );
}

export default Input;
