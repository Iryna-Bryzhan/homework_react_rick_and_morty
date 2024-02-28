export async function req(url) {
  const rez = await fetch(url);
  return await rez.json();
}
