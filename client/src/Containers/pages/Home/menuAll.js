import React, { Component } from 'react';

function menuAll({title, icon}) {
    return (
        <div className="menuAll">
            {props.icon}
            {props.title}
        </div>
    )
}

export default menuAll;