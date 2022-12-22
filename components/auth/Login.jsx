import React from "react";

const Login = ({ showRegisterForm }) => {
  return (
    <div className="h-[100px] w-[300px] md:h-[200px] md:w-[350px] rounded-xl text-white">
      <div className=" mx-auto ">
        <h1 className="text-3xl text-black font-bold">Login</h1>

        <form className="w-full flex flex-col py-4">
          <input
            className="p-3 my-2  bg-gray-700 rounded"
            type="text"
            placeholder="Nombre"
            autoComplete="nombre"
          />

          <input
            className="p-3 my-2  bg-gray-700 rounded"
            type="text"
            placeholder="Email"
            autoComplete="email"
          />

          <input
            id="password"
            type="password"
            placeholder="Password"
            className="p-3 my-2 bg-gray-700 rouded"
          />

          <button className="bg-[#E58D27] text-black py-3  my-6 rounded font-bold">
            Iniciar Sesion
          </button>
          <div className="flex justify-between items-center text-sm text-gray-600">
            <p>
              <input className="mr-2 cursor-pointer" type="checkbox" />
              Remember me
            </p>
          </div>
          <p className="py-4 mb-2 ">
            <span className="text-gray-600">Already subscribed?</span>{" "}
            <button onClick={showRegisterForm} className="text-[#E58D27]">
              Registrarse
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
