import { useState } from 'react';
import { integrationsList } from '../utils/integrationsData';

export function useIntegrations() {
  const [integrations, setIntegrations] = useState(integrationsList);

  const handleToggleIntegration = (integrationId) => {
    setIntegrations(prev =>
      prev.map(integration =>
        integration.id === integrationId
          ? { ...integration, isEnabled: !integration.isEnabled }
          : integration
      )
    );
  };

  return { integrations, handleToggleIntegration };
}
