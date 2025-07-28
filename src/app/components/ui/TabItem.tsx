type TabItemProps = {
  label: string;
  targetId: string;
  active: boolean;
  onClick: () => void;
};

export default function TabItem({ label, targetId, active, onClick }: TabItemProps) {
  const handleClick = () => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    onClick();
  };

  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer w-full px-4 py-3 text-center whitespace-nowrap text-sm font-medium border-b-2 transition-all duration-200 ${
        active ? "text-green-600 border-green-600" : "text-gray-700 border-transparent"
      }`}
    >
      {label}
    </div>
  );
}
