function mostrarPresentacion(){
  document.getElementById("experiencia").style.display='none';
  document.getElementById("habilidades").style.display='none';
  document.getElementById("contacto").style.display='none';
  document.getElementById("presentacion").style.display='block';
}

function mostrarExperiencia(){
  document.getElementById("experiencia").style.display='block';
  document.getElementById("habilidades").style.display='none';
  document.getElementById("contacto").style.display='none';
  document.getElementById("presentacion").style.display='none';
}

function mostrarHabilidades(){
  document.getElementById("experiencia").style.display='none';
  document.getElementById("habilidades").style.display='block';
  document.getElementById("contacto").style.display='none';
  document.getElementById("presentacion").style.display='none';
}

function mostrarContacto(){
  document.getElementById("experiencia").style.display='none';
  document.getElementById("habilidades").style.display='none';
  document.getElementById("contacto").style.display='block';
  document.getElementById("presentacion").style.display='none';
}

function guardarDatos(){
  alert("Los datos fueron enviados");
}