import React, { useState, useEffect } from "react";

export const PartyA = () => {
  const [amount, setAmount] = useState("");
  const [settlement, setSettlement] = useState(null);
  const [lastCheckedResponseTime, setLastCheckedResponseTime] = useState(null);

  const fetchStatus = async () => {
    const response = await fetch("/api/status");
    const data = await response.json();
    setSettlement(data.settlement);
    setLastCheckedResponseTime(new Date(data.settlement.lastResponseTime));
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  const submitAmount = async () => {
    const response = await fetch("/api/status");
    const data = await response.json();
    if (new Date(data.settlement.lastResponseTime) > lastCheckedResponseTime) {
      alert(
        "Party B has responded during your modification. Please refresh the page to see the latest status."
      );
    } else {
      await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });
      fetchStatus();
    }
  };

  const resetSettlement = async () => {
    await fetch("/api/reset", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    setAmount("");
    fetchStatus();
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">
        Party A
      </h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 mb-4 w-full rounded"
        placeholder="Enter settlement amount"
      />
      <button
        onClick={submitAmount}
        className="bg-blue-500 text-white py-2 px-4 rounded w-full mb-4 hover:bg-blue-700"
        disabled={settlement && settlement.status === "agreed"}
      >
        Submit Amount
      </button>
      {settlement && settlement.status === "agreed" && (
        <button
          onClick={resetSettlement}
          className="bg-yellow-500 text-white py-2 px-4 rounded w-full hover:bg-yellow-700"
        >
          Start New Settlement
        </button>
      )}
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
