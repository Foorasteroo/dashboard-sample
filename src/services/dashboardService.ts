export async function fetchStats() {
  return await fetch("/api/stats").then((response) => response.json());
}
