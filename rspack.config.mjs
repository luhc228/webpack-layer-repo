import { defineConfig } from "@rspack/cli";
import { rspack } from "@rspack/core";

// Target browsers, see: https://github.com/browserslist/browserslist

export default defineConfig({
	entry: {
		'main': {
			import: './index.js',
			layer: 'main',
		},
		'second': {
			import: './index.js',
			layer: 'second',
		}
	},
	mode: 'development',
	experiments: {
		layers: true
	},
	plugins: [
		new rspack.DefinePlugin({
			__RUNTIME_TYPE__: '__webpack_layer__'
		})
	]

});
