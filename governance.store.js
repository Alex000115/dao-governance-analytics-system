export function storeGovernanceData(data) {
  console.log("Governance Record:");
  console.log("ID:", data.id);
  console.log("Title:", data.title);
  console.log("Status:", data.status);
  console.log("Time:", new Date(data.timestamp).toISOString());
  console.log("----------------------------");
}
