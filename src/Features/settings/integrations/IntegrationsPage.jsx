
import { useState } from 'react';
import { IntegrateIcon } from '../../../assets/Icons/SVG';


export default function IntegrationsPage () {


  const [integrations, setIntegrations] = useState([
    {
      id: 1,
      name: 'Trello',
      url: 'trello.com',
      description: 'Integrate projects, collaborate, manage projects, and reach new productivity peaks.',
      isEnabled: false,
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="2" fill="#0079BF"/>
          <rect x="6" y="6" width="4" height="9" rx="1" fill="white"/>
          <rect x="14" y="6" width="4" height="6" rx="1" fill="white"/>
        </svg>
      ),
    },
    {
      id: 2,
      name: 'Notion',
      url: 'notion.com',
      description: 'Capture thoughts, manage projects, or even run an entire company — and do it exactly the way you want.',
      isEnabled: false,
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="2" fill="#000000"/>
          <text x="12" y="16" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">N</text>
        </svg>
      ),
    },
    {
      id: 3,
      name: 'Google Drive',
      url: 'google.com',
      description: 'Add powerful search capabilities that offer speed, reliability, and collaboration.',
      isEnabled: false,
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <path d="M12 0L15.59 6.83L22 6.83L17.71 11.17L19.18 17.83L12 14.34L4.82 17.83L6.29 11.17L2 6.83L8.41 6.83L12 0Z" fill="#4285F4"/>
          <path d="M7.41 12L12 3L16.59 12L12 21L7.41 12Z" fill="#34A853"/>
          <path d="M12 3L16.59 12L12 21L7.41 12L12 3Z" fill="#EA4335"/>
          <path d="M16.59 12L22 6.83L17.71 11.17L16.59 12Z" fill="#FBBC04"/>
          <path d="M7.41 12L6.29 11.17L2 6.83L7.41 12Z" fill="#FBBC04"/>
        </svg>
      ),
    },
    {
      id: 4,
      name: 'Dropbox',
      url: 'dropbox.com',
      description: 'Seamlessly connect your team\'s cloud files and storage with current projects.',
      isEnabled: false,
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="50%" fill="#0061FF"/>
          <path d="M12 6L8 9L12 12L16 9L12 6Z" fill="white"/>
          <path d="M8 13L12 16L16 13L12 10L8 13Z" fill="white"/>
        </svg>
      ),
    }
  ]);

  const handleToggleIntegration = (integrationId) => {
    setIntegrations(prev => 
      prev.map(integration => 
        integration.id === integrationId 
          ? { ...integration, isEnabled: !integration.isEnabled }
          : integration
      )
    );
  };

  return  <>
    <div className="row PrimaryText gap-3">
        {/* Header */}
        <div className="d-flex align-items-center gap-2 my-1">
          <IntegrateIcon  stroke="currentColor" />
          <h5 className="m-0">Integrations</h5>
        </div>
        <small>Supercharge your workflow and connect the tools you use everyday</small>
        <hr />
        {/* Integrations Grid */}
        <div className='row rounded-3'>
          {integrations.map((integration) => (
            <div key={integration.id} className="col-lg-4 col-md-6 p-2">
              <div className="card whiteBg rounded-3 h-100">
                <div className="d-flex align-items-center justify-content-between">
                  {/* Integration Content */}
                  <div className='d-flex gap-2'>
                    <div className="rounded-circle bg-primary p-2">
                      {integration.icon}
                    </div>
                    <div>
                      <h5 className="m-0">{integration.name}</h5>
                      <a className="text-dark">{integration.url}</a>
                    </div>
                  </div>
                  {/* Toggle Switch */}
                  <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" 
                      id={`switch-${integration.id}`} style={{ width: '3rem', height: '1.8rem' }}
                      onChange={() => handleToggleIntegration(integration.id)} checked={integration.isEnabled}/>
                  </div>
                </div>
                <small className="integration-description">{integration.description}</small>
              </div>
            </div>
          ))}
        </div>
    </div>
  </>
};


