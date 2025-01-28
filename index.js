const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.get('/thingy', (req, res) => {
  res.json({hi: "mom"})
})

app.post('/path', (req, res) => {
  console.log(req.body);
  res.json({message: fizzbuzz(req.body.numbers) });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

function fizzbuzz(numbers) {
  return numbers;
}
