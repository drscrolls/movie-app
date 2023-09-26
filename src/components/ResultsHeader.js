import React from 'react'

export default function ResultsHeader({title}) {
    return (
        <div className='row border-bottom'>
            <div className='col-12'>
                <h6>Here are the results with keyword <i>{title}</i></h6>
            </div>
        </div>
    )
}
