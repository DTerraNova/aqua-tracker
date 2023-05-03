import React from 'react';
import LiquidBackroud from './liquid-background';
import DrinkWaterOperator from './drink-water-operator';

const DrinkWaterPage = () => (
  <>
  <section  className=' w-full h-full
            text-gray-50 text-center 
              relative overflow-hidden 
              max-w-2xl
              border border-gray-600 rounded-3xl flex items-center justify-center'>
    <LiquidBackroud></LiquidBackroud>
    <div className='z-10 relative'>
      <header>
        <h3 className='text-5xl font-bold max-w-md'>Stay hydrated, drink water</h3>
      </header>
      
      <div className='mt-20'>
        <h1 className='text-6xl font-bold m-5'>1000 ml</h1>
        <h2 className='text-2xl'>Current amount of water drunk</h2>
      </div>
    </div>    
    
  </section>

  <DrinkWaterOperator></DrinkWaterOperator>
  </>
  
);

export default DrinkWaterPage;
