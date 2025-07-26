import { GridIcon , InventoryIcon , TrellaIcon , ShopIcon , DocIcon , UserIcon, SettingIcon, AnalyticsIcon, InvIcon }
    from '../../../../assets/Icons/SVG';
import KeyFeaturesCard from '../Molecules/KeyFeaturesCard';

export default function KeyFeatures() {
  return <>
  <div className='whiteBg text-center py-5' style={{color: '#0F345C'}}>
    <h2>Key Features</h2>
    <p>Powerful tools designed for every stakeholder in your supply chain</p>
    <div className="row text-start row-cols-md-3 container mx-auto g-4">
      <KeyFeaturesCard
        Icon={<GridIcon fill='#0F345C'/>}
        h6={"Real-time Supply Chain Dashboard"}
        Paragraph={"Comprehensive overview of your entire supply chain with customizable widgets and real-time updates"}
      />
      <KeyFeaturesCard
        Icon={<TrellaIcon fill='#0F345C'/>}
        h6={"Shipment Live Tracking"} 
        Paragraph={"GPS-enabled tracking with accurate ETAs, automatic delay detection, and instant notifications"}
      />
      <KeyFeaturesCard
        Icon={<InvIcon fill='none' stroke={'#0F345C'}/>}
        h6={"Inventory Management"} 
        Paragraph={"Real-time inventory levels with automatic adjustments and threshold-based alerts"}
      />
      <KeyFeaturesCard
        Icon={<InventoryIcon fill='#0F345C'/>}
        h6={"Document Repository"} 
        Paragraph={"Secure storage for all supply chain documents with version control and permission management"}
      />
      <KeyFeaturesCard
        Icon={<AnalyticsIcon stroke={'#0F345C'}/>}
        h6={"KPI Analytics Reporting"}
        Paragraph={"Customizable dashboards tracking key metrics with exportable reports and insights"}
      />
      <KeyFeaturesCard
        Icon={<SettingIcon fill='none' pathStroke='#0F345C' circleStroke='#0F345C'/>}
        h6={"Task Automation"}
        Paragraph={"Streamline workflows with automated task assignment, reminders, and status updates"}
      />
    </div>
  </div>
  </>
}
