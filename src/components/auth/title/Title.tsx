import './Title.less';

interface TitleProps {
  text: string;
}

export default function Title({text}: TitleProps) {
  return <h1 className="title">{text}</h1>;
}
  