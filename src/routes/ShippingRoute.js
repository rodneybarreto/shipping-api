const ShippingController = require('../controllers/ShippingController');

module.exports = (app) => {
   app.get('/shipping/:zipcode', ShippingController.getByZipcode);
}