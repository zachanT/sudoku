import React from 'react'
//import PropTypes from 'prop-types'

// Helpful for this project: https://reactjs.org/tutorial/tutorial.html#function-components

const Square = ({ onChange, id, value }) => {
    return (
        <input className='square' onChange={onChange} type='text' maxLength='1' id={id} value={value}>
        </input>
    )
}

Square.propTypes = {

}

export default Square
