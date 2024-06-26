import * as Tabs from '@radix-ui/react-tabs';

interface TabItemProps {
    value: string;
    icon: React.ComponentType<{ className?: string }>;
    label: string;
  }

export const TabItem: React.FC<TabItemProps> = ({ value, icon: Icon, label }) => (
    <Tabs.Trigger
      value={value}
      className="group py-2 px-4 text-[#7B7B7B] hover:text-[#FF9700] border-b-2 border-transparent focus:outline-none data-[state=active]:text-[#FFFFFF] data-[state=active]:font-medium data-[state=active]:border-[#FF9700] transition flex items-center gap-3"
    >
      <Icon className="w-5 h-5 text-current" />
      {label}
    </Tabs.Trigger>
);