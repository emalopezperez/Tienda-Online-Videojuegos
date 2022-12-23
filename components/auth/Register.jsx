import axios from "axios";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";

const Register = ({ showLoginForm }) => {
  const [datosUser, setDatosUser] = useState({});

  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      password: "",
      email: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .max(10, "Must be 15 characters or less")
        .min(5, "faltan caracteres")
        .required("Name requerido"),
      lastname: Yup.string()
        .max(10, "Must be 15 characters or less")
        .min(5, "faltan caracteres")
        .required("apellido requerido"),
      password: Yup.string()
        .max(20, "Must be 20 characters or less")
        .min(6, "faltan caracteres")
        .required("Password requerido"),

      email: Yup.string()
        .email("Invalid email address")
        .required("Email requerido"),
    }),

    onSubmit: async(values) => {
      await axios
        .post("http://localhost:1337/api/auth/local/register", {
          username: values.name,
          lastname: values.lastname,
          email: values.email,
          code: "privateCode", // code contained in the reset link of step 3.
          password: values.password,
        })

        .then((response) => {
          console.log("Registrado");

          showLoginForm();
        })

        .catch((error) => {
          // Handle error.
          console.log("usuario no registrado:", error.response);

          toast.error("Error, vuelva a intentar", {
            duration: 1000,
            style: {
              border: "1px solid #713200",
              padding: "16px",
              color: "#FF0000",
            },
            iconTheme: {
              primary: "#FF0000",
              secondary: "#FF0000",
            },
          });
        });
    },
  });

  return (
    <div className="h-[100px] w-[300px] md:h-[200px] md:w-[350px] rounded-xl text-white">
      {<Toaster position="top-right" reverseOrder={false} />}

      <div className=" mx-auto ">
        <h1 className="text-3xl text-black font-bold">Registrarse</h1>

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
            id="lastname"
            type="text"
            placeholder="Apellido"
            name="lastname"
            autoComplete="nombre"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastname}
          />
          {formik.touched.lastname && formik.errors.lastname ? (
            <div className="text-[#8d2d2c] font-bold text-sm">
              {formik.errors.lastname}
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
            Registrarse
          </button>

          <div className="flex justify-between items-center text-sm text-gray-600">
            <p>
              <input className="mr-2 cursor-pointer" type="checkbox" />
              Remember me
            </p>
          </div>
          <p className="mt-6 mb-2 ">
            <span className="text-gray-600">Already subscribed?</span>{" "}
            <button onClick={showLoginForm} className="text-[#E58D27]">
              Iniciar sesion
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
