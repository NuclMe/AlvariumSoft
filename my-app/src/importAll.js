import React from 'react';

function importAll() {
  const products = [
    {
      name: 'James',
      age: 31,
    },
    {
      name: 'John',
      age: 45,
    },
    {
      name: 'Paul',
      age: 65,
    },
    {
      name: 'Ringo',
      age: 49,
    },
    {
      name: 'George',
      age: 34,
    }
  ];
  
  return (
    <div>
      
      {products.filter(products => products.image).map(filteredProducts => (
        <li>
          {filteredProducts.image} 
        </li>
      ))}
    </div>
  );
  }
  

  


  export {importAll};   

  


