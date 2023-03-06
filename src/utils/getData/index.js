export default async function getData(game) {
  const data = await fetch(
    `${process.env.BASE_URL}/values/${game}!A2%3AF3?majorDimension=COLUMNS&key=${process.env.API_KEY}`
  )
    .then((res) => res.json())
    .then((data) => data.values);

  const newData = {};
  newData.dayCIS = data[0];
  newData.dayEU = data[1];
  newData.weekCIS = data[2];
  newData.weekEU = data[3];
  newData.monthCIS = data[4];
  newData.monthEU = data[5];

  return newData;
}
