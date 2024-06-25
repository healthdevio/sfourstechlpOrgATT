interface TabContentProps {
    title: string;
    description: string;
}

export const TabsContent: React.FC<TabContentProps> = ({ title, description }) => (
    <div className="h-48 flex flex-col justify-center">
      <h3 className="py-10 text-xl font-semibold">{title}</h3>
      <p className="text-[#CACACA] pr-80">{description}</p>
    </div>
  );