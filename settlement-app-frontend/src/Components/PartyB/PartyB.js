import React, { useState, useEffect } from "react";

export const PartyB = () => {
    const [settlement, setSettlement] = useState(null);
    const [lastCheckedAmountTime, setLastCheckedAmountTime] = useState(null);
  
    const fetchStatus = async () => {
      const response = await fetch('/api/status');
      const data = await response.json();
      setSettlement(data.settlement);
      setLastCheckedAmountTime(new Date(data.settlement.lastResponseTime));
    };
  
    useEffect(() => {
      fetchStatus();
    }, []);
  
    const respond = async (response) => {
      const currentStatus = await fetch('/api/status');
      const currentData = await currentStatus.json();
      if (new Date(currentData.settlement.lastResponseTime) > lastCheckedAmountTime) {
        alert('Party A has responded during your modification. Please refresh the page to see the latest status.');
      } else {
        await fetch('/api/respond', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ response }),
        });
        fetchStatus();
      }
    };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">
        Party B
      </h2>
      <p className="text-lg mb-4">
        Settlement Amount: {settlement ? settlement.amount : "N/A"}
      </p>
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => respond("agreed")}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
          disabled={!settlement || settlement.status === "agreed"}
        >
          Agree
        </button>
        <button
          onClick={() => respond("disputed")}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
          disabled={!settlement || settlement.status === "agreed"}
        >
          Dispute
        </button>
      </div>
      {settlement && (
        <div className="mt-4">
          <h2 className="text-xl font-bold">Settlement Status</h2>
          <p>Amount: {settlement.amount}</p>
          <p>Status: {settlement.status}</p>
          <p>Response: {settlement.response}</p>
        </div>
      )}
    </div>
  );
};
