import React from 'react';
import {
	Container,
	Row,
	Col
} from 'reactstrap';
import NavBar from '../NavBar';
import './Layout.css';

const Layout = ({
	children
}) => (
	<Col md={12}>
		<Row>
			<NavBar />
		</Row>
		<Row>
			<Container fluid={false} className="views-container">
				{children}
			</Container>
		</Row>
	</Col>
);

export default Layout;
