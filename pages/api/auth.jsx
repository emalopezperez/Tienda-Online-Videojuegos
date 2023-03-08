import { ENV } from "../../utils/Constants"

export class Auth {
  async register(values) {
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.AUTH.REGISTER}`;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: values.name,
        lastname: values.lastname,
        email: values.email,
        code: "privateCode",
        password: values.password,
      }),
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json()
      console.log(data)
      console.log("registrado")

    } catch (error) {
      console.error(error);
    }
  }

  async login(values) {
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.AUTH.LOGIN}`;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier: values.email,
        code: "privateCode",
        password: values.password,
      }),
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json()
      console.log(data)

    } catch (error) {
      console.error(error);
    }

  }
}