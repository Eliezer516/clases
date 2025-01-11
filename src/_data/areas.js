const paginas = require("./paginas.json")

function generarAreas(clases) {
  const resultado = [];

  clases.forEach(clase => {
    const seccion = clase.name;
    clase.paginas.forEach(pagina => {
      resultado.push({
        seccion,
        area: pagina.name
      });
    });
  });

  return resultado;
}

const areas = generarAreas(paginas)

module.exports = areas