var alumno = [];
var i = 0;
function agregar() {
  if (document.getElementById("cedula").value != "" && document.getElementById("nombre").value != "" && document.getElementById("nota").value != "") {
    alumno.push({
      cedula: document.getElementById("cedula").value,
      nombre: document.getElementById("nombre").value,
      nota: document.getElementById("nota").value});

    tabla = '';
    tabla += '<tr>';
    tabla += '<td>' + alumno[i].cedula + '</td>';
    tabla += '<td>' + alumno[i].nombre + '</td>';
    tabla += '<td>' + alumno[i].nota + '</td>';
    tabla += '</tr>';

    document.getElementById("tblAlumno").innerHTML += tabla;

    document.getElementById("cedula").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("nota").value = 10;
    i++;
  }
  else {
    alert("Ingrese todos los campos")
  }
}

function promedio() {
  var suma = 0;
  for (var i = 0; i < alumno.length; i++) {
    suma += parseInt(alumno[i].nota);
  }
  alert("Promedio = " + suma / alumno.length);
}

function mayor() {
  var mayor = parseInt(alumno[0].nota);
  for (var i = 0; i < alumno.length; i++) {
    if (mayor < parseInt(alumno[i].nota)) {
      mayor = parseInt(alumno[i].nota);
    }
  }
  alert("Mayor = " + mayor)
}

function menor() {
  var menor = parseInt(alumno[0].nota);
  for (var i = 0; i < alumno.length; i++) {
    if (menor > parseInt(alumno[i].nota)) {
      menor = parseInt(alumno[i].nota);
    }
  }
  alert("Menor = " + menor);
}
