const { format } = require("@formkit/tempo")

module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("src/admin/config.yml");
	eleventyConfig.addPassthroughCopy("src/assets/");

	eleventyConfig.addFilter("formatDate", (date) => {
		return format(new Date(date), "long", "es")
	})

	eleventyConfig.addShortcode('lightbox', (content) => {
		return `
			<div class="gallery">
				${content}
			</div>
		`
	})

	eleventyConfig.addCollection("1eraño", (collectionApi) => {
		return collectionApi.getFilteredByGlob("src/clases/1eraño/arteypatrimonio/clase/*.md")
	})

	eleventyConfig.addCollection("2doaño", (collectionApi) => {
		return collectionApi.getFilteredByGlob("src/clases/2doaño/arteypatrimonio/clase/*.md")
	})

	eleventyConfig.addCollection("clases", (collectionApi) => {
		return {
			"1eraño": {
				"arteypatrimonio": collectionApi.getFilteredByGlob("src/clases/1eraño/arteypatrimonio/clase/*.md"),
				"matematicas": collectionApi.getFilteredByGlob("src/clases/1eraño/matematicas/clase/*.md")
			},
			"2doaño": {
				"arteypatrimonio": collectionApi.getFilteredByGlob("src/clases/2doaño/arteypatrimonio/clase/*.md")
			}
		}
	})

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
