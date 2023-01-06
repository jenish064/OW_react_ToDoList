import React from 'react'

export default function RenderList(props) {

    //collbacks
    const propDelete = (id) => {
        props.fDelete(id)
    }
    const propUpdate = (id) => {
        props.fUpdate(id)
    }
    const propDone = (id) => {
        props.fDone(id)
    }

    return (
        <div>
            <ul>
                {props.itemList.map((item, key) => {
                    return (
                        <li key={key}>
                            {item.task} 

                            <button
                            onClick={() => propDone(item.id)}>Done</button>

                            {!item.status && <button
                            onClick={() => propUpdate(item.id)}>Update</button>}
                            
                            {!item.status && <button
                            onClick={() => propDelete(item.id)}>Delete</button>}
                            
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
