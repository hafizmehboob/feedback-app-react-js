import React from 'react';
import PropTypes from 'prop-types';

export default function Header({text, bgColor, color}) {
  const styles = {
    backgroundColor: bgColor,
    color: color
  }
  return (
    <header style={styles}>
        <div className="container">
            <h2>{ text }</h2>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text: 'Feedback UI',
    backgroundColor: 'gray',
    color: 'black'
}

Header.propTypes = {
    text: PropTypes.string,
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
}
