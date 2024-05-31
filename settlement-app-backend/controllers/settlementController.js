let settlement = {
  amount: null,
  status: "pending",
  response: null,
  lastResponseTime: null,
};

exports.getStatus = (req, res) => {
  res.json({ settlement });
};

exports.submitAmount = (req, res) => {
  const { amount } = req.body;
  settlement.amount = amount;
  settlement.status = "pending";
  settlement.response = null;
  settlement.lastResponseTime = new Date();
  res.json({ success: true });
};

exports.respond = (req, res) => {
  const { response } = req.body;
  settlement.response = response;
  settlement.status = response === "agreed" ? "agreed" : "disputed";
  settlement.lastResponseTime = new Date();
  res.json({ success: true });
};

exports.resetSettlement = (req, res) => {
  settlement = {
    amount: null,
    status: "pending",
    response: null,
    lastResponseTime: null,
  };
  res.json({ success: true });
};
