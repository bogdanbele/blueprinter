import React from 'react';
import {Link} from 'gatsby';
import {graphql} from 'gatsby';

import Layout from '../components/layout-components/layouts/layout';
import SEO from '../components/base-components/seo';
import Row from '../components/base-components/Row';
import Flex from "../components/base-components/Flex";

const BlogPage = ({data}) =>
	<Layout>
		<SEO title="Blog" />
		<Row className='column Row--header'>
            <Flex className='column flex---1 flex--text-center'>
            <h1>Latest Posts</h1>
            </Flex>
            {data.allMarkdownRemark.edges.map(post =>
				<div key={post.node.id} id={post.node.id}>
					<h3>{post.node.frontmatter.title}</h3>
					<small>
						{' '}
          Posted by {post.node.frontmatter.author} on{' '}
						{post.node.frontmatter.date}
					</small>
					<br />
					<br />
					<Link to={post.node.frontmatter.path}> Read Mode </Link>
					<br />
					<br />
				</div>
			)}

			<Link to="/">Go back to the homepage</Link>
		</Row>
	</Layout>
;

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
        id
          frontmatter {
            path
            title
            date(formatString: "DD-MM-YYYY")
            author
          }
        }
      }
    }
  }
`;

export default BlogPage;
