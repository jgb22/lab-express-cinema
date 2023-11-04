const express = require('express');
const router = express.Router();
const Movie = require('./models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));



//Get movies page// 

router.get('/movies', (req, res, next) => {
    console.log(movie);
    Movie.find()
        .then((movies) => {
            res.render("movies", { movies })
})
    .catch((err) => {
        console.log(err)
    })
})
router.get("/movies/:id", (req,res,next)=>{
    Movie.findById(req.params.id)
    .then((movie)=>{
        console.log(movie)
        res.render('movie-detail',movie)
    })
    .catch((error) => {
        console.log(error);
      });

})

module.exports = router;

