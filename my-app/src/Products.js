import React, { useState, useEffect } from 'react';
import {importAll} from './importAll.js';




function Products(){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:8080/products")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setProducts(result);
            },
           
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [])
    
      if (error) {
        return <div>Ошибка: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Загрузка...</div>;
      } else {
        return (           
                <div className='thumbs-wrapper'>
                    {products.map(item => (
                    <a href='#' className='thumb'> 
                        <div className='img-wrapper'>                                                   
                          <img src=""/>                                                                                       
                        </div>
                        <div className='title'> 
                            {item.name}
                        </div>
                        <div className='price'> 
                         {item.price} $
                        </div>
                        
                        <div className='description'> 
                            {item.description}
                        </div>                
                    </a>
                        ))} 
                </div>
              
        );
      }

}

export {Products};