import React, { Component } from 'react'
import '../styles/Project.css'
import github from '../assets/images/github-character.png'
import external from '../assets/images/external-link-icon.png'

class Project extends Component {

	render () {

    const { title, description, githubLink, externalLink } = this.props

		return (
			<div className='Project-main'>
        <h5 className='Project-title'>{title}</h5>
        <p className='Project-description'>{description}</p>
        <div className='Project-links'>
          {githubLink && <a href={githubLink} target='_blank' rel='noopener noreferrer'>
            <img className='Project-icon-image' src={github} alt='github' />
          </a>}
          {externalLink && <a href={externalLink} target='_blank' rel='noopener noreferrer'>
            <img className='Project-icon-image' src={external} alt='external' />
          </a>}
        </div>
      </div>
		)
	}
}

export default Project
