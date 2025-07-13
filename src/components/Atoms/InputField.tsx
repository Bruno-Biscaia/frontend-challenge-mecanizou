import { Typography } from './Typography';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function InputField({ label, id, className, ...rest }: InputFieldProps) {
  return (
    <div>
      <Typography
        as="label"
        className="block text-sm/6 font-medium "
        {...(id ? { htmlFor: id } : {})}
      >
        {label}
      </Typography>
      <div className="mt-2">
        <input
          id={id}
          {...rest}
          className={`block w-full rounded-md px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 ${className}`}
        />
      </div>
    </div>
  );
}
