import React from 'react'
import Carrusel from "./carrusel"

import { Link } from "react-router-dom";
import Header from "../components/Header"

export default function Perfil() {
    const image_url = "https://indiehoy.com/wp-content/uploads/2020/12/shrek.jpg"

    const peliculas = [
        "https://play-lh.googleusercontent.com/CZ5cPYN4XZtevhmkHkk5NJYdzZWRvDx6RMJ_j6_yv2uDuVk3z_AnXEmwu3t78il5QoOQ=w240-h480-rw",
        "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRGipD1aXe3MZI7bXujd4_9ydP3DXSSlXUOfg_Wq-Km7n_mSWSGH4BrGIfSo5sw9X4k"

    ]
    return (
        <>
            <main  className="bg-gray-900 font-inter min-h-screen w-full overflow-hidden" >
                <Header/>
                <div >
                    <div className="w-6/12 sm:w-4/12 px-4 mx-auto my-auto mt-12" >

                        <img src={"https://indiehoy.com/wp-content/uploads/2020/12/shrek.jpg"} alt="imagen_perfil"  className="shadow rounded-full w-40 h-40 border-solid border-2 border-rojovintage-600 " />
        
                    </div>
                    <div className='text-center mt-10 text-white'>
                        <div>
                            <h1>Shrek,31</h1>
                        </div>
                        <div>
                            <h2>Ogro</h2>
                        </div>
                        <div className='mx-auto my-auto flex items-center justify-center mt-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffec00" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                                <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                            </svg>


                            <span className='ml-2 '>Pantano, MuyMuyLejano</span>
                        </div>
                    </div>

                    <div className='mt-10 text-white text-center'>
                        <h1 className='mb-4'>Peliculas Favoritas</h1>
                        <Carrusel  imagenes={peliculas}  />
                    </div>

                    <div className='bg-rojovintage-600 mt-6 grid grid-cols-1 gap-4 p-2 rounded-full w-40 mx-auto'>
                        <Link to="/ajustes" className='mx-auto my-auto'>
                            <div className='mx-auto my-auto text-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                                    <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                </svg>
                                Ajustes
                            </div>

                        </Link>


                    </div>
                    
                </div>

                
                
                    



            </main>

        </>
    );
}

