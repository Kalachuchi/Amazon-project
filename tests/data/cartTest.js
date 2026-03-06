import {addToCart, cart, loadFromStorage, removeFromCart,updateDeliveryOption} from '../../data/cart.js';



describe('test suite: addToCart', ()=> {
  const productId = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
  beforeEach(() => {
        spyOn(localStorage,'setItem');
  });

  it ('adds an existing product to the cart', () => {
    document.querySelector('.js-test-container').innerHTML=
   `<div class ="js-quantity-selector-${productId}"></div>`;
    spyOn(localStorage,'getItem').and.callFake(() => {
      return JSON.stringify([{
        productId: productId,
        quantity: 1,
        deliveryOptionId: '1'
      }]);
      
    });
    
    loadFromStorage();

  
    addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toEqual(productId);
    expect (cart[0].quantity).toEqual(2);
    expect(localStorage.setItem('cart', JSON.stringify('cart')))
    expect(localStorage.setItem).toHaveBeenCalledWith('cart',JSON.stringify(
      [{
        productId: productId,
        quantity: 2,
        deliveryOptionId: '1'
      }]
    ));
   

  });
  
  it ('adds a new product to the cart', () => {
    
    document.querySelector('.js-test-container').innerHTML=
   `<div class ="js-quantity-selector-${productId}"></div>`;
    spyOn(localStorage,'getItem').and.callFake(() => {
      return JSON.stringify([]);
    });
   
    loadFromStorage();
    addToCart(productId);
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect (cart[0].quantity).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledWith('cart',JSON.stringify  
      ([{
        productId: productId,
        quantity: 1,
        deliveryOptionId: '1'
      }]))


  });
});

describe('test suite; removeFromCart()',()=> {
  const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
  const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d';
  const productId3 = '83d4ca15-0f35-48f5-b7a3-1ea210004f2e';  
    
  beforeEach(() => {
      spyOn(localStorage,'setItem');
      spyOn(localStorage,'getItem').and.callFake(() => {
      return JSON.stringify([{
      productId: productId1,
      quantity: 2,
      deliveryOptionId: '1'
            },{
      productId: productId2,
      quantity: 1,
      deliveryOptionId: '2'
      }]);
      });
       loadFromStorage();
    });
  it ('it remove a productID that is in the cart',() =>{
    removeFromCart(productId2);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart.length).toEqual(1);
    expect (cart[0].quantity).toEqual(2);
    expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    console.log(cart);
  });

  it ('remove a productId that is NOT in the cart', () => {
    removeFromCart(productId3)
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart.length).toEqual(2);
    console.log(cart);
    expect (cart[0].quantity).toEqual(2);
    expect (cart[1].quantity).toEqual(1);
    expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart[1].productId).toEqual('15b6fc6f-327a-4ec4-896f-486349e85a3d');

  });
});

describe('updateDeliveryOption',() =>{
  const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
  const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d';

  beforeEach(() => {
    spyOn(localStorage,'setItem');
  });

  it('it update the delivery option',() => {
      spyOn(localStorage,'getItem').and.callFake(() =>{
      return JSON.stringify([{
      productId: productId1,
      quantity: 2,
      deliveryOptionId: '1'
      },{
      productId: productId2,
      quantity: 1,
      deliveryOptionId: '2'
      }]);
      });
      loadFromStorage();

      updateDeliveryOption('e43638ce-6aa0-4b85-b27f-e1d07eb678c6','3');
      expect(cart.length).toEqual(2);
      expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
      expect(cart[0].quantity).toEqual(2);
      expect(cart[0].deliveryOptionId).toEqual('3');
      expect(localStorage.setItem).toHaveBeenCalledTimes(1);
      expect(localStorage.setItem).toHaveBeenCalledWith('cart',JSON.stringify([{
      productId: productId1,
      quantity: 2,
      deliveryOptionId: '3'
      },{
      productId: productId2,
      quantity: 1,
      deliveryOptionId: '2'
      }]));
  });

  it('does nothing if the product is not in the cart', () => {
    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 1,
        deliveryOptionId: '1'
      }]);
    });
    loadFromStorage();

    updateDeliveryOption('does-not-exist', '3');
    expect(cart.length).toEqual(1);
    expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart[0].quantity).toEqual(1);
    expect(cart[0].deliveryOptionId).toEqual('1');
    expect(localStorage.setItem).toHaveBeenCalledTimes(0);
  });







});