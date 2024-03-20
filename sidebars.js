/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  pxDocs: [
    'intro',
    {
      type: 'category',
      label: 'Instructions',
      link: {
        type: 'doc',
        id: 'instructions/index',
      },
      items: [
          {
            type: 'doc',
            id:'instructions/first-steps',
            label: 'First Steps',
          },
          {
            type: 'doc',
            id:'instructions/admin-guide',
            label: 'Admin Guide',
          },
      ]
    },
    {
      type: 'category',
      label: 'Charging Controller',
      link: {
        type: 'doc',
        id: 'controller/index',
      },
      items: [
        {
          type: 'category',
          label: 'Solar Surplus Charging',
          link: {
            type: 'doc',
            id: 'controller/surplus-charging/index',
          },
          items: [
              {
                type: 'doc',
                id:'controller/surplus-charging/evcc',
                label: 'evcc.io',
              },
          ]
        },
        {
          type: 'category',
          label: 'REST / Websocket API',
          link: {
            type: 'doc',
            id: 'controller/rest-ws-api/index',
          },
          items: [
              {
                type: 'doc',
                id:'controller/rest-ws-api/v1-configuration',
                label: '/v1/configuration',
              },
              {
                type: 'doc',
                id:'controller/rest-ws-api/v1-transaction',
                label: '/v1/transaction',
              },
              {
                type: 'doc',
                id:'controller/rest-ws-api/v1-charging',
                label: '/v1/charging',
              },
              {
                type: 'doc',
                id:'controller/rest-ws-api/v1-limits',
                label: '/v1/limits',
              },
          ]
        },
        {
          type: 'category',
          label: 'MQTT API',
          link: {
            type: 'doc',
            id: 'controller/mqtt-api/index',
          },
          items: [
              {
                type: 'doc',
                id:'controller/mqtt-api/chargingPoint-status',
                label: '/chargingPoint/status',
              },
              {
                type: 'doc',
                id:'controller/mqtt-api/charging-status',
                label: '/charging/status',
              },
              {
                type: 'doc',
                id:'controller/mqtt-api/tx-status',
                label: '/tx/status',
              },
              {
                type: 'doc',
                id:'controller/mqtt-api/meter-fiscal',
                label: '/meter/fiscal',
              },
              {
                type: 'doc',
                id:'controller/mqtt-api/meter-grid',
                label: '/meter/grid',
              },
              {
                type: 'doc',
                id:'controller/mqtt-api/limits',
                label: 'Limits',
              },
          ]
        },
        {
          type: 'doc',
          id:'controller/modbus/modbus-server',
          label: 'Modbus Server',
        },
      ]
    },
    {
      type: 'doc',
      id:'backend/backend-api',
      label: 'Backend API',
    },
  ]
};

export default sidebars;
