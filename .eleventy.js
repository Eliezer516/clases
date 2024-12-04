module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("src/admin/config.yml");

	eleventyConfig.addCollection("1eraño", (collectionApi) => {
		return collectionApi.getFilteredByGlob("src/clases/1eraño/arteypatrimonio/clase/*.md")
	})

	eleventyConfig.addCollection("2doaño", (collectionApi) => {
		return collectionApi.getFilteredByGlob("src/clases/2doaño/arteypatrimonio/clase/*.md")
	})

	return {
	  dir: {
	    input: "src",
	    output: "dist"
	  }
	}
};
