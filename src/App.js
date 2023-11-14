import React, { useState } from "react";
import "./css/App.css";
import InputField from "./components/InputField";
import ProfitMarginSlider from "./components/ProfitMarginSlider";
import CostDisplay from "./components/CostDisplay";

const App = () => {
  const [incomingCallVolume, setIncomingCallVolume] = useState(0);
  const [outgoingCallVolume, setOutgoingCallVolume] = useState(100);
  const [incomingTextMessages, setIncomingTextMessages] = useState(0);
  const [outgoingTextMessages, setOutgoingTextMessages] = useState(100);
  const [callRecording, setCallRecording] = useState(0);
  const [newPhoneNumbers, setNewPhoneNumbers] = useState(1);
  const [profitMargin, setProfitMargin] = useState(30);

  // Replace these with actual Twilio rates
  const INCOMING_CALL_RATE = 0.0085; // Example rate per minute
  const OUTGOING_CALL_RATE = 0.014; // Example rate per minute

  const INCOMING_TEXT_MESSAGE_RATE = 0.0079; // Example rate per message
  const OUTGOING_TEXT_MESSAGE_RATE = 0.0079; // Example rate per message

  const RECORDING_PER_MINUTE = 0.0025;
  const RECORDING_STORAGE_COST = 0.0005;

  const PHONE_NUMBER_RATE = 1.15; // Example rate per phone number
  const ADDITIONALFEES_PER_PHONE = 2;

  const calculateCosts = () => {
    const totalIncomingCallCost = incomingCallVolume * INCOMING_CALL_RATE;
    const totalOutgoingCallCost = outgoingCallVolume * OUTGOING_CALL_RATE;
    const totalIncomingTextCost = incomingTextMessages * INCOMING_TEXT_MESSAGE_RATE;
    const totalOutgoingTextCost = outgoingTextMessages * OUTGOING_TEXT_MESSAGE_RATE;

    const totalRecordingCost = callRecording * RECORDING_PER_MINUTE;

    const totalRecordingStorageCost = callRecording * RECORDING_STORAGE_COST;

    const totalPhoneNumberCost = newPhoneNumbers * (PHONE_NUMBER_RATE + ADDITIONALFEES_PER_PHONE);

    const totalCost = totalIncomingCallCost + totalOutgoingCallCost + totalIncomingTextCost + totalOutgoingTextCost + totalRecordingCost + totalRecordingStorageCost + totalPhoneNumberCost;

    const customerCharge = totalCost * (1 + profitMargin / 100);

    const costs = {
      "Incoming Call Cost": totalIncomingCallCost,
      "Outgoing Call Cost": totalOutgoingCallCost,
      "Incoming Text Message Cost": totalIncomingTextCost,
      "Outgoing Text Message Cost": totalOutgoingTextCost,
      "Call Recording Cost": totalRecordingCost,
      "Call Recording Storage Cost": totalRecordingStorageCost,
      "Phone Number Cost": totalPhoneNumberCost,
    };

    return { costs, totalCost, customerCharge };
  };

  const { costs, totalCost, customerCharge } = calculateCosts();

  return (
    <div className="container">
      <h1>Twilio Pricing Calculator</h1>
      <div className="flex-row">
        <div className="flex-item">
          <InputField label="Outgoing Call Volume" type="number" value={outgoingCallVolume} onChange={(e) => setOutgoingCallVolume(e.target.value)} icon="phone" />
          <InputField label="Outgoing Text Messages" type="number" value={outgoingTextMessages} onChange={(e) => setOutgoingTextMessages(e.target.value)} icon="mobile" />
        </div>
        <div className="flex-item">
          <InputField label="Incoming Call Volume" type="number" value={incomingCallVolume} onChange={(e) => setIncomingCallVolume(e.target.value)} icon="phone" />
          <InputField label="Incoming Text Messages" type="number" value={incomingTextMessages} onChange={(e) => setIncomingTextMessages(e.target.value)} icon="mobile" />
        </div>
      </div>
      <div className="flex-row">
        <div className="flex-item">
          <InputField label="Phone Numbers" type="number" value={newPhoneNumbers} onChange={(e) => setNewPhoneNumbers(e.target.value)} />
        </div>
        <div className="flex-item">
          <InputField label="Call Recording (minutes)" type="number" value={callRecording} onChange={(e) => setCallRecording(e.target.value)} icon="clock" />
        </div>
      </div>

      <ProfitMarginSlider value={profitMargin} onChange={(e) => setProfitMargin(e.target.value)} />
      <CostDisplay costs={costs} totalCost={totalCost} customerCharge={customerCharge} />
    </div>
  );
};

export default App;
