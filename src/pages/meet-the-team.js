import React from "react"
import {graphql, Link} from "gatsby"

import Layout from "../layouts/layout"
import SEO from "../components/seo"
import Row from "../components/base-components/Row";

class MeetTheTeamPage extends React.Component {
    render() {
        return(
            <Layout>
            <SEO title="Meet the team"/>
            <Row className='row--column'>
                <h1>Hi from the meet the team page</h1>
                <p>Welcome to the meet the team page</p>
                <Link to="/">Go back to the homepage</Link>
            </Row>
        </Layout>
        )
    }
}

export default MeetTheTeamPage
