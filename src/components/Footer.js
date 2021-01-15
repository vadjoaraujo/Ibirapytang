import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; Página feita por Vadjo Victor para mais informações:{' '} <a href="https://portifoliovadjo.netlify.app/">https://portifoliovadjo.netlify.app</a> </p> 
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
