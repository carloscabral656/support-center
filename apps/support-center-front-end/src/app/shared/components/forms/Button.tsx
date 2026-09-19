import { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button className="bg-accent text-white rounded-md py-1 px-4 cursor-pointer flex items-center gap-2 justify-center">
      {children}
    </button>
  );
};
