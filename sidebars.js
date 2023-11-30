/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  pxDocs: [
    'intro',
    {
      type: 'category',
      label: 'User API',
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
      ],
    },
  ],
};

export default sidebars;
