import { getAddress } from "ethers";
import { DAO_ADDRESS } from "./network.config.js";

export function isTargetDAO(address) {
  if (!address) return false;
  try {
    return (
      getAddress(address).toLowerCase() ===
      getAddress(DAO_ADDRESS).toLowerCase()
    );
  } catch {
    return false;
  }
}
