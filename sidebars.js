/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  pxDocs: [
    'intro',
    'app',
    {
      type: 'category',
      label: 'Solar Surplus Charging',
      link: {
        type: 'doc',
        id: 'surplus-charging/index',
      },
      items: [
          {
            type: 'doc',
            id:'surplus-charging/evcc',
            label: 'evcc.io',
          },
      ]
    },
    {
      type: 'category',
      label: 'API',
      link: {
        type: 'doc',
        id: 'user-api/index',
      },
      items: [
        {
          type: 'category',
          label: 'MQTT API',
          link: {
            type: 'doc',
            id: 'user-api/mqtt-api/index',
          },
          items: [
            {
              type: 'doc',
              id:'user-api/mqtt-api/chargingPoint-status',
              label: '/chargingPoint/status',
            },
            {
              type: 'doc',
              id: 'user-api/mqtt-api/charging-status',
              label: '/charging/status',
            },
            {
              type: 'doc',
              id: 'user-api/mqtt-api/tx-status',
              label: '/tx/status',
            },
            {
              type: 'doc',
              id: 'user-api/mqtt-api/meter-fiscal',
              label: '/meter/fiscal',
            },
            {
              type: 'doc',
              id: 'user-api/mqtt-api/meter-grid',
              label: '/meter/grid',
            },
            {
              type: 'doc',
              id: 'user-api/mqtt-api/limits',
              label: 'Limits',
            },
          ],
        },
        {
          type: 'category',
          label: 'REST / Websocket API',
          link: {
            type: 'doc',
            id: 'user-api/ws-rest-api/index',
          },
          items: [
            {
              type: 'doc',
              id: 'user-api/ws-rest-api/v1-configuration',
              label: '/v1/configuration',
            },
            {
              type: 'doc',
              id: 'user-api/ws-rest-api/v1-transaction',
              label: '/v1/transaction',
            },
            {
              type: 'doc',
              id: 'user-api/ws-rest-api/v1-charging',
              label: '/v1/charging',
            },
            {
              type: 'doc',
              id: 'user-api/ws-rest-api/v1-limits',
              label: '/v1/limits',
            },
          ],
        },
        {
          type: 'link',
          label: 'Web API', // The link label
          href: 'https://api.pulsatrix.net/swagger-ui/index.html', // The external URL
        },
      ],
    },
  ],
};

export default sidebars;
