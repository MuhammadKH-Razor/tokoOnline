import React from 'react';
import StarRateIcon from '@material-ui/icons/StarRate';
import '../../assets/style/beep/star.css';

function Star() {
    return (
        <div className="start-all">
        <StarRateIcon style={{fontSize : 30, color: 'white'}}/>
        <StarRateIcon style={{fontSize : 30, color: 'white'}}/>
        <StarRateIcon style={{fontSize : 30, color: 'white'}}/>
        <StarRateIcon style={{fontSize : 30, color: 'white'}}/>
        </div>
    )
}

export default Star;