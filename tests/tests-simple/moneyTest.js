import { formatCurrency } from '../../scripts/utils/money.js';


describe('test suite: formatCurrency', () => {

 

  it('converts cents into dollars',() =>{
    expect(formatCurrency(2095)).toEqual('20.95');
  });
  it('works with 0', () => {
    expect(formatCurrency(0)).toEqual('0.00');
  });
  it('Rounds up to the nearest cent',()=> {
    expect(formatCurrency(2000.5)).toEqual('20.01');
  });
  it('rounds down to the nearest cent', () => {
    expect(formatCurrency(2000.4)).toEqual('20.00');
  });
  it('works for negative numbers',() => {
    expect(formatCurrency(-6900)).toEqual('-69.00')
  });
});


/*
console.log('test suite: formatCurrency')

console.log('converts cents into dollars');


if (formatCurrency(2095) === '20.95'){
  console.log('passed');
} else {
  console.log('failed');
}


console.log('works with 0');

if(formatCurrency(0) === '0.00') {
  console.log('passed');
} else {
  console.log('failed');
}

console.log('Rounds up to the nearest cent')

if (formatCurrency(2000.5) === '20.01') {
    console.log('passed');
} else {
  console.log('failed');
}

if (formatCurrency(2000.4) === '20.00') {
    console.log('passed');
} else {
  console.log('failed');
} */