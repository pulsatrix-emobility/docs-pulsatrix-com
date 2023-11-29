"use strict";(self.webpackChunkdocs_pulsatrix_com=self.webpackChunkdocs_pulsatrix_com||[]).push([[873],{1837:e=>{e.exports=JSON.parse('{"url":"redocusaurus/plugin-redoc-0.yaml","themeId":"theme-redoc","isSpecFile":true,"spec":{"openapi":"3.0.3","info":{"title":"pulsatrix REST API","description":"","version":"1.0.11"},"servers":[{"url":"https://xxx/api/v1/"}],"tags":[{"name":"REST"}],"paths":{"/configuration":{"get":{"tags":["REST"],"summary":"Returns configurational data","description":"Returns all configurational (static) values of a charging session.  \\nThose values only change when a new charging session is started\\n","responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"$ref":"#/components/schemas/configuration"}}}}}}},"/transaction":{"get":{"tags":["REST"],"summary":"Returns transactional data","description":"Returns all transactional values of the charging session\\n\\nThose values change when session specific values change.  \\ne.g. the car starts charging and the vehicleStatus switches B -> C\\n","responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"$ref":"#/components/schemas/transaction"}}}}}}},"/charge":{"get":{"tags":["REST"],"summary":"Returns charging data","description":"Returns all charging relevant values of the charging session\\n\\nThose values change constantly, whenever charging values change.  \\ne.g. the commanded amperage increases 6A -> 14.2A\\n","responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"$ref":"#/components/schemas/charge"}}}}}}},"/set":{"put":{"tags":["REST"],"summary":"Updates charging relevant data","description":"updates charging relevant data. When setting amperageLimit and powerLimit at the same time the lower limit is used.\\n","responses":{"204":{"description":"No Content (The server successfully processed the request, and is not returning any content.)"}},"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/set"}}},"required":true}},"get":{"tags":["REST"],"summary":"Returns updated charging data","description":"returns the charging relevant data set by the api, regardless of their validity.\\n","responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"$ref":"#/components/schemas/set"}}}}}}}},"components":{"schemas":{"configuration":{"type":"object","properties":{"session-id":{"type":"string","example":"018ba9bc-5ebe-b235-e5fb-dba94e99767e","description":"UUID of the charging session."},"effectiveAmperageLimit":{"type":"integer","format":"int32","example":32,"description":"absolute amperage limit of the EVSE"}}},"transaction":{"type":"object","properties":{"state":{"type":"string","enum":["Idle","EVConnected","SuspendedEV","SuspendedEVSE","Charging"],"description":"states a charging controller can have\\n* `Idle`: There is no connection between EV and EVSE.\\n* `EVConnected`: There is a connection between EV and EVSE, in case the protocol used between EV and the EVSE can detect a connection, the protocol needs to detect this for the state to become active. The connection can either be wired or wireless.\\n* `SuspendedEV`: When the EV is connected to the EVSE and the EVSE is offering energy but the EV is not taking any energy.\\n* `SuspendedEVSE`: When the EV is connected to the EVSE but the EVSE is not offering energy to the EV, e.g. due to a smart charging restriction, local supply power constraints, or when charging has stopped because of the authorization status in the response to a transactionEventRequest indicating that charging is not allowed etc.\\n* `Charging`: The contactor of the Connector is closed and energy is flowing to between EVSE and EV.\\n"},"startedTime":{"type":"integer","format":"int32","example":1699359776,"description":"time when the EVSE started charging."},"endedTime":{"type":"integer","format":"int32","example":1699359816,"description":"time when the EVSE stopped charging."},"meterStart":{"type":"number","format":"float32","example":0.302999973,"description":"value of the energyMeter at the start of the session."},"meterStop":{"type":"number","format":"float32","example":0.302999973,"description":"value of the energyMeter at the end of the session."},"vehicleStatus":{"type":"string","enum":["A1","B1","C1","D1","E1","F1","S1","R1","B2","C2","D2","UNKNOWN"],"description":"IEC 61851 Status of the EV\\n* ` A1` - standby              \\n* ` B1` - vehicle detected     \\n* ` C1` - charge request       \\n* ` D1` - charge & vent request\\n* ` E1` - shut off          \\n* ` F1` - error             \\n* ` S1` - restart after error status\\n* ` R1` - diode fail        \\n* ` B2` - charging offered  \\n* ` C2` - charging          \\n* ` D2` - charging + venting\\n"},"chargeControllerStatus":{"type":"string","enum":["A","B","C","D","E","F","S","R"],"description":"IEC 61851 Status of the SECC\\n* `A` - disconnected\\n* `B` - connected\\n* `C` - charge request\\n* `D` - charge & ventilation request\\n* `E` - short circuit\\n* `F` - error\\n* `S` - startup / unknown\\n* `R` - diode fail\\n"},"usedPhasesSession":{"type":"string","example":"111","description":"phases used for charging the EV."},"startReason":{"type":"string","enum":["Authorized","CablePluggedIn","ChargingRateChanged","ChargingStateChanged","Deauthorized","EnergyLimitReached","EVCommunicationLost","EVConnectTimeout","MeterValueClock","MeterValuePeriodic","TimeLimitReached","Trigger","UnlockCommand","StopAuthorized","EVDeparted","EVDetected","RemoteStop","RemoteStart","AbnormalCondition","SignedDataReceived","ResetCommand"],"description":"reason why a charging start is issued.\\n* `Authorized`: Charging is authorized, by any means. Might be an RFID, or other authorization means.\\n* `CablePluggedIn`: Cable is plugged in and EVDetected.\\n* `ChargingRateChanged`: Rate of charging changed by more than LimitChangeSignificance.\\n* `ChargingStateChanged`: Charging State changed.\\n* `Deauthorized`: The transaction was stopped because of the authorization status in the response to a transactionEventRequest.\\n* `EnergyLimitReached`: Maximum energy of charging reached. For example: in a pre-paid charging solution.\\n* `EVCommunicationLost`: Communication with EV lost, for example: cable disconnected.\\n* `EVConnectTimeout`: EV not connected before the connection is timed out.\\n* `MeterValueClock`: Needed to send a clock aligned meter value.\\n* `MeterValuePeriodic`: Needed to send a periodic meter value.\\n* `TimeLimitReached`: Maximum time of charging reached. For example: in a pre-paid charging solution.\\n* `Trigger`: Requested by the CSMS via a TriggerMessageRequest.\\n* `UnlockCommand`: CSMS sent an Unlock Connector command.\\n* `StopAuthorized`: An EV Driver has been authorized to stop charging. For example: By swiping an RFID card.\\n* `EVDeparted`: EV departed. For example: When a departing EV triggers a parking bay detector.\\n* `EVDetected`: EV detected. For example: When an arriving EV triggers a parking bay detector.\\n* `RemoteStop`: A RequestStopTransactionRequest has been sent.\\n* `RemoteStart`: A RequestStartTransactionRequest has been sent.\\n* `AbnormalCondition`: An Abnormal Error or Fault Condition has occurred.\\n* `SignedDataReceived`: Signed data is received from the energy meter.\\n* `ResetCommand`: CSMS sent a Reset Charging Station command.\\n"},"stopReason":{"type":"string","enum":["DeAuthorized","EmergencyStop","EnergyLimitReached","EVDisconnected","GroundFault","ImmediateReset","Local","LocalOutOfCredit","MasterPass","Other","OvercurrentFault","PowerLoss","PowerQuality","Reboot","Remote","SOCLimitReached","StoppedByEV","TimeLimitReached","Timeout"],"description":"reason why a charging stop is issued.\\n* `DeAuthorized`: The transaction was stopped because of the authorization status in the response to a transactionEventRequest.\\n* `EmergencyStop`: Emergency stop button was used.\\n* `EnergyLimitReached`: EV charging session reached a locally enforced maximum energy transfer limit.\\n* `EVDisconnected`: Disconnecting of cable, vehicle moved away from inductive charge unit.\\n* `GroundFault`: A GroundFault has occurred.\\n* `ImmediateReset`: A Reset(Immediate) command was received.\\n* `Local`: Stopped locally on request of the EV Driver at the EVSE. This is a regular termination of a transaction. Examples: presenting an IdToken tag, pressing a button to stop.\\n* `LocalOutOfCredit`: A local credit limit enforced through the EVSE has been exceeded. \\n* `MasterPass`: The transaction was stopped using a token with a MasterPassGroupId.\\n* `Other`: Any other reason.\\n* `OvercurrentFault`: A larger than intended electric current has occurred.\\n* `PowerLoss`: Complete loss of power.\\n* `PowerQuality`: Quality of power too low, e.g. voltage too low/high, phase imbalance, etc.\\n* `Reboot`: A locally initiated reset/reboot occurred. (for instance watchdog kicked in)\\n* `Remote`: Stopped remotely on request of the CSMS. This is a regular termination of a transaction.\\n* `SOCLimitReached`: Electric vehicle has reported reaching a locally enforced maximum battery State of Charge (SOC).\\n* `StoppedByEV`: The transaction was stopped by the EV.\\n* `TimeLimitReached`: EV charging session reached a locally enforced time limit.\\n* `Timeout`: EV not connected within timeout.\\n"},"allocationSourceName":{"type":"string","enum":["OCPP Profile","API","Transaction","MQTT","ProximityPilot","Team","Unmanaged"],"description":"describes what is currently in control of the EVSE\\n* `OCPP Profile` \\n* `API` \\n* `Transaction` \\n* `MQTT`\\n* `ProximityPilot`\\n* `Team`\\n* `Unmanaged`\\n"}}},"charge":{"type":"object","properties":{"voltage":{"type":"array","items":{"type":"number","format":"float32"},"example":[234.1605072,234.0818024,234.2052612],"description":"current per phase voltage"},"amperage":{"type":"array","items":{"type":"number","format":"float32"},"example":[8.13,8.2,8.09],"description":"current per phase amperage"},"allocatedAmperage":{"type":"number","format":"float32","example":16},"commandedAmperage":{"type":"number","format":"float32","example":0},"availableAmperage":{"type":"number","format":"float32","example":18},"signaledAmperage":{"type":"number","format":"float32","example":18,"description":"amperage signaled to the EV"},"frequency":{"type":"number","format":"float32","example":49.930336,"description":"current grid frequency in Hz"},"energyImported":{"type":"number","format":"float32","example":0.307999998,"description":"current meter value"},"lastActivePower":{"type":"number","format":"float32","example":2036.600098,"description":"last active power of the EVSE"}}},"set":{"type":"object","properties":{"enabled":{"type":"boolean","description":"enables/disables charging"},"amperageLimit":{"type":"number","minimum":0,"maximum":80,"format":"float32","example":15.5,"description":"sets the amperage limit (a value below 6A will be set to 0A)\\nset to NaN to signal the SECC to take control\\n"},"powerLimit":{"type":"number","minimum":0,"maximum":55200,"format":"float32","example":10000,"description":"sets the power Limit (a value below 1380W will be set to 0W)\\nset to NaN to signal the SECC to take control\\n"},"timeout":{"type":"number","minimum":5000,"maximum":86400,"format":"int32","example":300000,"description":"sets the time in ms when the data set by the API becomes invalid"}}}}}}}')}}]);