module.exports = async function(eleventyConfig) {
	eleventyConfig.addCollection("1eraño", (collectionApi) => {
		console.log(collectionApi.getFilteredByGlob("src/clases/1eraño/arteypatrimonio/clase/*.md"))
		return collectionApi.getFilteredByGlob("src/clases/1eraño/arteypatrimonio/clase/*.md")
	})
	return {
	  dir: {
	    input: "src",
	    output: "dist"
	  }
	}
};
