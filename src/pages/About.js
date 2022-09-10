import {Fragment, useEffect, useState} from 'react';
import {Container, Row, Col, Tab, ListGroup} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import Navbar from '../components/AppNavbar';
import Nav from '../components/Navbar';
import Cards from '../components/Card';
import CardProfile from '../components/CardProfile';

// pages
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';


export default function About () {

	return (
		<Fragment>
		<Container fluid>
		<Navbar/>
			<Row>
				<Col sm={8}>
				<Tab.Container defaultActiveKey="#home" variant='tabs' className="flex-column d-none d-xl-block accordion p-0">
				<Row>
					<Col lg={2}>
					<ListGroup>
					<ListGroup.Item action href='#home'>About</ListGroup.Item>
					<ListGroup.Item action href="#link1">Experience</ListGroup.Item>
					<ListGroup.Item action href="#link2">Education</ListGroup.Item>
					<ListGroup.Item action href="#link3">Skills</ListGroup.Item>
					</ListGroup>
					</Col>
					<Col lg={9}>
					<Tab.Content>
						<Tab.Pane eventKey="#home">
						<h3 >My Life as a Developer</h3>
						<p>I am a passionate individual with affinity for programming and 
                        latest technology. I am a full stack developer using NODE JS, 
                        Express JS and MongoDB as my backend tools while I use React 
                        for front-end development. I am a mobile application developer 
                        building apps on Android and IOS.</p>
						</Tab.Pane>
						<Tab.Pane eventKey='#link1'><Experience/></Tab.Pane>
						<Tab.Pane eventKey='#link2'><Education/></Tab.Pane>
						<Tab.Pane eventKey='#link3'><Skills/></Tab.Pane>

					</Tab.Content>
					</Col>
				</Row>
				</Tab.Container>
				</Col>				
				<Col lg={3} md={4} className='ms-auto'>
					<CardProfile/>
				</Col>
			</Row>
		</Container>
		</Fragment>

	)
}