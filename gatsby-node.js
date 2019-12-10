exports.onCreateWebpackConfig = ({stage, loaders, actions}) => {
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
};
