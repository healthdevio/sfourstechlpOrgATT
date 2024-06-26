interface TabContentProps {
  title: string;
  description: any;
}

export const TabsContent: React.FC<TabContentProps> = ({ title, description }) => (
  <div className="h-48 flex flex-col justify-start">
    <h3 className="py-10 text-2xl font-medium">{title}</h3>
    <p className="text-[#CACACA] text-lg pr-4 md:pr-20">{description}</p>
  </div>
);