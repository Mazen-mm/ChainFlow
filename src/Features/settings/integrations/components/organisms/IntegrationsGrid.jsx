import IntegrationCard from '../molecules/IntegrationCard';

export default function IntegrationsGrid({ integrations, onToggle }) {
  return (
    <div className='row rounded-3'>
      {integrations.map((integration) => (
        <IntegrationCard
          key={integration.id}
          integration={integration}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}
