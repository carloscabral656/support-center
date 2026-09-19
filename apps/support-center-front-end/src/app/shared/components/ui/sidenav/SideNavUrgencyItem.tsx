export type Urgency = 'low' | 'medium' | 'high' | 'urgent';

export interface SideNavUrgencyItemProps {
  urgency: Urgency;
  label: string;
}

export interface UrgencyDotProps {
  urgency: Urgency;
}

const urgencyColors: Record<Urgency, string> = {
  low: 'bg-priority-low',
  medium: 'bg-priority-medium',
  high: 'bg-priority-high',
  urgent: 'bg-priority-urgent',
};

export const UrgencyDot = ({ urgency }: UrgencyDotProps) => {
  return <span className={`h-2 w-2 rounded-full ${urgencyColors[urgency]}`} aria-hidden="true" />;
};

export const SideNavUrgencyItem = ({ urgency, label }: SideNavUrgencyItemProps) => {
  return (
    <div className="flex cursor-pointer items-center gap-2 rounded-sm py-1 pr-2 text-[14px] text-ink-700 hover:bg-accent-tint hover:font-semibold">
      {' '}
      <UrgencyDot urgency={urgency} /> <span>{label}</span>{' '}
    </div>
  );
};
