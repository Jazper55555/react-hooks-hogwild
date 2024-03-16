import React, { useState } from 'react'
import ClickTiles from './ClickTiles'
import Filter from './Filter'
import Sort from './Sort'

function Tiles({hogs}) {
    const [greasedHogs, setGreasedHogs] = useState(false)
    const [sortedHogs, setSortedHogs] = useState(hogs)

    const handleSortHogs = (sortBy) => {
        let sorted = [...hogs]
        if (sortBy === 'Name') {
            sorted.sort((a, b) => a.name.localeCompare(b.name))
        }   else if (sortBy === 'Weight') {
            sorted.sort((a, b) => a.weight - b.weight)
        }   else if (sortBy === 'Medal') {
            sorted.sort((a, b) => a['highest medal achieved'].localeCompare(b['highest medal achieved']))
        }
        setSortedHogs(sorted)
    }

    const filteredHogs = greasedHogs ? sortedHogs.filter((hog) => hog.greased) : sortedHogs

    const hogNameAndImage = filteredHogs.map((hog) => (
        <div key={hog.name} id={hog.name} className='ui centered card'>
        <span>{hog.name}</span>
        <img src={hog.image} className='blurring dimmable image'/>
        <ClickTiles hogData={hogs} key={hog.name} id={hog.name}/>
        </div>
    ))

    return (
        <>
        <Filter hogData={hogs} greasedHogs={greasedHogs} greasedHogsChange={setGreasedHogs}/>
        <br></br>
        <Sort handleSortHogs={handleSortHogs}/>
        {hogNameAndImage}
        {/* <Hide /> */}
        </>
    )
}

export default Tiles