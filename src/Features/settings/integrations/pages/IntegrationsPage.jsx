import { IntegrateIcon } from '../../../../assets/Icons/SVG';
import { useIntegrations } from '../hooks/useIntegrations';
import IntegrationsGrid from '../components/organisms/IntegrationsGrid';

export default function IntegrationsPage() {
  const { integrations, handleToggleIntegration } = useIntegrations();

  return (
    <div className="row PrimaryText gap-3">
      <div className="d-flex align-items-center gap-2 my-1">
        <IntegrateIcon stroke="currentColor" />
        <h5 className="m-0">Integrations</h5>
      </div>
      <small>Supercharge your workflow and connect the tools you use everyday</small>
      <hr />
      <IntegrationsGrid integrations={integrations} onToggle={handleToggleIntegration} />
    </div>
  );
}
