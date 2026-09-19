import { ReactNode } from 'react';
import { Button } from '../../forms/Button';
import { Input } from '../../forms/Input';
import { SideNavItem } from './SideNavItem';
import { MdOutlineSearch } from 'react-icons/md';
import { MdDashboardCustomize } from 'react-icons/md';
import { MdList } from 'react-icons/md';
import { MdOutlineInbox } from 'react-icons/md';

export const SideNav = () => {
  const itens: { icon: ReactNode; text: string }[] = [
    {
      icon: <MdDashboardCustomize />,
      text: 'Dashboard',
    },
    {
      icon: <MdList />,
      text: 'My Tickets',
    },
    {
      icon: <MdList />,
      text: 'All Tickets',
    },
    {
      icon: <MdOutlineInbox />,
      text: 'Unassigned',
    },
  ];

  const viewsItens: {
    urgent: string;
    text: string;
  }[] = [
    {
      urgent: '',
      text: 'Urgent queue',
    },
    {
      urgent: '',
      text: 'Idle > 24h',
    },
    {
      urgent: '',
      text: 'Closed this week',
    },
  ];

  return (
    <aside className="w-60 h-full bg-[#F4F5F7]">
      <div className="p-3">SupportCenter</div>
      <hr className="text-ink-150" />

      <div className="flex flex-col p-2 gap-2">
        <Button>New Ticket</Button>
        <Input placeholder="Pesquise" leftIcon={<MdOutlineSearch />} />
      </div>

      <div className="flex flex-col p-2 gap-2">
        {itens.map((i) => {
          return <SideNavItem icon={i.icon} label={i.text} />;
        })}
      </div>

      <div className="flex flex-col">
        {viewsItens.map((i) => {
          return <div>{i.text}</div>;
        })}
      </div>
    </aside>
  );
};
