import { ReactNode } from 'react';
import {
  MdBookmark,
  MdBookmarks,
  MdDashboardCustomize,
  MdOutlineInbox,
  MdOutlineSearch,
} from 'react-icons/md';
import { Button } from '../../forms/Button';
import { Input } from '../../forms/Input';
import { SideNavItem } from './SideNavItem';
import { SideNavUrgencyItem, Urgency } from './SideNavUrgencyItem';
import { UserIconComponent } from '../UserIconComponent';

export const SideNav = () => {
  const itens: { icon: ReactNode; text: string }[] = [
    {
      icon: <MdDashboardCustomize size="1rem" />,
      text: 'Dashboard',
    },
    {
      icon: <MdBookmark size="1rem" />,
      text: 'My Tickets',
    },
    {
      icon: <MdBookmarks size="1rem" />,
      text: 'All Tickets',
    },
    {
      icon: <MdOutlineInbox size="1rem" />,
      text: 'Unassigned',
    },
  ];

  const viewsItens: {
    urgent: Urgency;
    label: string;
  }[] = [
    {
      urgent: 'low',
      label: 'Urgent queue',
    },
    {
      urgent: 'medium',
      label: 'Idle > 24h',
    },
    {
      urgent: 'low',
      label: 'Closed this week',
    },
  ];

  return (
    <aside className="w-60 h-full bg-[#F4F5F7]">
      <div className="p-3">
        <img src="support-center-logo.png" alt="Logo do Support Center" srcset="" />
      </div>
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

      <div className="flex flex-col p-2 gap-2">
        <h2 className="">Views</h2>
        {viewsItens.map((i) => {
          return <SideNavUrgencyItem label={i.label} urgency={i.urgent} />;
        })}
      </div>

      <div className="flex flex-col p-2 gap-2 border-t border-ink-150">
        <div className="grid grid-cols-6 gap-1">
          <div className="col-span-1 flex items-center justify-center">
            <UserIconComponent userName="Carlos Eduardo" />
          </div>

          <div className="col-span-5 flex flex-col pl-2">
            <span className="font-bold text-[14px]">Carlos Eduardo</span>
            <span className="text-[14px] text-ink-300">Suporte de TI</span>
          </div>
        </div>
      </div>
    </aside>
  );
};
