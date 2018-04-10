import { remote, shell } from 'electron'
import React from 'react'
import WindowHeightUpdater from '../../utils/WindowHeightUpdater'

const About = ({ updateStatus }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <p>
        <img
          src="../images/icon/icon.png"
          height="100"
          width="100"
          alt=""
          style={{ display: 'block', margin: '0 auto' }}
          onClick={() =>
            shell.openExternal('https://will-stone.github.io/browserosaurus/')
          }
        />
      </p>

      <h1>Browserosaurus</h1>

      <h3>v{remote.app.getVersion()}</h3>

      <p>{updateStatus}</p>

      <WindowHeightUpdater />
    </div>
  )
}

export default About
