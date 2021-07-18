import React from 'react'

function Star({selected}) {
    return (
        <div className={selected?"star selected":"star"}></div>
    )
}

export default Star
