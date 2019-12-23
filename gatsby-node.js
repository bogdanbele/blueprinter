exports.onCreateWebpackConfig = ({stage, loaders, actions, getConfig}) => {
	if (stage === 'build-html') {
		actions.setWebpackConfig({
			module: {
				rules: [
					{
						test: /scroll-to-element/,
						use: loaders.null(),
					},
					{
						test: /scroll-to/,
						loader:  loaders.null(),
					},
				],
			},
		}
		);
	}
	if (stage === 'build-javascript') {
		const config = getConfig();
		const miniCssExtractPlugin = config.plugins.find(
			plugin => plugin.constructor.name === 'MiniCssExtractPlugin'
		);
		if (miniCssExtractPlugin) {
			miniCssExtractPlugin.options.ignoreOrder = true
		}
		actions.replaceWebpackConfig(config)
	}
};
