export default async function statusHandler(req, res) {
  try {
    const data = await fetch(
      `${process.env.BASE_URL}/values/status?majorDimension=ROWS&key=${process.env.API_KEY}`
    )
      .then(async (res) => await res.json())
      .then((data) => data.values);

    const statusData = {};

    for (let i = 1; i < data.length; i++) {
      const game = data[i][0];
      const status = data[i][1];
      statusData[game] = status;
    }

    res.status(200).json(statusData);
  } catch (err) {
    res.status(500).end(`An error occured: ${err}`);
  }
}
