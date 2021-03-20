exports.getByZipcode = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  
  const rate = parseFloat((Math.random() * 100 + 1).toFixed(2))
  res.status(200).json({zipcode: req.params.zipcode, shippingRate: rate})
}