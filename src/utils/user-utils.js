import axios from "axios";

export const handleUserLoginAndSignUp = async (e, userData, method) => {
  e.preventDefault();
    const response = await axios({
      method: 'post',
      url: method === "register" ? "http://localhost:8083/users/register" : "http://localhost:8083/users/login",
      data: userData
  })

  if (method === "login") {
    const user = JSON.stringify(response.data.user);
    const userToken = JSON.stringify(response.data.jwtToken);
    localStorage.setItem("user", user);
    localStorage.setItem("userToken", userToken);
  }

  return response
}