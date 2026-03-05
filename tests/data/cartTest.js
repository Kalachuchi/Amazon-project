import {addToCart, cart, loadFromStorage} from '../../data/cart.js';

describe('test suite: addToCart', ()=> {
  const productId = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';


  it ('adds an existing product to the cart', () => {
    document.querySelector('.js-test-container').innerHTML=
   `<div class ="js-quantity-selector-${productId}"></div>`;
    
   spyOn(localStorage,'setItem');
    spyOn(localStorage,'getItem').and.callFake(() => {
      return JSON.stringify([{
        productId: productId,
        quantity: 1,
        deliveryOptionId: '1'
      }]);
      
    });
    
    loadFromStorage();

  
    addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    console.log(cart);
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toEqual(productId);
    expect (cart[0].quantity).toEqual(2);

  });
  
  it ('adds a new product to the cart', () => {
    
    document.querySelector('.js-test-container').innerHTML=
   `<div class ="js-quantity-selector-${productId}"></div>`;
    
   spyOn(localStorage, 'setItem');
    spyOn(localStorage,'getItem').and.callFake(() => {
      return JSON.stringify([]);
      
    });
   
    loadFromStorage();
    addToCart(productId);
    console.log('hi');
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect (cart[0].quantity).toEqual(1);

  });



});