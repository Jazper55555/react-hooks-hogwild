import React from 'react'

function Filter({greasedHogs, greasedHogsChange}) {

    return (
        <label>
            Greased Pigs {''}
            <input 
            type='checkbox'
            checked={greasedHogs}
            onChange={(e) => greasedHogsChange(e.target.checked)}/>
        </label>
    )
}

export default Filter