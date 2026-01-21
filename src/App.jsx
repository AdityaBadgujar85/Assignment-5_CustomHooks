import { useState } from 'react'
import './App.css'
import UseFetch from './components/UseFetch'

function App() {
    const {api,loading,error} = UseFetch("https://api.escuelajs.co/api/v1/products");
    if (loading)
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-orange-500 rounded-full animate-spin"></div>
      </div>
    );
    if(error) 
      return (
        <div className="w-screen h-screen flex items-center justify-center text-red-500">
        {error}
        </div>
    );
  return (
    <div className='w-full grid lg:grid-cols-3 gap-5 p-5 sm:grid-cols-2 '>
      {api.map((item)=>{
        return(
        <div key={item.id} className='h-104 rounded-lg shadow-md p-3'>
            <div className='flex flex-col'>
            <img src={item.images} alt={item.title} className='w-full h-70 object-cover rounded'/>
            <h1 className='text-l font-medium pt-2 text-gray-700'>{item.title}</h1>
            <p className='text-xs text-gray-600'>description: {item.description}</p> 
            </div>
            <div className='flex flex-row items-center justify-between pt-2'>
              <div className='flex flex-row items-center gap-5'>
              <img className='w-10 h-10 rounded-full' src={item.category.image} alt="img" />
              <p className='text-gray-600 font-semibold'>Category: {item.category.name}</p>
              </div>
              <div className='flex flex-row justify-between'>
              <p className='text-orange-600 font-bold'>₹{item.price}</p>
            </div>
            </div>
          </div>
        ) 
      })}
    </div>
      
  )
}
export default App
          // <p>id: {item.id}</p>
          // <p>title: {item.title}</p>
          // <p>slug: {item.slug}</p>
          // <p>price: {item.price}</p>
          // <p>descripiton: {item.description}</p>
          // <p>category id:{item.category.id}</p>
          // <p>category name:{item.category.name}</p>
          // <img src={item.category.image} alt="img" />
          // <p>category creationAt:{item.category.creationAt}</p>
          // <p>category updatedAt:{item.category.updatedAt}</p>
          // <p>creationAt:{item.creationAt}</p>
          // <p>updatedAt:{item.updatedAt}</p>