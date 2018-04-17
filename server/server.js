import express from 'express';

const app = express();

// middlewares mounted
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send({
    message: 'Hello there',
  });
});

app.listen(port, () => console.log(`App running on port ${port}`));
