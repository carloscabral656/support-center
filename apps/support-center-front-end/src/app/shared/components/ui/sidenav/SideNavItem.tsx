import { ReactNode } from 'react';

export interface sideNavItemProps {
  icon: ReactNode;
  label: string;
}

export const SideNavItem = ({ icon, label }: sideNavItemProps) => {
  return (
    <div className="flex gap-2 items-center rounded-sm color-ink-700 hover:bg-accent-tint hover:font-semibold cursor-pointer text-[14px] pr-2 py-1">
      {icon}
      {label}
    </div>
  );
};
