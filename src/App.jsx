
import { useLoaderData } from 'react-router-dom'
import './App.css'
import Coffee from './components/Coffee';
//import { useState } from 'react';

function App() {
const coffee = useLoaderData();
// const {coffee,setCoffee} = useState(loadedCoffee);

  return (
    <>
      <h3 className="text-4xl font-bold btn">Ok is work {coffee.length}</h3>
      <div className='grid grid-col-1 lg:grid-cols-2 gap-5'>
        {
          coffee.map(newCoffee => <Coffee
             key={newCoffee._id}
             newCoffee={newCoffee}
            //  coffee={coffee}
            //  setCoffee={setCoffee}
             ></Coffee>)
        }
      </div>
    </>
  )
}

export default App
