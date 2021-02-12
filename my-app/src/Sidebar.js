import React from 'react';
import App from './App.css'

function Sidebar(){
    return(
        <aside>
            <div className='filter'>
                <div className='title'> Цена </div>
                   <div className='filter-wrapper'>
                        <div className='item'>
                            <span> От </span>
                            <input type='number' placeholder='0'/>
                        </div>
                        <div className='item'>
                            <span> До </span>
                            <input type='number' placeholder='99999'/>
                        </div>
                   </div>
            </div>
            <div className='filter'>
                <div className='title'> Валюта </div>
                    <button className='currency'>
                        USD
                    </button>
                    <button className='currency'>
                        UAH
                    </button>                   
            </div>
            <div className='filter'>
                <div className='title'> Сортировка </div>
                    <div className='sorting'> 
                        <input id='price_rising'  type="checkbox" className='checkbox'></input>
                        <label htmlFor='price_rising'> по возрастанию цены</label>
                  
                    </div>
                    <div className='sorting'> 
                    <input id='price_decrease'  type="checkbox" className='checkbox'></input>
                        <label htmlFor='price_decrease'> по убыванию цены</label>
                        
                    </div>
                    <div className='sorting'> 
                    <input id='alphabet'  type="checkbox" className='checkbox'></input>
                        <label htmlFor='alphabet'> по алфавиту</label>
                        
                    </div>
            </div>
        </aside>
    );    
}
export {Sidebar}