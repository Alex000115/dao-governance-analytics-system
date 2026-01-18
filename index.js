import { connectRPC } from "./rpc.client.js";
import { scanProposals } from "./proposal.scanner.js";
import { NETWORK, DAO_ADDRESS } from "./network.config.js";

console.log("DAO Governance Analytics System");
console.log("Network:", NETWORK);
console.log("DAO:", DAO_ADDRESS);

const provider = connectRPC();
scanProposals(provider);
