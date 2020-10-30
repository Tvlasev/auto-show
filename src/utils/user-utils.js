import axios from "axios";

export const handleUserLoginAndSignUp = async (e, userData, method) => {
  e.preventDefault();
    const response = await axios({
      method: 'post',
      url: method === "register" ? "http://localhost:8083/users/register" : "http://localhost:8083/users/login",
      data: userData
  })

  return response
}