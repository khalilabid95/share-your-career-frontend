import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Tech() {
    const [technologies, setTechnologie] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/technologies`)
            .then(res => {
                setTechnologie(res.data)
            })
            .catch(err => {
                alert(err.message)
            })
    }, [])
    return (
        <div>
            tech
            {
                technologies.map(technologie => (
                    <div key={technologie._id} >
                        <h1> {technologie.name} </h1>
                    </div>
                ))
            }
        </div>
    )
}

export default Tech