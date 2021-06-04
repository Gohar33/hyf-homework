import React from 'react'

const BorderStyle = ({ children }) => {
    return (
        <div style={{ border: "3px solid" }}>
            {children}
        </div >
    )
}

export default BorderStyle
