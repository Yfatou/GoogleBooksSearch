const axios = require("axios");
const router = require("express").Router();

router.get("/books", (req, res) => {
    var query = ("https://www.googleapis.com/books/v1/volumes?q=" + req.query);
    console.log(query);
  axios
    // .get("https://www.googleapis.com/books/v1/volumes?q=", { params: req.query })
    .get(query)
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

module.exports = router;