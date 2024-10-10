import LoginForm from '@/components/LoginForm'
import React from 'react'

const LoginPage = () => {
    return (
        <div className='h-full flex justify-center items-center bg-gradient-to-r from-primary_brand via-tertiary_brand to-quaternary_brand'>
            <LoginForm />
        </div>
    )
}

export default LoginPage