module.exports = {
	output: {
		doc: 'build-doc',
		library: 'build-library'
	},
	static: {
		doc: 'public',
		library: 'libraryStatic',
	},
	src: {
		doc: 'doc',
		library: 'components'
	},
	cssPreprocessor: 'scss',
	typescript: false,
	pkg: 'yarn'
}
