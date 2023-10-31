import React, { useState } from 'react';
import { data } from "../data/data"

const Food = () => {
    let foods = data
    const [food, setFoods] = useState(foods)

    // Filter type pizza/burgers
    const filterType = (category) => {
        setFoods(
            foods.filter((item) => {
                return item.category === category
            })
        )
    }

    // Filter type price
    const filterPrice = (price) => {
        let newPrice = foods.filter((item, index) => {
           return item.price === price;
        })
        setFoods(newPrice)
    }

    return (
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
            {/* Filter Row */}
            <div className='flex flex-col lg:flex-row justify-between'>
                {/* Fliter Type */}
                <div>
                    <p className='font-bold text-gray-700'>Filter Type</p>
                    <div className='flex  flex-wrap mt-2 '>
                        <button onClick={() => filterType('burger')} className=' bg-orange-600 text-white hover:bg-white hover:text-orange-600 py-1 px-2 mr-2   rounded-xl'>Burgers</button>
                        <button onClick={() => filterType('pizza')} className=' bg-orange-600 text-white hover:bg-white hover:text-orange-600 py-1 px-2 mr-2   rounded-xl' >Pizza</button>
                        <button onClick={() => filterType('salad')} className=' bg-orange-600 text-white hover:bg-white hover:text-orange-600 py-1 px-2 mr-2  rounded-xl'>Salads</button>
                        <button onClick={() => filterType('chicken')} className=' bg-orange-600 text-white hover:bg-white hover:text-orange-600 py-1 px-2 mr-2  rounded-xl'>Chicken</button>
                    </div>
                </div>

                {/* Filter Price */}
                <div>
                    <p className='font-bold text-gray-700' >Filter Price</p>
                    <div className='flex  max-w-[390px] w-full'>
                        <button onClick={()=>filterPrice('$')} className='bg-orange-600 text-white hover:bg-white hover:text-orange-600 py-1 px-2 mr-2   rounded-xl'>$</button>
                        <button onClick={()=>filterPrice('$$')} className='bg-orange-600 text-white hover:bg-white hover:text-orange-600 py-1 px-2 mr-2   rounded-xl'>$$</button>
                        <button onClick={()=>filterPrice('$$$')} className='bg-orange-600 text-white hover:bg-white hover:text-orange-600 py-1 px-2 mr-2   rounded-xl'>$$$</button>
                        <button onClick={()=>filterPrice('$$$$')} className='bg-orange-600 text-white hover:bg-white hover:text-orange-600 py-1 px-2 mr-2   rounded-xl'>$$$$</button>
                        <button onClick={()=>filterPrice('$$$$$')} className='bg-orange-600 text-white hover:bg-white hover:text-orange-600 py-1 px-2 mr-2   rounded-xl'>$$$$$</button>
                    </div>
                </div>
            </div>

            {/* Display foods */}
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                {food.map((item, index) => (
                    <div key={index} className='border shadow-lg rounded-lg hover:scale-100 duration-100'>
                        <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg ' />
                        <div className='flex justify-between px-2 py-4'>
                            <p className='font-bold'>{item.name}</p>
                            <p>
                                <span className='bg-orange-500 text-white p-1 rounded-full'>{item.price}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default Food;