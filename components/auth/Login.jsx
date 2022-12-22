import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = ({ showRegisterForm }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
      email: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .max(10, "Must be 15 characters or less")
        .min(5, "faltan caracteres")
        .required("Name requerido"),

      password: Yup.string()
        .max(20, "Must be 20 characters or less")
        .min(6, "faltan caracteres")
        .required("Password requerido"),

      email: Yup.string()
        .email("Invalid email address")
        .required("Email requerido"),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="h-[100px] w-[300px] md:h-[200px] md:w-[350px] rounded-xl text-white">
      <div className=" mx-auto ">
        <h1 className="text-3xl text-black font-bold">Login</h1>

        <form
          onSubmit={formik.handleSubmit}
          className="w-full flex flex-col py-4"
        >
          <input
            className="p-3 my-2  bg-gray-700 rounded"
            id="name"
            type="text"
            placeholder="Nombre"
            name="name"
            autoComplete="nombre"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-[#8d2d2c] font-bold text-sm">
              {formik.errors.name}
            </div>
          ) : null}
          <input
            className="p-3 my-2  bg-gray-700 rounded"
            id="email"
            type="text"
            placeholder="Email"
            autoComplete="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-[#8d2d2c] font-bold text-sm">
              {formik.errors.email}
            </div>
          ) : null}
          <input
            id="password"
            type="password"
            placeholder="Password"
            className="p-3 my-2 bg-gray-700 rouded"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className=" text-[#8d2d2c] font-bold text-sm">
              {formik.errors.password}
            </div>
          ) : null}
          <button
            type="submit"
            className="bg-[#E58D27] text-black py-3 my-6 rounded font-bold"
          >
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
