import _ from "lodash";
import './BenefitsList.less';
import Benefit from "../benefit/Benefit";

interface BenefitsListProps {
  benefits: string[];
}

export default function BenefitsList({benefits}: BenefitsListProps) {
  return (
    <ul className="benefitsList">
      {_.map(benefits, (benefit, index) => <Benefit key={benefit} benefit={benefit} index={index} />)}
    </ul>
  );
}
  