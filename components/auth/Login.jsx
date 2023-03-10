import { useFormik } from "formik";
import { Auth } from "../../pages/api/auth"
import { useAuth } from "../../hooks/useAuth";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";

const authCtrl = new Auth()

const Login = ({ showRegisterForm, setSowModal }) => {

  const { } = useAuth()

  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
      email: "",
    },

    validationSchema: Yup.object({
      password: Yup.string()
        .max(20, "Must be 20 characters or less")
        .min(6, "faltan caracteres")
        .required("Password requerido"),

      email: Yup.string()
        .email("Invalid email address")
        .required("Email requerido"),
    }),


    onSubmit: async (values) => {
      try {
        await authCtrl.login(values);
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <div className="h-[100px] w-[300px] md:h-[200px] md:w-[350px] rounded-xl text-white">
      { <Toaster position="top-right" reverseOrder={ false } /> }
      <div className="mx-auto ">
        <h1 className="text-3xl font-bold text-black">Login</h1>

        <form
          onSubmit={ formik.handleSubmit }
          className="flex flex-col w-full py-4"
        >

          <input
            className="p-3 my-2 bg-gray-700 rounded"
            id="email"
            type="text"
            placeholder="Email"
            autoComplete="email"
            onChange={ formik.handleChange }
            onBlur={ formik.handleBlur }
            value={ formik.values.email }
          />
          { formik.touched.email && formik.errors.email ? (
            <div className="text-[#8d2d2c] font-bold text-sm">
              { formik.errors.email }
            </div>
          ) : null }
          <input
            id="password"
            type="password"
            placeholder="Password"
            className="p-3 my-2 bg-gray-700 rouded"
            onChange={ formik.handleChange }
            onBlur={ formik.handleBlur }
            value={ formik.values.password }
          />
          { formik.touched.password && formik.errors.password ? (
            <div className=" text-[#8d2d2c] font-bold text-sm">
              { formik.errors.password }
            </div>
          ) : null }
          <button
            type="submit"
            className="bg-[#E58D27] text-black py-3 my-6 rounded font-bold"
          >
            Iniciar Sesion
          </button>
          <div className="flex items-center justify-between text-sm text-gray-600">
            <p>
              <input className="mr-2 cursor-pointer" type="checkbox" />
              Remember me
            </p>
          </div>
          <p className="py-4 mt-5">
            <span className="text-gray-600">Already subscribed?</span>{ " " }
            <button onClick={ showRegisterForm } className="text-[#E58D27]">
              Registrarse
            </button>
          </p>
          <p className="">
            <button
              type="click"
              className="text-[#E58D27]"
            >
              <span className="text-[#E58D27]">
                { " " }
                ??Has olvidaste tu contrasena?
              </span>{ " " }
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
