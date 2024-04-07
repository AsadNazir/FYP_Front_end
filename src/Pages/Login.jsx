import React, { useState } from 'react'
import logo from '../assets/logo-pucit.png'
import { FloatingLabel, Button, Flowbite, Checkbox, Label, TextInput } from 'flowbite-react'
import loginPage from '../assets/login-page.svg'
// import { FaUserCircle } from "react-icons/fa";
import { fontSizes } from '../styles';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { notification } from 'antd';
import { useDispatch } from 'react-redux';
import { addUser } from '../Redux/userSlice';

const customTheme = {
  button: {
    size: {
      xl: `${fontSizes.small} ` + `px-8 py-2`,
    },
  },
};

export default function Login() {

  const dispatch = useDispatch()

  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement) => {
    api.warning({
      message: `Please fill all the fields`,
      placement,
    });
  };

  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')

  const [passwordError, setPasswordError] = useState('default')
  const [usernameError, setUsernameError] = useState('default')


  const userNameOnchange = (e) => {
    setUsername(e.target.value)
  }
  const passwordOnchange = (e) => {
    if (e.target.value !== '') {
      setPasswordError('default');
    }
    setPassword(e.target.value)
  }
  const valiadte = async (event) => {
    event.preventDefault();

    if (username === '' || password === '') {
      setPasswordError('error');
      openNotification('top')
      return
    }

    if (username === 'admin' && password === 'admin') {
      await dispatch(addUser({ username: username, password: password, role: 'admin'}))
      navigate('/admin')
    }
    else if (username === 'teacher' && password === 'teacher') {
      await dispatch(addUser({ username: username, password: password, role: 'teacher'}))
      navigate('/teacher')
    }
    else if (username === 'student' && password === 'student') {
      await dispatch(addUser({ username: username, password: password, role: 'student'}))
      navigate('/student')
    }
    else {
      api.error({
        message: 'Invalid Username or Password',
        description: 'Please enter correct username and password',
        placement: 'top'
      })
    }




  }





  return (

    <div className="py-4 px-6 lg:px-20 max-w-[1400px] mx-auto">
      {contextHolder}
      <div className="flex mb-10 sm:mb-0">
        <div className=''><img src={logo} alt="" className='w-[60%] md:w-[60%]' />
        </div>
        <h1 className={`${fontSizes.medium} flex items-center font-semibold`}>Faculty of Computing and Information Technolgy</h1>
      </div>
      <div className="flex flex-row justify-between ">
        <div className="left hidden sm:w-[35%] md:w-[40%] lg:w-[60%] sm:flex justify-center flex-col items-center">
          <img src={loginPage} className='w-[70%] max-w-[400px] min-w-[200px]' />
          {/* <h1 className={`${fontSizes.xLarge} font-semibold my-6`}>Welcome to PUCIT-CMS</h1>
          <p className={`${fontSizes.xSmall}`}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, non?
            <a href="#"> Read more about our app</a>
          </p> */}
        </div>
        <div className='right w-[90%] mx-auto sm:w-[50%] md:w-[40%] lg:w-[40%] flex flex-col justify-center items-center'>
          <form className=' bg-white  min-w-[300px] w-[100%] lg:w-[90%] shadow-lg rounded-md p-8 flex flex-col justify-center border-2'>
            <h1 className={`${fontSizes.large} font-medium text-center`}>Login</h1>
            <div>
              <div className='my-6 w-full text-gray-600'>
                <FloatingLabel variant="outlined" value={username} onChange={userNameOnchange} label="Username" required className={`${fontSizes.small}  text-gray-600`}
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
                <FloatingLabel variant="outlined" value={password} color={passwordError} label="Password" type='Password' className={`${fontSizes.small}`} required onChange={passwordOnchange} />
              </div>
            </div>
            <div className="flex text-base items-center gap-2 mb-6">
              <Checkbox id="remember" />
              <Label htmlFor="remember" className={`${fontSizes.xSmall} font-normal`}>Remember me</Label>
            </div>
            <Flowbite theme={{ theme: customTheme }}>
              <Button gradientDuoTone="purpleToBlue" type='submit' onClick={valiadte} size="xl" >Login</Button>
            </Flowbite>
            <div className={`flex ${fontSizes.small} items-center gap-2 mt-6`}>
              <a href="#" className={`${fontSizes.xSmall} cursor-pointer text-blue-700 font-semibold`}>Forgot your password?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
