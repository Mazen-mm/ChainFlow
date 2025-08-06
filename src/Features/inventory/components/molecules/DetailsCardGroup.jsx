import { AnalyticsIcon, ExclamIcon, InvIcon, TrellaIcon } from "../../../../assets/Icons/SVG";
import DetailsCard from "../../../../Shared/Components/Molecules/DetailsCard";

export function DetailsCardGroup() {
  return (
    <div className="row">
      <DetailsCard detailName="Total Items" detailNum="2,847" icon={<InvIcon fill='none' stroke={'#5C8DFF'} />} />
      <DetailsCard detailName="Low Stock Alerts" detailNum="24" icon={<ExclamIcon stroke='#5C8DFF'/>} />
      <DetailsCard detailName="Incoming Shipments" detailNum="12" icon={<TrellaIcon fill={'#5C8DFF'} />} />
      <DetailsCard detailName="Total Value" detailNum="$1.2M" icon={<AnalyticsIcon stroke='#5C8DFF'/>} />
    </div>
  );
}
