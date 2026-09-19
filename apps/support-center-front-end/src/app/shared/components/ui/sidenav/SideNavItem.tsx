import { ReactNode } from 'react';

export interface sideNavItemProps {
  icon: ReactNode;
  label: string;
}

export const SideNavItem = ({ icon, label }: sideNavItemProps) => {
  return (
    <div className="rounded-sm border px-2">
      {icon} {label}
    </div>
  );
};
