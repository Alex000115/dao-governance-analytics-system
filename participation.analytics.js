export function analyzeParticipation(votes) {
  if (!Array.isArray(votes)) return 0;

  const total = votes.length;
  const active = votes.filter((v) => v.active).length;

  return {
    totalVotes: total,
    activeVotes: active,
    participationRate: total === 0 ? 0 : (active / total) * 100
  };
}
