import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [failedLogin, setFailedLogin] = React.useState(false);
  const [failedRegister, setFailedRegister] = React.useState(false);
  const [diffPasswords, setDiffPasswords] = React.useState(false);

  const Register = (e) => {
    e.preventDefault();
    const baseURL = "http://129.151.125.31:42069";

    if (e.target[4].value !== e.target[5].value) {
      setDiffPasswords(true);
      return;
    }

    fetch(`${baseURL}/api/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target[0].value,
        password: e.target[4].value,
        email: e.target[1].value,
        firstName: e.target[2].value,
        lastName: e.target[3].value,
        userType: "user",
      }),
    })
      .then((data) => {
        console.log(data);
        if (data.status === 200) {
          navigate("/login");
          //navigate("/");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="flex min-h-[100vh] flex-col items-center justify-center bg-gradient-to-b from-primary-950 via-primary-900 to-primary-950">
      <h1 className="mb-10 text-6xl font-bold text-rojovintage-500">CineConnect</h1>
      <div className="flex w-4/5 max-w-[500px] flex-col items-center justify-center rounded-xl bg-white px-5 py-10 text-primary-900">
        <h1 className="text-4xl font-bold">Registrarse</h1>
        <div className="flex w-full max-w-[300px] flex-col items-center justify-center">
          <form
            className="flex w-full flex-col p-4"
            onSubmit={Register}
            method="POST"
          >
            <label>Nombre de Usuario</label>
            <input
              type="text"
              placeholder="Usuario"
              className="my-1 rounded-md border border-gray-300 bg-gray-200 p-1 invalid:[&:not(:placeholder-shown):not(:focus)]:border-2 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
              required
            ></input>
            <label>Correo Electrónico</label>
            <input
              type="email"
              placeholder="shrek@cineconnect.cc"
              className="my-1 rounded-md border border-gray-300 bg-gray-200 p-1 invalid:[&:not(:placeholder-shown):not(:focus)]:border-2 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
              required
            ></input>
            <label>Nombre</label>
            <input
              placeholder="Shrek"
              type="text"
              className="my-1 rounded-md border border-gray-300 bg-gray-200 p-1 invalid:[&:not(:placeholder-shown):not(:focus)]:border-2 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
              required
            ></input>
            <label>Apellido</label>
            <input
              type="text"
              placeholder="Ogro Verde"
              className="my-1 rounded-md border border-gray-300 bg-gray-200 p-1 invalid:[&:not(:placeholder-shown):not(:focus)]:border-2 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
              required
            ></input>

            <label>Contraseña</label>
            <input
              type="password"
              placeholder="Ingrese su contraseña"
              className="my-1 rounded-md border border-gray-300 bg-gray-200 p-1 invalid:[&:not(:placeholder-shown):not(:focus)]:border-2 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
              required
            ></input>
            <label>Repetir Contraseña</label>
            <input
              type="password"
              placeholder="Repita su contraseña"
              className="my-1 rounded-md border border-gray-300 bg-gray-200 p-1 invalid:[&:not(:placeholder-shown):not(:focus)]:border-2 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
              required
            ></input>

            {failedRegister ? (
              <p className="text-red-500">Error al registrarse</p>
            ) : null}
            {diffPasswords ? (
              <p className="text-red-500">Las contraseñas no coinciden</p>
            ) : null}

            <button
              type="submit"
              className="mt-4 w-full rounded-md bg-primary-900 px-3  py-1 font-bold text-rojovintage-300"
            >
              Registrarse
            </button>
          </form>

          <div className="flex w-full justify-start p-4">
            <p>
              ¿Ya tienes una cuenta?{" "}
              <span
                onClick={() => {
                  navigate("/app");
                }}
                className="text-sm underline hover:cursor-pointer"
              >
                Iniciar Sesión
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
