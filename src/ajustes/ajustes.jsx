import React from 'react'
import { Link} from "react-router-dom";

export default function Ajustes(){
    return(
        <div className="bg-gray-900 font-inter min-h-screen w-full overflow-hidden pb-7">
                            <Link to="/perfil">
                    <h1>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-left" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffec00" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <line x1="5" y1="12" x2="9" y2="16" />
                            <line x1="5" y1="12" x2="9" y2="8" />
                        </svg>
                    </h1>
                    
                    
                    
                
                </Link>
            <div className="flex flex-col items-center justify-center">
                
                <h1 className="text-5xl text-rojovintage-600 font-bold">Ajustes</h1>

                
                <div className="flex flex-col items-center justify-center mt-10">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-2xl text-naranjo">Cambiar contraseña</h1>
                        <div className="flex flex-col items-center justify-center mt-5">
                            <input type="password" placeholder="Contraseña actual" className="w-80 h-10 rounded-lg bg-gray-800 text-white text-lg px-5 outline-none"/>
                            <input type="password" placeholder="Contraseña nueva" className="w-80 h-10 rounded-lg bg-gray-800 text-white text-lg px-5 outline-none mt-5"/>
                            <input type="password" placeholder="Confirmar contraseña nueva" className="w-80 h-10 rounded-lg bg-gray-800 text-white text-lg px-5 outline-none mt-5"/>
                            <button className="bg-rojovintage-600 text-white rounded-lg w-80 h-10 mt-5">Cambiar contraseña</button>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center mt-10">
                        <h1 className="text-2xl text-naranjo">Cambiar Correo Electrónico</h1>
                        <div className="flex flex-col items-center justify-center mt-5">
                            <input type="email" placeholder="Correo electrónico actual" className="w-80 h-10 rounded-lg bg-gray-800 text-white text-lg px-5 outline-none"/>
                            <input type="email" placeholder="Correo electrónico nuevo" className="w-80 h-10 rounded-lg bg-gray-800 text-white text-lg px-5 outline-none mt-5"/>
                            <input type="email" placeholder="Confirmar correo electrónico nuevo" className="w-80 h-10 rounded-lg bg-gray-800 text-white text-lg px-5 outline-none mt-5"/>
                            <button className="bg-rojovintage-600 text-white rounded-lg w-80 h-10 mt-5">Cambiar correo electrónico</button>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center mt-10">
                        <h1 className="text-2xl text-naranjo">Cambiar Nombre de Usuario</h1>
                        <div className="flex flex-col items-center justify-center mt-5">
                            <input type="text" placeholder="Nombre de usuario actual" className="w-80 h-10 rounded-lg bg-gray-800 text-white text-lg px-5 outline-none"/>
                            <input type="text" placeholder="Nombre de usuario nuevo" className="w-80 h-10 rounded-lg bg-gray-800 text-white text-lg px-5 outline-none mt-5"/>
                            <input type="text" placeholder="Confirmar nombre de usuario nuevo" className="w-80 h-10 rounded-lg bg-gray-800 text-white text-lg px-5 outline-none mt-5"/>
                            <button className="bg-rojovintage-600 text-white rounded-lg w-80 h-10 mt-5">Cambiar nombre de usuario</button>

                        </div>
                    </div>
                    </div>
                    </div>
        </div>
    );
}