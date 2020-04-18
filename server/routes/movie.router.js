const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

//Route for all the movies
router.get('/', (req, res) => {
    // returns all movies
    const queryText = `SELECT * FROM  movies ORDER BY title`;
    pool.query(queryText)
        .then( (result) => {
            res.send(result.rows);
        })
        .catch( (error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});

//Route for a single movie
router.get('/details', (req, res) => {
    // returns one movie
    console.log('query is:',req.query);
    let movie_id = req.query.q;
    const queryText = `
                        SELECT * FROM movies
                        WHERE movies.id = $1;
                    `;
    pool.query(queryText,[movie_id])
        .then( (result) => {
            res.send(result.rows[0]);
        })
        .catch( (error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});

module.exports = router;