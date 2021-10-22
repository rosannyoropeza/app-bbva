const API_URL = 'http://localhost:3000';

const HTMLResponse = document.querySelector("#root");

fetch(`${API_URL}/users`)
  .then(response => response.json())
  .then(users => {
      const templete = users.map((user) => `<li>${user.phone} ${user.name} ${user.password} </li>`);
      HTMLResponse.innerHTML = `<ul>${templete} </ul>`
  });