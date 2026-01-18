import { storeGovernanceData } from "./governance.store.js";

export function scanProposals(provider) {
  console.log("Scanning for DAO proposals...");

  provider.on("block", (blockNumber) => {
    const exampleProposal = {
      id: blockNumber,
      title: "Example Proposal " + blockNumber,
      status: "active",
      timestamp: Date.now()
    };

    storeGovernanceData(exampleProposal);
  });
}
