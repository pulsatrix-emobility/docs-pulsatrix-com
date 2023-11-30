"use strict";(self.webpackChunkdocs_pulsatrix_com=self.webpackChunkdocs_pulsatrix_com||[]).push([[53],{1109:t=>{t.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"pxDocs":[{"type":"link","label":"Intro","href":"/docs/intro","docId":"intro","unlisted":false},{"type":"category","label":"User API","items":[{"type":"category","label":"MQTT API","items":[{"type":"link","label":"/chargingPoint/status","href":"/docs/user-api/mqtt-api/chargingPoint-status","docId":"user-api/mqtt-api/chargingPoint-status","unlisted":false},{"type":"link","label":"/charging/status","href":"/docs/user-api/mqtt-api/charging-status","docId":"user-api/mqtt-api/charging-status","unlisted":false},{"type":"link","label":"/tx/status","href":"/docs/user-api/mqtt-api/tx-status","docId":"user-api/mqtt-api/tx-status","unlisted":false},{"type":"link","label":"/meter/fiscal","href":"/docs/user-api/mqtt-api/meter-fiscal","docId":"user-api/mqtt-api/meter-fiscal","unlisted":false},{"type":"link","label":"/meter/grid","href":"/docs/user-api/mqtt-api/meter-grid","docId":"user-api/mqtt-api/meter-grid","unlisted":false},{"type":"link","label":"Limits","href":"/docs/user-api/mqtt-api/limits","docId":"user-api/mqtt-api/limits","unlisted":false}],"collapsed":true,"collapsible":true,"href":"/docs/mqtt-api"},{"type":"category","label":"REST / Websocket API","items":[{"type":"link","label":"/v1/transaction","href":"/docs/user-api/ws-rest-api/v1-transaction","docId":"user-api/ws-rest-api/v1-transaction","unlisted":false},{"type":"link","label":"/v1/charging","href":"/docs/user-api/ws-rest-api/v1-charging","docId":"user-api/ws-rest-api/v1-charging","unlisted":false},{"type":"link","label":"/v1/limits","href":"/docs/user-api/ws-rest-api/v1-limits","docId":"user-api/ws-rest-api/v1-limits","unlisted":false}],"collapsed":true,"collapsible":true,"href":"/docs/ws-rest-api"}],"collapsed":true,"collapsible":true,"href":"/docs/user-api/"}]},"docs":{"intro":{"id":"intro","title":"Intro","description":"Welcome to the documentation site for the pulsatrix Electric Vehicle Charging System! We\'re thrilled to introduce you to","sidebar":"pxDocs"},"user-api/index":{"id":"user-api/index","title":"User API","description":"The User API supports three different protocols that can be used to communicate with the pulsatrix charging station controller. We provide a RESTful API, a WebSocket API and a MQTT API. While REST and Websocket offer similar endpoints and data types, MQTT uses a message- and topic-based model with some additional data.","sidebar":"pxDocs"},"user-api/mqtt-api/charging-status":{"id":"user-api/mqtt-api/charging-status","title":"/charging/status","description":"The /charging/status endpoint contains general information about the current charging session.","sidebar":"pxDocs"},"user-api/mqtt-api/chargingPoint-status":{"id":"user-api/mqtt-api/chargingPoint-status","title":"/chargingPoint/status","description":"This endpoint provides high-level status information about a single charging point.","sidebar":"pxDocs"},"user-api/mqtt-api/index":{"id":"user-api/mqtt-api/index","title":"MQTT API","description":"To use the MQTT API, the MQTT connector must be enabled in the MQTT component configuration. At least the URI of the MQTT broker to be used must be configured, but depending on the installation other parameters may also be required. After saving the settings, you will need to restart the SECC in order to make the changes take effect.","sidebar":"pxDocs"},"user-api/mqtt-api/limits":{"id":"user-api/mqtt-api/limits","title":"Limits","description":"To set the limits applicable to a charging session, send a message body containing the value as a string to the corresponding topic.","sidebar":"pxDocs"},"user-api/mqtt-api/meter-fiscal":{"id":"user-api/mqtt-api/meter-fiscal","title":"/meter/fiscal","description":"The fiscal metering topic provides meter data of the EVSE.","sidebar":"pxDocs"},"user-api/mqtt-api/meter-grid":{"id":"user-api/mqtt-api/meter-grid","title":"/meter/grid","description":"The grid meter topic provides metering data at the grid connection point of a power-domain. In most scanarios it reflects the sum of all currents going into or out of the building. This contains the values of all fiscal meters.","sidebar":"pxDocs"},"user-api/mqtt-api/tx-status":{"id":"user-api/mqtt-api/tx-status","title":"/tx/status","description":"The transaction status topic contains information about an ongoing charging transaction.","sidebar":"pxDocs"},"user-api/ws-rest-api/index":{"id":"user-api/ws-rest-api/index","title":"REST / WebSocket API","description":"The REST and WebSocket API have the same endpoints and functionality. The only difference lies in the way the limits are set.","sidebar":"pxDocs"},"user-api/ws-rest-api/v1-charging":{"id":"user-api/ws-rest-api/v1-charging","title":"/v1/charging","description":"The /charging endpoint provides momentary information about the current charging process.","sidebar":"pxDocs"},"user-api/ws-rest-api/v1-limits":{"id":"user-api/ws-rest-api/v1-limits","title":"/v1/limits","description":"The /limits endpoint provides control functionality for the limits of the SECC.You can set the limits through the SET endpoint, and use a GET to get the current values set through the API.","sidebar":"pxDocs"},"user-api/ws-rest-api/v1-transaction":{"id":"user-api/ws-rest-api/v1-transaction","title":"/v1/transaction","description":"The transaction endpoint returns transactional information about the charging session.","sidebar":"pxDocs"}}}')}}]);