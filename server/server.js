import express from 'express';

const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send({
    message: 'Hello there',
  });
});

app.listen(port, () => console.log('Magic on port 5000'));