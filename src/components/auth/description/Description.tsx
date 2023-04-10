import './Description.less';

interface DescriptionProps {
  text: string;
}

export default function Description({text}: DescriptionProps) {
  return <p className="description">{text}</p>;
}
  