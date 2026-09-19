import { ReactNode } from 'react';
import { MdClear } from 'react-icons/md';

export interface InputProps {
  leftIcon?: ReactNode;
  placeholder: string;
}

export const Input = ({ leftIcon, placeholder }: InputProps) => {
  return (
    <div className="flex items-center gap-1 bg-white rounded-md border outline-0 border-ink-150 py-1 px-4">
      <input type="text" className="outline-0" placeholder={placeholder} />
      <div className="cursor-pointer rounded-full h-4 w-4 flex justify-center items-center hover:bg-ink-150">
        <MdClear />
      </div>
    </div>
  );
};
