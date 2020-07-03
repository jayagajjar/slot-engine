const express = require('express');
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express();



const connectionString= 'mongodb+srv://admin:admin@cluster0.jfber.mongodb.net/slot-data?retryWrites=true&w=majority';

MongoClient.connect(connectionString, { useUnifiedTopology: true })
.then(client => {
  console.log('Connected to Database')
  const db = client.db('slot-data');
  const slotReels = db.collection('reels')
  app.set('view engine', 'ejs')
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(express.static('public'))
  app.use(bodyParser.json())
  let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
  app.listen(process.env.PORT, function() {
    console.log('listening on 3000')
  })

  app.get('/', (req, res) => {
    //res.sendFile(__dirname + '/index.html')
        db.collection('reels').find().toArray()
    .then(results => {
        res.render('index.ejs', { reels: results })
    })
    .catch(error => console.error(error))
    
    }
   
    
   
    );

    app.post('/quotes', (req, res) => {
        console.log(req.body);
        slotReels.insertOne(req.body)
    .then(result => {
        res.redirect('/')
    })
    .catch(error => console.error(error))
      })

      app.put('/quotes', (req, res) => {
        slotReels.findOneAndUpdate({ name: '1' },
        {
          $set: {
            name: req.body.name,
            quote: req.body.quote
          }
        },
        {
          upsert: true
        }
      )
        .then(result => {
            res.json('Success')
         })
        .catch(error => console.error(error))
      })
})
.catch(error => console.error(error))



console.log('May Node be with you');