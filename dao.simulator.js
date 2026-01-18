export function simulateDAOAction(action, proposalId) {
  return {
    action,
    proposalId,
    status: "simulated",
    timestamp: Date.now()
  };
}
