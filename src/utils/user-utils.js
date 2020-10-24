import axios from "axios";

export const handleUserLoginAndSignUp = async (e, userData, method) => {
  e.preventDefault();
  try {
    const response = await axios({
      method: 'post',
      url: method === "register" ? "http://localhost:8083/users/register" : "http://localhost:8083/users/login",
      data: userData
  })
  console.log(response);

  if (method === "login") {
    const userData = JSON.stringify(response.data.user);
    const userToken = JSON.stringify(response.data.jwtToken);
    localStorage.setItem('user', userData);
    localStorage.setItem('userToken', userToken);
  }
  method === "register"
    ? window.location.replace("http://localhost:3000/login")
    : window.location.replace("http://localhost:3000/");
  }catch (e){
    console.log(e);
  }
}