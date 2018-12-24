import React, { Component, Fragment } from 'react'
import Links from './Links'
import '../styles/Home.css'
import Projects from './Projects'

class Home extends Component {
	render () {
		return (
			<Fragment>
				<header className='Home-header'>
					<text>Nimesh Keswani</text>
					<div className='Home-header-links'>
						<Links />
					</div>
        </header>
				<body className='Home-body'>
						<Projects />
				</body>
				<footer className='Home-footer'>
					<text>Nimesh Keswani &copy; 2018</text>
				</footer>
      </Fragment>
		)
	}
}

export default Home
