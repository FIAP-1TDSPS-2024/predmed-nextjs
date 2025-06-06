/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseFormRegister, FieldError } from "react-hook-form";

type Option = {
  value: string;
  label: string;
};

type FormRadioProps = {
  id: string;
  label: string;
  options: Option[];
  register: UseFormRegister<any>;
  rules?: Record<string, any>;
  error?: FieldError;
};

const FormRadio = ({
  id,
  label,
  options,
  register,
  rules,
  error,
}: FormRadioProps) => {
  return (
    <div className="w-full max-w-md text-black">
      <fieldset className="border border-[#9E9E9E] rounded p-3">
        <legend className="text-sm px-2">{label}</legend>
        <div className="flex gap-4">
          {options.map((option) => (
            <label
              key={option.value}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                value={option.value}
                className="form-radio h-4 w-4 text-blue-500"
                {...register(id, rules)}
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      </fieldset>
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default FormRadio;
