import express from 'express';

const app = express();

app.get('/processes', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.send([{ name: 'process 1' }, { name: 'my proc' }]);
});

app.listen(3000, () => {
  console.log('App listening on http://localhost:3000');
});
