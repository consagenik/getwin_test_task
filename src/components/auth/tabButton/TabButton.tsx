import './TabButton.less';

interface TabButtonProps {
  text: string;
  isActive: boolean;
  onClick: (tab: string) => void;
}

export default function TabButton({
  text,
  isActive,
  onClick
}: TabButtonProps) {
  return (
    <button
      className={isActive ? 'tabButton' : 'tabButton default'}
      onClick={() => onClick('login')}
    >
      {text}
    </button>
  );
}
  