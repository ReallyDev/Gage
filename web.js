const express = require('express');
const app = express();
const port = 3000;

app.get('/route', async (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const requests = await redis.incr(ip);
  console.log(`Number of requests made so far: {requests}.`);
  if (requests === 1) {
    await redis.expire(ip, 60);
  }
  if (requests > 5) {
    res.status(503)
      .json({
        response: 'Error',
        callsMade: requests,
        msg: 'Too many calls made.'
      });
  } else
    res.json('You have successfully hit route!');
})

app.listen(port, () => console.log(`Bot is listening to http://localhost:${port}`));

// Made By  Real_IceyDev#3339 //
// Redistributing Without Permission Is Prohibited //