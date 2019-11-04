import React from 'react';
import {graphql, Link, StaticQuery} from 'gatsby';

import Layout from '../components/layout-components/layouts/layout';
import SEO from '../components/seo';
import Row from '../components/base-components/Row';
import Image from '../components/base-components/Image/Image';
import TeamMember from '../components/template-components/TeamMember/TeamMember';

let staticQuery = <StaticQuery
	query={graphql` {
            allTeamMembersJson {
                edges {
                    node {
                        id
                        name
                        image
                        sections
                        skills
                    }
                }
            }
        }
    `}
	render={data => 
		<div>
			{getTeamMember(data)}
		</div>
	}
/>;

function getTeamMember(data) {
	const linksArray = [];
	// noinspection JSUnresolvedVariable
	data.allTeamMembersJson.edges.forEach(item =>
		linksArray.push(
			<TeamMember
				key={item.node.id}
				imgsrc={item.node.image}
				name={item.node.name}
				sections={item.node.sections}
				skills={item.node.skills}
			/>
		)
	);
	return linksArray;
}

class MeetTheTeamPage extends React.Component {
	render() {
		return (
			<Layout>
				<SEO title="Meet the team"/>
				<Row className="row--column">
					{staticQuery}
					<h1>Lorem ipsum dolor sit amet consectetuer adipiscing elit</h1>
					<p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                        dolor. Aenean massa
						<strong>strong</strong>. Cum sociis natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
                        sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
                        vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                        Nullam dictum felis eu pede{' '}
                        mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
                        vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend
                        ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
                        viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies
                        nisi vel augue. Curabitur ullamcorper ultricies nisi.
					</p>
					<h1>Lorem ipsum dolor sit amet consectetuer adipiscing elit</h1>
					<h2>Aenean commodo ligula eget dolor aenean massa</h2>
					<p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                        dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
                        sem.
					</p>
					<h2>Aenean commodo ligula eget dolor aenean massa</h2>
					<p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                        dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
                        sem.
					</p>
					<ul>
						<li>Lorem ipsum dolor sit amet consectetuer.</li>
						<li>Aenean commodo ligula eget dolor.</li>
						<li>Aenean massa cum sociis natoque penatibus.</li>
					</ul>
					<p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                        dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
                        sem.
					</p>
				</Row>
			</Layout>
		);
	}
}

export default MeetTheTeamPage;
