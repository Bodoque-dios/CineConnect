import React from 'react'


export default function Perfil() {
    const image_url = "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
    return (
        <>
            <main  className="from-primary-950 via-primary-900 to-primary-950 font-libre h-screen w-full bg-gradient-to-b p-2 py-6 px-4 sm:p-6 md:py-10 md:px-8 " >
                
                <a href=""><h1 className="text-4xl my-4 ml-2 font-bold text-amarillo">CineConnect</h1></a>
                
                <div class>



                    <div class="grid grid-cols-1 gap-8 items-center justify-center w-1/3 mx-auto  bg-amarillo p-4 ring-2 ring-primary-950 dark:ring-gray-500 my-6 rounded-lg hover:scale-110 transition-transform duration-300" >


                        <div class="w-full px-3 py-3 text-center place-content-centers ">
                            
                            <img class="rounded-full h-40 w-40 mx-auto my-auto p-1 ring-2 ring-primary-950 dark:ring-gray-500"  src={image_url} alt="nose" />
                        </div>
                        <div class="w-full text-center">
                            <p>@Nombre_de_Usuario</p>
                        </div>
                        <div class= "" >
                            <h1>
                                La Serena, Chile
                            </h1>
                        </div>
                        <div class= "w-full text-center">
                            <p>
                                Hello, 😊🌎😊🌎😊🌎😊🌎😊🌎 ❄️❄️ 40 inviernos ❄️❄️
                                👋 ¡Hola! Soy PepePelota, un(a) auxiliar administrativo(a) apasionado(a) por la organización y la eficiencia. Me encanta trabajar en equipo y colaborar para lograr los objetivos de la empresa.
                                <br />
                                📚 Con experiencia en tareas administrativas, gestión de documentos y atención al cliente, siempre estoy listo(a) para asumir nuevas responsabilidades y aprender.
                                <br />
                                🖥️ Familiarizado(a) con herramientas informáticas y sistemas de gestión, me esfuerzo por mantener todo en orden y facilitar un entorno de trabajo fluido.
                                <br />
                                🌟 ¡Estoy emocionado(a) por ser parte de un equipo dinámico y contribuir al éxito del proyecto!
                            </p>
                        </div>






                    </div>
                    <div class="bg-yellow-500 py-0.5 sm:w-1/2 w-full flex items-center mx-auto">

                    </div>
                    <div className="bg-primary-800 grid grid-cols-1 gap-8 py-5 px-2 sm:w-1/2 w-full flex items-center mx-auto text-white">
                        
                        <div>
                                

                            <form>
                                <div class="mb-6">
                                    <p class= "text-amarillo">Nombre de Usuario</p>
                                    <input type="text" id="text" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="@Nombre_de_Usuario" required>
                                    </input>
                                </div>
                                <div class="mb-6">
                                    <p class= "text-amarillo">Localidad</p>
                                    <input type="text" id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="La Serena, Chile" required>
                                    </input>
                                </div>
                                <div class="mb-6">
                                    <p class= "text-amarillo">Descripción</p>
                                    <input type="text" id="m" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Hello, 😊🌎😊🌎😊🌎😊🌎😊🌎❄️❄️ 40 inviernos ❄️❄️" required>
                                    </input>
                                </div>
                                <div class="mb-6">
                                <p class= "text-amarillo">Email</p>
                                    <input type="mail" id="mail" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="pepepelota@gmail.com" required>
                                    </input>
                                </div>

                                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cambiar Configuración</button>
                            </form>

                        </div>


                        




                    </div>
                    

                </div>


            </main>
        </>
    );
}

