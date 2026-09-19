export interface UserIconComponentProps {
  userName: string;
}

export const UserIconComponent = ({ userName }: UserIconComponentProps) => {
  const userNamePrefix0 = userName.split(' ')[0] ?? '';
  const userNamePrefix1 = userName.split(' ')[1] ?? '';

  return (
    <div className="h-8 h-min-8 w-8 w-min-8 rounded-full flex items-center justify-center text-accent-600 bg-accent-tint-strong text-[14px] font-semibold">
      {userNamePrefix0[0] + userNamePrefix1[0]}
    </div>
  );
};
