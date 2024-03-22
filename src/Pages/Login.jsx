import React from 'react'
import logo from '../assets/logo-pucit.png'
import { FloatingLabel, Button, Flowbite, Checkbox, Label, TextInput } from 'flowbite-react'
// import { FaUserCircle } from "react-icons/fa";
import { fontSizes } from '../styles';

const customTheme = {
  button: {
    size: {
      xl: `${fontSizes.small} ` + `px-8 py-2`,
    },
  },
};

export default function Login() {

  return (
    <div className="py-4 px-6 lg:px-20">
      <div className="flex">
        <div className=''><img src={logo} alt="" className='w-[70%]' />
        </div>
        <h1 className={`${fontSizes.large} flex items-center px-2 font-bold`}>PUCIT-CMS</h1>
      </div>
      <div className="flex flex-row justify-between ">
        <div className="left hidden sm:w-[35%] md:w-[40%] lg:w-[60%] sm:flex justify-center flex-col">

          <h1 className={`${fontSizes.xLarge} font-semibold my-6`}>Welcome to PUCIT-CMS</h1>
          <p className={`${fontSizes.xSmall}`}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, non?
            <a href="#"> Read more about our app</a>
          </p>
        </div>
        <div className='right w-[60%] m-auto sm:w-[50%] md:w-[40%] lg:w-[40%] flex flex-col justify-center items-center'>
          <div className=' bg-white  min-w-[300px] w-[100%] lg:w-[90%] shadow-lg rounded-md p-8 flex flex-col justify-center border-2'>
            <h1 className={`${fontSizes.large} font-medium text-center`}>Login</h1>
            <div>
              <div className='my-6 w-full text-gray-600'>
                <FloatingLabel variant="outlined" label="Username" className={`${fontSizes.xSmall}  text-gray-600`}
                  helperText={
                    <div className={`${fontSizes.xSmall} font-normal`}>
                      Use your university provided username or Roll no.
                    </div>
                  }
                />
              </div>
              <div className='my-6 text-gray-600'>
                {/* <TextInput id="email4" type="email" placeholder="name@flowbite.com" required /> */}
                {/* <FaUserCircle className='text-2xl' /> */}
                <FloatingLabel variant="outlined" label="password" type='Password' className={`${fontSizes.xSmall}`} />
              </div>
            </div>
            <div className="flex text-base items-center gap-2 mb-8">
              <Checkbox id="remember" />
              <Label htmlFor="remember" className={`${fontSizes.xSmall} font-normal`}>Remember me</Label>
            </div>
            <Flowbite theme={{ theme: customTheme }}>
              <Button gradientDuoTone="purpleToBlue" size="xl">Login</Button>
            </Flowbite>
            <div className={`flex ${fontSizes.small} items-center gap-2 mt-6`}>
              <a href="#" className={`${fontSizes.xSmall} cursor-pointer text-blue-700 font-semibold`}>Forgot your password?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
