import { UseFormRegister, FieldError } from "react-hook-form";

type FormInputProps = {
  id: string;
  placeholder: string;
  register: UseFormRegister<any>;
  rules?: Record<string, any>;
  error?: FieldError;
};

const FormInput = ({
  id,
  placeholder,
  register,
  rules,
  error,
}: FormInputProps) => {
  return (
    <div className="w-full max-w-md">
      <input
        type="text"
        placeholder={placeholder}
        className={`p-2 pl-3 pr-20 w-full rounded border ${
          error ? "border-red-500" : "border-[#9E9E9E]"
        } text-black`}
        {...register(id, rules)}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default FormInput;
