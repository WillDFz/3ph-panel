'use client'

import Image from 'next/image'
import { useState } from 'react'
import { LockOutlined, Person2Outlined, VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material'

const LoginForm = () => {

    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className='w-11/12 md:w-2/6 bg-custom_gray rounded-lg p-12'>
            <div>
                <Image className='mb-10' src='/svg/logoTypo.svg' alt='logo' width={100} height={100} />
                <div className='mb-5'>
                    <label className='text-tertiary_brand mb-3'>Username</label>
                    <div className='relative'>
                        <Person2Outlined className='absolute text-custom_purple top-3 left-3' />
                        <input type="text" className='w-full bg-white rounded-xl focus:outline-none p-3 ps-10' placeholder='John Doe' />
                    </div>
                </div>
                <div className='mb-5'>
                    <label className='text-tertiary_brand mb-3'>Password</label>
                    <div className='relative'>
                        <LockOutlined className='absolute text-custom_purple top-3 left-3' />
                        <input type={showPassword ? 'text' : 'password'} className='w-full bg-white rounded-xl focus:outline-none p-3 ps-10' placeholder='Password' />
                        {showPassword ? <VisibilityOffOutlined className='absolute top-3 right-3 cursor-pointer' onClick={() => setShowPassword(!showPassword)} /> : <VisibilityOutlined className='absolute top-3 right-3 cursor-pointer' onClick={() => setShowPassword(!showPassword)} />}
                    </div>
                </div>
                <button className='w-full bg-tertiary_brand text-white uppercase rounded-xl p-3'>
                    Login
                </button>
            </div>
        </div>
    )
}

export default LoginForm