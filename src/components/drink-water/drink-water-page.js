import React from 'react';




const DrinkWaterPage = () => (
  <section  className='text-gray-50 text-center p-10'>
    <header>
      <h3 className='text-5xl font-bold'>Drink water to stay healthy</h3>
    </header>
    
    <div className='m-10'>
      <h2 className='text-2xl'>Current Amount of Water Drinked</h2>
      <h1>1000 ml</h1>
    </div>
    
    <p>Your current goal is: 2000ml</p>
    <button>+1 Cup</button>
  </section>
);

export default DrinkWaterPage;
