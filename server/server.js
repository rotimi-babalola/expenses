import express from 'express';

const app = express();
const port = 5000;

app.get('/api/hello', (req, res) => {
  res.send({
    message: 'Hello there!',
  })
});

app.listen(port, () => console.log('Magic on this port'));
