import React, {useState} from 'react'

function ClickTiles({hogData, id}) {
    const [showDetails, setShowDetails] = useState(false)
    const [clickedHog, setClickedHog] = useState(hogData)

    function handleClick(event) {
        // console.log(event.target.id)
        const clickedHog = hogData.find((hog) => hog.name === event.target.id)
        if (clickedHog) {
        setShowDetails((prevShowDetails) => !prevShowDetails)
        setClickedHog(clickedHog)
        }
    }

    return (
        <div>
            <p onClick={handleClick} id={id}>Click for more info</p>
            {showDetails && clickedHog && (
            <div>
                <p>Specialty: {clickedHog.specialty}</p>
                <p>Weight: {clickedHog.weight}</p>
                <p>Highest Medal Achieved: {clickedHog["highest medal achieved"]}</p>
                <p>Greased: {clickedHog.greased.toString()}</p>
            </div>
            )}
        </div>
    )
}

export default ClickTiles