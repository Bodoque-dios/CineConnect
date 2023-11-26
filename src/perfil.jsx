import React from "react";
import logo from './images/logo.png'; // Import the image
import Header from "./components/Header";
import { Link } from "react-router-dom";

export default function Perfil() {
  const image_url =
    "https://i1.sndcdn.com/artworks-000208559700-5cy27c-t500x500.jpg";

  return (
    <>
      <div className="from-primary-950 via-primary-900 to-primary-950 font-inter min-h-screen w-full bg-gradient-to-b  overflow-hidden">
       <Header/>

        <div className>
          <div className="mx-auto my-6 grid w-1/3 grid-cols-1 items-center justify-center  gap-8 rounded-lg bg-amarillo p-4 ring-2 ring-primary-950 transition-transform duration-300 hover:scale-110 dark:ring-gray-500">
            <div className="place-content-centers w-full px-3 py-3 text-center ">
              <img
                className="mx-auto my-auto h-40 w-40 rounded-full p-1 ring-2 ring-primary-950 dark:ring-gray-500"
                src={image_url}
                alt="nose"
              />
            </div>
            <div className="w-full text-center">
              <p>@Nombre_de_Usuario</p>
            </div>
            <div>
              <h1>La Serena, Chile</h1>
            </div>
            <div className="w-full text-center">
              <p>
                Hello, 😊🌎😊🌎😊🌎😊🌎😊🌎 ❄️❄️ 40 inviernos ❄️❄️ 👋 ¡Hola! Soy
                PepePelota, un(a) auxiliar administrativo(a) apasionado(a) por
                la organización y la eficiencia. Me encanta trabajar en equipo y
                colaborar para lograr los objetivos de la empresa.
                <br />
                📚 Con experiencia en tareas administrativas, gestión de
                documentos y atención al cliente, siempre estoy listo(a) para
                asumir nuevas responsabilidades y aprender.
                <br />
                🖥️ Familiarizado(a) con herramientas informáticas y sistemas de
                gestión, me esfuerzo por mantener todo en orden y facilitar un
                entorno de trabajo fluido.
                <br />
                🌟 ¡Estoy emocionado(a) por ser parte de un equipo dinámico y
                contribuir al éxito del proyecto!
              </p>
            </div>
          </div>
          <div className="mx-auto flex w-full items-center bg-yellow-500 py-0.5 sm:w-1/2"></div>
          <div className="mx-auto flex grid w-full grid-cols-1 items-center gap-8 bg-primary-800 px-2 py-5 text-white sm:w-1/2">
            <div>
              <form>
                <div className="mb-6">
                  <p className="text-amarillo">Nombre de Usuario</p>
                  <input
                    type="text"
                    id="text"
                    className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="@Nombre_de_Usuario"
                    required
                  ></input>
                </div>
                <div className="mb-6">
                  <p className="text-amarillo">Localidad</p>
                  <input
                    type="text"
                    id="password"
                    className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="La Serena, Chile"
                    required
                  ></input>
                </div>
                <div className="mb-6">
                  <p className="text-amarillo">Descripción</p>
                  <input
                    type="text"
                    id="m"
                    className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Hello, 😊🌎😊🌎😊🌎😊🌎😊🌎❄️❄️ 40 inviernos ❄️❄️"
                    required
                  ></input>
                </div>
                <div className="mb-6">
                  <p className="text-amarillo">Email</p>
                  <input
                    type="mail"
                    id="mail"
                    className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="pepepelota@gmail.com"
                    required
                  ></input>
                </div>

                <button
                  type="submit"
                  className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Cambiar Configuración
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
