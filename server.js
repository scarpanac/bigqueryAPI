const express = require('express');
const app = express();
app.enable("trust proxy")
const path = require(`path`);
const bodyParser = require('body-parser');
const apitest = require('./apitest.json');

const {getAllItems} = require('./db/dbStore');
const {getItemById} = require('./db/dbItem');
const apitest1 = {uri: 'https://bigquery-api-dot-lfanttest1.appspot.com/items'};

app.set('view engine', 'pug');
// serve static files from the `public` folder
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'LFANT DEMO PAGE',
    apitest: apitest,
    apitest1:apitest1,
  });
});

app.get('/items', (req, res) => {
  getAllItems()
    .then(row => {
        console.log(row)
      if(row && row.length > 0){        
        res.status(200).send(row);
        //res.status(200).send('Pick customer!');
      } else {
        res.status(404).send('No items with that ID!!');
      }
    });
});

app.get('/items/:id', (req, res) => {
  const id = req.params.id;
  console.log('id',id);
  getItemById(id)
    .then(row => {
      if(row){
        res.status(200).send(row);
      } else {
        res.status(404).send({message: "No product with that ID!"})
      }
    });
});

//app.use(bodyParser.urlencoded({ extended: true }));

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
