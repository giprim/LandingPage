module.exports = {
	presets: ['@vue/cli-plugin-babel/preset'],
	chainWebpack: (config) => {
		const svgRule = config.module.rule('svg');

		svgRule.uses.clear();

		svgRule
			.use('babel-loader')
			.loader('babel-loader')
			.end()
			.use('vue-svg-loader')
			.loader('vue-svg-loader');
	},

	// module: {
	//   rules: [
	//     {
	//       test: /\.svg$/,
	//       use: ["babel-loader", "vue-svg-loader"]
	//     }
	//   ]
	// }
};
