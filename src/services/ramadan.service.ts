

export async function getRamadanCountdown(){
  const res = await fetch(
    "https://ramadan.zakiego.com/api/countdown?timezoneOffset=8",
    { cache: "no-store" },
  );

  if(!res.ok){
    throw new Error ("Failed to fetch ramadan countdown data");
  }
  return res.json();
}
