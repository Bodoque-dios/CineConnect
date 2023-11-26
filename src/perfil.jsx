import React from 'react'

import { Link } from "react-router-dom";
import Header from "./components/Header"

export default function Perfil() {
    const image_url = "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
    return (
        <>
            <main  className="bg-gray-900 font-inter min-h-screen w-full overflow-hidden" >
                <Header/>
                <div >
                    <div className="w-6/12 sm:w-4/12 px-4 mx-auto my-auto mt-12" >

                        <img src={"https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg"} alt="imagen_perfil"  className="shadow rounded-full max-w-full h-auto align-middle border-none " />
        
                    </div>
                    <div className='text-center mt-10 text-white'>
                        <div>
                            <h1>David,31</h1>
                        </div>
                        <div>
                            <h2>Redactor</h2>
                        </div>
                        <div className='mx-auto my-auto flex items-center justify-center mt-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffec00" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                                <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                            </svg>


                            <span className='ml-2 '>Puente Alto, Venecia</span>
                        </div>
                    </div>
                    <div className='bg-amarillo mt-6 grid grid-cols-2 gap-4 p-2'>
                        <div className='mx-auto my-auto text-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                            <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                        </svg>
                        Ajustes
                        </div>
                        <div className='mx-auto my-auto'>
                            subir foto
                        </div>

                    </div>
                    
                </div>

                
                
                    



            </main>
        </>
    );
}

