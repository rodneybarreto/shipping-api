exports.getByZipcode = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  
  const rate = parseFloat((Math.random() * 100 + 1).toFixed(2))
  const shipping = { zipcode: req.params.zipcode, shippingRate: rate }
  
  console.log(shipping)
  res.status(200).json(shipping)
}