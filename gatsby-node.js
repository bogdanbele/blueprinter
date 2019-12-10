const path = require('path');
/**
exports.createPages = ({actions, graphql}) => {
	const {createPage} = actions;

	const postTemplate = path.resolve('src/components/template-components/blog-post.js');

	return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              path
              title
              date
              author
            }
          }
        }
      }
    }
  `).then(res => {
		if (res.errors) {
			return Promise.reject(res.errors);
		}

		res.data.allMarkdownRemark.edges.forEach(({node}) => {
			createPage({
				// Set to node.frontmatter.path if relevant. CUrrently no longer needed
				path: "/",
				component: postTemplate,
			});
		});
	});
};

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
 */