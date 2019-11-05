import React from 'react';
import {graphql, Link} from 'gatsby';
import Layout from '../layout-components/layouts/layout';
import Row from '../base-components/Row';
import Flex from "../base-components/Flex";

export default function Template({data}) {
    const post = data.markdownRemark;

    return (
        <Layout>
            <Row>
                <div className="blog-page">
                    <Link to="/blog"> Go Back</Link>
                    <Flex className='column flex---1'>
                        <hr/>
                        <h1>{post.frontmatter.title}</h1>
                        <h4>
                            Posted by {post.frontmatter.author} on {post.frontmatter.date}
                        </h4>
                        <div dangerouslySetInnerHTML={{__html: post.html}}/>
                    </Flex>
                </div>
            </Row>
        </Layout>
    );
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                path
                title
                author
                date
            }
        }
    }
`;
