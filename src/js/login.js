import { get } from "../server/fetch";

let loginForm = document.getElementById("loginForm");
let texto = document.getElementById("texto");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let userList = (await get()) || [];

  let validUser = userList.find(
    (user) => user.email === email && user.password === password
  );

  if (!validUser) {
    texto.innerHTML = "Username and/or password are incorrect";
    return;
  }
  window.location.href = "home.html";
});
