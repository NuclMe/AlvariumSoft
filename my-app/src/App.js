import './App.css';
// import {ProductsList } from'./ProductsList.js';
import {Products } from'./Products.js';
import {Sidebar } from'./Sidebar.js';


function App() {
  return (
    <div className="App">  
                                           
        <section>     
          <div className='container'>   
              <Sidebar/>           

              <Products/>      
              {/* <ProductsList/>       */}
            </div> 
        </section>
     
    </div>   
  );
};

export default App;
