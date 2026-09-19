import { Button } from '../../forms/Button';
import { Input } from '../../forms/Input';
import { SideNavItem } from './SideNavItem';
import { MdOutlineSearch } from 'react-icons/md';

export const SideNav = () => {
  const itens: { icon: string; text: string }[] = [
    {
      icon: 'teste',
      text: 'Dashboard',
    },
    {
      icon: 'teste',
      text: 'My Tickets',
    },
    {
      icon: 'teste',
      text: 'All Tickets',
    },
    {
      icon: 'teste',
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
