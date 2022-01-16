import React from "react"
import { nanoid } from 'nanoid'


const Phrases = (props) => {
    return(
        <div className="list">
            {props.items && props.items.map(( item ) => (
                <div className="block" key={ nanoid() }>
                    <h3>{ item }</h3>
                </div>
            ))}
        </div>
    )
}

export default Phrases