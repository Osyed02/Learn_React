import React from 'react'

export default function ListComponent(props) {
    return (
        <div>
            <div className='wrapper'>
                <ul style={{ listStyleType: "number" }}>{props.listItem}</ul>
            </div>
        </div>
    )
}
