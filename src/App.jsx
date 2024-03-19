import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Accordion } from 'flowbite-react'
import { DatePicker } from 'antd';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="py-5 px-20">
      <div className="flex border-2">
        <div className=''><img src="" alt="" /></div>
        <h1 className='text-3xl'>PUCIT-CMS</h1>
      </div>
      <div className="flex flex-row justify-between">
        <div className="left flex justify-center flex-col">
          <h1 className='text-4xl font-semibold my-6'>Welcome to PUCIT-CMS</h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, non?
          <a href="#"> Read more about our app</a>
        </div>
        <div className='right'>
      <div className='w-[400px] h-[400px] border-2'>

      </div>
        </div>
      </div>
    </div>
  )
}

export default App
