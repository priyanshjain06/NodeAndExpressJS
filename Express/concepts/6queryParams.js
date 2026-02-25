const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  res.send('<h1> Home Page</h1><a href="/api/products">products</a>');
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });

  res.json(newProducts);
});

//Query Params :productID //REVIEW -
app.get("/api/products/:productID", (req, res) => {
  // console.log(req)
  // console.log(req.params)

  const { productID } = req.params; //REVIEW  object destructuring

  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );

  if (!singleProduct) {
    return res.status(404).send("Product Does Not Exist");
  }

  return res.json(singleProduct);
});

app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  console.log(req.params);
  res.send("hello world");
});

//NOTE -  Query String : req.query

app.get("/api/v1/query", (req, res) => {
  // console.log(req.query);

  const { search, limit } = req.query; //REVIEW -
  let sortedProducts = [...products]; //REVIEW -  we are copying the array to avoid modifying the original array

  if (search) {
    sortedProducts = sortedProducts.filter((product) => { //REVIEW - 
      return product.name.startsWith(search); //REVIEW - 
    });
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit)); //REVIEW 
  }

  if (sortedProducts.length < 1) {
    // res.status(200).send('no products matched your search');
    return res.status(200).json({ sucess: true, data: [] });
  }

  res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});

//REVIEW -
//NOTE: you cannot send two status is a single request
// res.status(200).send('hello world')
// res.status(201).send('hello world')
// res.status(201).json({message: 'success'})
//NOTE only one of them will be sent which meets the condition first
// not all will be sent
