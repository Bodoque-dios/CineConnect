import React from 'react'

export default function Login() {
  return (
    <div className='from-primary-950 via-primary-900 to-primary-950 bg-gradient-to-b min-h-[100vh] flex flex-col justify-center items-center'>
        <h1 className='text-naranjo text-7xl font-bold mb-10'>CineConnect</h1>
        <div className='bg-white rounded-xl text-primary-900 w-4/5 max-w-[500px] flex flex-col justify-center items-center px-5 py-10'>
            <h1 className='text-4xl font-bold'>Iniciar Sesión</h1>
            <div className='w-full max-w-[300px] flex flex-col justify-center items-center'>
                <form className='flex flex-col p-4 w-full '>
                    <label>Correo electrónico</label>
                    <input type='email' className='my-1 p-1 bg-gray-200 border border-gray-300 rounded-md'></input>
                    <label>Contraseña</label>
                    <input type='password' className='my-1 p-1 bg-gray-200 border border-gray-300 rounded-md'></input>
                </form>
                <div className='w-full px-4'>
                    <button className='bg-primary-900 w-full text-naranjo font-bold px-3 py-1 rounded-md'>Ingresar</button>
                </div>
                <div className='w-full p-4 flex justify-start'>
                    <p className='text-sm underline hover:cursor-pointer'>Registrarse</p>
                </div>
            </div>
        </div>
    </div>
  )
}
