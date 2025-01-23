require("pretty-error").start()
const { format } = require("@formkit/tempo")
const seccionesYAreas = require("./src/_data/areas.js")
const paginas = require("./src/_data/paginas.json")

module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("src/admin/config.yml");
	eleventyConfig.addPassthroughCopy("src/assets/");

	eleventyConfig.addFilter("formatDate", (date) => {
		return format(new Date(date), "DD/MM/YYYY", "es")
	})

	eleventyConfig.addShortcode('lightbox', (content) => {
		return `
			<div class="gallery">
				${content}
			</div>
		`
	})

	eleventyConfig.addCollection("clases", (collectionsApi) => {
	    const result = {};
	    
	    seccionesYAreas.forEach(({ seccion, area, title }) => {

        // Si no existe la sección en el resultado, la crea
        if (!result[seccion]) {
            result[seccion] = [];
        }
        
        const paginasFiltradas = collectionsApi.getFilteredByGlob("src/clases/*.md").filter(claseData => {
        	return claseData.data.seccion === seccion && claseData.data.area === area
        })



        result[seccion].push({
            seccion: seccion,
            area: area,
            paginas: paginasFiltradas,
            title: title
        });
			});

	    // Convertir el objeto a un array plano para la paginación
	    return Object.values(result).flat();
	});



	eleventyConfig.setServerOptions({
		showAllHosts: true
	})

	return {
	  dir: {
	    input: "src",
	    output: "dist"
	  }
	}
};

// [
//   { seccion: '1eraño', area: 'arteypatrimonio', clases: [ [Object] ] },
//   { seccion: '1eraño', area: 'matematicas', clases: [] },
//   { seccion: '2doaño', area: 'arteypatrimonio', clases: [] }
// ]

// [
// 	{
// 		"1eraño": {
// 			"arteypatrimonio": {
// 				clases: [ [Object] ]
// 			},
// 			"matematicas": {
// 				clases: [ [Object] ]
// 			}
// 		}
// 	},
// 	{
// 		"2doaño": {
// 			"arteypatrimonio": {
// 				clases: [ [Object] ]
// 			}
// 		}
// 	}
// ]