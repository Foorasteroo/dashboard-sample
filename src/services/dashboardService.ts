export async function fetchStats() {
  return await fetch("/api/home").then((response) => response.json());
}
