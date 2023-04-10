import './Benefit.less';
import { TickSquare } from "../../../assets/images";

interface BenefitProps {
  benefit: string;
  index: number;
}

export default function Benefit({benefit, index}: BenefitProps) {
  return (
    <li className="benefit" key={benefit}>
      <img src={TickSquare} alt={`benefit ${index + 1}`} />
      <span>{benefit}</span>
    </li>
  );
}
  
    