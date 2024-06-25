interface MobileStepProps {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
    iconSize: string;
  }

export const MobileStep: React.FC<MobileStepProps> = ({ icon: Icon, title, description, iconSize }) => (
    <div className="gap-8 flex justify-between mt-12 mb-10">
      <Icon className={`text-[#FF9700] ${iconSize}`} />
      <div>
        <h3 className="py-4 text-xl font-semibold">{title}</h3>
        <p className="text-[#CACACA]">{description}</p>
      </div>
      <hr className='border-[#232323]' />
    </div>
);