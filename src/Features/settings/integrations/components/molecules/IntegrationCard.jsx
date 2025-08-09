import IntegrationToggle from '../atoms/IntegrationToggle';

export default function IntegrationCard({ integration, onToggle }) {
  return (
    <div className="col-lg-4 col-md-6 p-2">
      <div className="card whiteBg rounded-3 h-100">
        <div className="d-flex align-items-center justify-content-between">
          <div className='d-flex gap-2'>
            <div className="rounded-circle bg-primary p-2">
              {integration.icon}
            </div>
            <div>
              <h5 className="m-0">{integration.name}</h5>
              <a className="text-dark">{integration.url}</a>
            </div>
          </div>
          <IntegrationToggle
            id={integration.id}
            checked={integration.isEnabled}
            onChange={() => onToggle(integration.id)}
          />
        </div>
        <small className="integration-description">{integration.description}</small>
      </div>
    </div>
  );
}
