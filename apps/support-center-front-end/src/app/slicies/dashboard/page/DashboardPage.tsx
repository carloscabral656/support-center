import { HiOutlineBell } from 'react-icons/hi2';
import { UserIconComponent } from '../../../shared/components/ui/UserIconComponent';

export const DashboardPage = () => {
  return (
    <div className="w-5/6 h-full">
      <div className="w-full border-b border-ink-150 flex p-4">
        <div className="grow flex items-center font-bold">Dashboard</div>

        <div className="m-auto grow-0 shrink flex items-center gap-4">
          <HiOutlineBell size={20} />
          <UserIconComponent userName="Carlos Eduardo" />
        </div>
      </div>
    </div>
  );
};
