import React from 'react'
import logo from '../assets/logo-pucit.png'
import { FloatingLabel, Button, Flowbite, Checkbox, Label, TextInput } from 'flowbite-react'
import { FaUserCircle } from "react-icons/fa";

const customTheme = {
  button: {
    size: {
      xl: 'text-lg px-8 py-3',
    },
  },
};

export default function Login() {

  return (
    <div className="py-5 px-20">
      <div className="flex">
        <div className=''><img src={logo} alt="" />
        </div>
        <h1 className='text-4xl flex items-center px-5 font-bold'>PUCIT-CMS</h1>
      </div>
      <div className="flex flex-row justify-between">
        <div className="left flex justify-center flex-col">

          <h1 className='text-4xl font-semibold my-6'>Welcome to PUCIT-CMS</h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, non?
          <a href="#"> Read more about our app</a>
        </div>
        <div className='right w-[40%] flex flex-col justify-center items-center'>
          <div className=' bg-white w-[80%] shadow-lg rounded-md p-10 flex flex-col justify-center border-2'>
            <h1 className='text-3xl font-medium text-center'>Login</h1>
            <div>
              <div className='my-8 w-full'>
                <FloatingLabel variant="outlined" label="Username" className='text-lg '
                  helperText={
                    <div className='text-sm font-normal'>
                      Use your university provided username or Roll no.
                    </div>
                  }
                />
              </div>
              <div className='my-8'>
                {/* <TextInput id="email4" type="email" placeholder="name@flowbite.com" required /> */}
                {/* <FaUserCircle className='text-2xl' /> */}
                <FloatingLabel variant="outlined" label="password" type='password' className='text-lg' />
              </div>
            </div>
            <div className="flex text-base items-center gap-2 mb-8">
              <Checkbox id="remember" />
              <Label htmlFor="remember" className='text-base font-normal'>Remember me</Label>
            </div>
            <Flowbite theme={{ theme: customTheme }}>
              <Button gradientDuoTone="purpleToBlue" size="xl" className='text-lg'>Login</Button>
            </Flowbite>
            <div className="flex text-base items-center gap-2 mt-8">
              <a href="#" className='text-base cursor-pointer text-blue-700 font-semibold'>Forgot your password?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
