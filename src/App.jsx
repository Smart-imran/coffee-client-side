import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard/CoffeeCard';
import { useState } from 'react';

function App() {

  const loadedCoffees = useLoaderData();

  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div className='m-20 bg-slate-200 h-screen p-6 rounded-lg my-20'>

      <h1 className='text-6xl text-purple-600 text-center mb-6'>Hot And Cold Coffee : {loadedCoffees.length}</h1>


      <div className='grid  md:grid-cols-2 gap-4'>


        {
          loadedCoffees.map(coffee => <CoffeeCard

            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}


          ></CoffeeCard>)
        }
      </div>



    </div>
  )
}

export default App
