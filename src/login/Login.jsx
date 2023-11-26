import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [failedLogin, setFailedLogin] = React.useState(false);

  const verifyLogin = (e) => {
    e.preventDefault();
    
    if (e.target[0].value === "Shrek" || e.target[1].value === "Pantano") {
      navigate("/app");
    } else {
      setFailedLogin(true);
      return;
    }
    const baseURL = "http://129.151.125.31:42069";

    fetch(`${baseURL}/api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target[0].value,
        password: e.target[1].value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if ("token" in data) {
          localStorage.setItem("token", data.token);
          console.log(localStorage.getItem("token"));
          setFailedLogin(false);
          navigate("/app");
        } else {
          setFailedLogin(true);
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="flex min-h-[100vh] flex-col items-center justify-center bg-gradient-to-b from-primary-950 via-primary-900 to-primary-950">
      <h1 className="mb-10 text-6xl font-bold text-rojovintage-500">CineConnect</h1>
      <div className="flex w-4/5 max-w-[500px] flex-col items-center justify-center rounded-xl bg-white px-5 py-10 text-primary-900">
        <h1 className="text-4xl font-bold">Iniciar Sesión</h1>
        <div className="flex w-full max-w-[300px] flex-col items-center justify-center">
          <form
            className="flex w-full flex-col p-4"
            onSubmit={verifyLogin}
            method="POST"
          >
            <label>Nombre de Usuario</label>
            <input
              type="text"
              placeholder="Usuario"
              className="my-1 rounded-md border border-gray-300 bg-gray-200 p-1 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 invalid:[&:not(:placeholder-shown):not(:focus)]:border-2"
              required
            ></input>
            <label>Contraseña</label>
            <input
              type="password"
              placeholder="Ingrese su contraseña"
              className="my-1 rounded-md border border-gray-300 bg-gray-200 p-1 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 invalid:[&:not(:placeholder-shown):not(:focus)]:border-2"
              required
            ></input>
            <button
              type="submit"
              className="mt-4 w-full rounded-md bg-primary-900 px-3  py-1 font-bold text-rojovintage-300"
            >
              Ingresar
            </button>
          </form>
          {failedLogin ? (
            <p className="text-red-500">Usuario o contraseña incorrectos</p>
          ) : null}
          <div className="flex w-full justify-start p-4">
            <p
              onClick={() => {
                navigate("/register");
              }}
              className="text-sm underline hover:cursor-pointer"
            >
              Registrarse
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
