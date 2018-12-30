import React, { Component } from 'react'
import '../styles/Projects.css'
import Project from './Project'
import axios from 'axios'

class Projects extends Component {

  state = {
    frontendRepos: [],
    backendRepos: []
  }

  async componentDidMount () {
    const repos = await axios.get('https://api.github.com/users/nimeshkeswani/repos')
    this.setState({ frontendRepos: repos.data.filter(repo => ['mobile-flashcards', 'nimeshkeswani.github.io', 'my-reads', 'would-you-rather'].includes(repo.name)) })
    this.setState({ backendRepos: repos.data.filter(repo => ['nimesh-server'].includes(repo.name)) })
  }

  render () {
    return (
      <div className='Projects'>
        <div className='ProjectsCategory'>
          <h3>Frontend</h3>
          {this.state.frontendRepos.map(repo => (
            <Project
              key={repo.name}
              title={repo.name}
              description={repo.description}
              githubLink={repo.html_url}
              externalLink={
                ['nimeshkeswani.github.io', 'my-reads', 'would-you-rather'].includes(repo.name) 
                ? `https://nimeshkeswani.github.io/${repo.name}`
                : ''
              }
            />
          ))}
        </div>
        <div className='ProjectsCategory'>
          <h3>Backend</h3>
          {this.state.backendRepos.map(repo => (
            <Project
              key={repo.name}
              title={repo.name}
              description={repo.description}
              githubLink={repo.html_url}
              externalLink='' />
          ))}
        </div>
      </div>
    )
  }
}

export default Projects
