import React from 'react'
import SideNav from '../main/SideNav'
import { Link } from 'react-router-dom'

export default function Contact() {
    return (
        <div className="bg-midnight-950 font-libre w-full px-5">
            <div className="flex flex-row justify-between">
                <Link to='/' className="text-4xl my-4 ml-2 font-bold text-naranjo">CineConnect</Link>
                {/* <SideNav /> */}
            </div>
            <div className='min-h-[80vh] p-5 flex flex-col items-center'>
                <h1 className='text-5xl text-naranjo'>Equipo</h1>
                    <img src='https://i.pinimg.com/564x/67/26/c8/6726c816abbf19ab93fc070bb80af706.jpg' className='rounded-xl mt-7'></img>
                <div className='flex justify-start flex-col md:flex-row my-10'>
                    <div className='flex flex-col mx-5 items-center mt-4'>
                        <div>
                            <h3 className='text-white text-lg'>Matías Olea</h3>
                            <p className='text-naranjo'>matolea@alumnos.uai.cl</p>
                        </div>
                    </div>
                    <div className='flex flex-col mx-5 items-center mt-4'>
                        <div>
                            <h3 className='text-white text-lg'>Felipe Meneses</h3>
                            <p className='text-naranjo'>felmeneses@alumnos.uai.cl</p>
                        </div>
                    </div>
                    <div className='flex flex-col mx-5 items-center mt-4'>
                        <div>
                            <h3 className='text-white text-lg'>Pedro Pizarro</h3>
                            <p className='text-naranjo'>pepizarro@alumnos.uai.cl</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-start flex-col w-full max-w-[1000px] p-3 '>
                    <h1 className='text-5xl text-naranjo mb-3'>Contáctanos</h1>
                    <p className='text-white mb-4'>Escríbenos y nos pondremos en contacto contigo lo más pronto posible</p>
                    <h1 className='text-3xl text-naranjo'>¿Tienes alguna duda?</h1>
                    <h2 className='text-2xl text-naranjo mt-6'>Contacto para negocios</h2>
                    <p className='text-white mb-4'>Si estás interesado en colaborar con nosotros o tienes alguna propuesta de negocio, no dudes en contactarnos a través de la siguiente dirección de correo electrónico:</p>
                    <p className='text-naranjo underline'>business@cineconect.com</p>
                    
                    <h2 className='text-2xl text-naranjo mt-6'>Contacto para ayuda y soporte</h2>
                    <p className='text-white mb-4'>Si necesitas ayuda o soporte técnico, por favor envíanos un correo electrónico a:</p>
                    <p className='text-naranjo underline'>support@cineconect.com</p>
                    
                    <h2 className='text-2xl text-naranjo mt-6'>Contacto general</h2>
                    <p className='text-white mb-4'>Para cualquier otra consulta o comentario, puedes escribirnos a:</p>
                    <p className='text-naranjo underline'>info@cineconect.com</p>
                </div>
            </div>
        </div>
    )
}
