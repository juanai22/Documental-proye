function cargarConsejos() {
  fetch('http://localhost:5000/api/consejos')
    .then(res => res.json())
    .then(data => {
      const lista = document.getElementById("listaConsejos");
      lista.innerHTML = "";
      data.forEach(c => {
        const li = document.createElement("li");
        li.textContent = c;
        lista.appendChild(li);
      });
    })
    .catch(error => {
      alert("No se pudo conectar a la API. Asegúrate de que el servidor esté activo.");
    });
}

function hacerEncuesta() {
  let puntaje = 0;

  const p1 = prompt("1. ¿Cuántas veces revisas tu celular en una hora?\nA) 1 a 5 veces\nB) 5 a 10 veces\nC) 10 o más veces");
  if (p1?.toLowerCase() === "a") puntaje += 2;
  else if (p1?.toLowerCase() === "b") puntaje += 5;
  else if (p1?.toLowerCase() === "c") puntaje += 10;

  const p2 = prompt("2. ¿Cuántas redes sociales usas en el celular?\nA) 2 Redes\nB) 5 Redes\nC) 6 o más");
  if (p2?.toLowerCase() === "a") puntaje += 2;
  else if (p2?.toLowerCase() === "b") puntaje += 6;
  else if (p2?.toLowerCase() === "c") puntaje += 10;

  const p3 = prompt("3. ¿Revisas tu celular aún cuando no suena?\nA) No\nB) Sí");
  if (p3?.toLowerCase() === "b") puntaje += 2;

  const p4 = prompt("4. ¿Revisas los permisos que solicitan las aplicaciones al instalarlas?\nA) No\nB) Sí");
  if (p4?.toLowerCase() === "a") puntaje += 3;

  const resultado = document.getElementById("resultadoEncuesta");
  let mensaje = "";

  if (puntaje >= 20) {
    mensaje = "🔴 Sigue las recomendaciones e intenta oxigenar tu mente y descansar de las redes sociales.";
  } else if (puntaje >= 10) {
    mensaje = "🟡 Usas tu teléfono para casi todo, pero aún estás conectado al mundo real.";
  } else {
    mensaje = "🟢 Tienes una relación saludable con tu tiempo de desconexión. ¡Sigue así!";
  }

  resultado.innerHTML = `<strong>Resultado:</strong> ${mensaje}`;
}
