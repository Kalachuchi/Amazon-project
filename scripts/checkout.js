import {renderOrderSummary} from './checkout/ordersummary.js';
import { renderPaymentSummary} from './checkout/paymentsummary.js';
import { renderCheckoutHeader } from './checkout/checkoutHeader.js';
import { loadProducts } from '../data/products.js';
//import '../data/car.js';
//import '../data/backend-practice.js';
//import '../data/cart-class.js';

loadProducts(()=>{
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});

