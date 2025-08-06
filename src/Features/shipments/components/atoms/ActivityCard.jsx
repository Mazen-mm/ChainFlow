
import { ExclamIcon } from '../../../../assets/Icons/SVG';

export default function ActivityCard({ activity }) {
  return (
    <div className={`card border-1 rounded-2 h-100 bg-${activity.color} bg-opacity-10`}>
      <div className="d-flex align-items-start p-2">
        <div className={`me-3 text-${activity.color}`}>
          <ExclamIcon stroke="red" />
        </div>
        <div>
          <h6>{activity.id}: {activity.title}</h6>
          <p>{activity.subtitle}</p>
        </div>
      </div>
    </div>
  );
}
