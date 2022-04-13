import React from 'react';
import './SeasonDisplay.css';

// configuration object
const seasonConfig = {
    summer: {
        text: "Let's hit the beach!",
        iconName: 'sun'
    },
    winter: {
        text: 'Burr it is cold',
        iconName: 'snowflake'
    }
}

// determine which season is 
const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];

    return (
        <div className={`season-container ${season}`}>
            <div>
                <div className='icon-container'><i className={`season-icon huge ${iconName} icon`} /></div>
                <h1 className='season-text'>{text}</h1>
            </div>

        </div>
    );
}

export default SeasonDisplay;
