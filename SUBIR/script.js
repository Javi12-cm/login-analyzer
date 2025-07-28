document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (username.length >= 3 && password.length >= 3) {
    const datos = {
      usuario: username,
      clave: password
    };

    localStorage.setItem('datosUsuario', JSON.stringify(datos));
    window.location.href = "bienvenido.html";
  } else {
    document.getElementById('error').textContent = "Debes ingresar al menos 3 caracteres.";
  }
});
