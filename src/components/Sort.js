import React, { useState } from 'react'

function Sort({handleSortHogs}) {
    const [sortHogs, setSortHogs] = useState('All')
    
    function handleChange(event) {
        setSortHogs(event.target.value)
        handleSortHogs(event.target.value)
    }

    return (
        <div>
            <label>
                Sort by: {''}
                <select onChange={handleChange} value={sortHogs}>
                    <option value='All'>All</option>
                    <option value='Name'>Name</option>
                    <option value='Weight'>Weight</option>
                    <option value='Medal'>Medal</option>
                </select>
            </label>
        </div>
    )
}

export default Sort