import React, { useEffect, useState } from 'react'
import RenderList from './RenderList'

export default function TodoList() {
    const [userInput, setUserInput] = useState("")
    const [itemList, setItemList] = useState([])
    const [updateOn, setUpdateOn] = useState(false)
    const [updateID, setUpdateID] = useState(0)

    const handleOnChangeInput = (e) => {
        setUserInput(e.target.value)
    }

    //update id
    useEffect(() => {
        itemList.map((item, key) => {
            return item.id = key
        })
    }, [itemList])

    // Add task
    const handleClickAdd = () => {
        let newItem = {
            id: 0,
            task: userInput,
            status: false
        }

        setItemList((prev) => { setItemList([...prev, newItem]) })
        setUserInput("")
    }

    // Delete task
    const handleDelete = (id) => {
        setItemList(itemList.filter((item) => {
            return item.id !== id
        }))
        setUpdateOn(false)
        setUserInput("")
    }

    // update task
    const handleUpdate = (id) => {
        setUserInput(itemList[id].task)
        setUpdateOn(true)
        setUpdateID(id)
    }

    const handleOkUpdate = (id) => {
        setItemList(itemList.filter((item) => {
            if (item.id === id) {
                item.task = userInput
            }
            return itemList 
        }))
        setUpdateOn(false)
        setUserInput("")
    }

    const handleCancelUpdate = () => {
        setUpdateOn(false)
        setUserInput("")
    }

    // done task
    const handleDone = (id) => {
        setItemList(itemList.filter((item) => {
            if (item.id === id) {
                item.status = true
            }
            return itemList
        }))
        setUpdateOn(false)
        setUserInput("")
        console.log("done")
    }

    return (
        <>
        {console.log(itemList)}
            <div>
                <div className='container'>
                    <h2>Todo List</h2>
                    <input
                        type="text" value={userInput} placeholder='Add items' onChange={handleOnChangeInput} />

                    {!updateOn && <button disabled={userInput.length === 0} onClick={handleClickAdd}>Add</button>}

                    {updateOn && <>
                        <button onClick={() => handleOkUpdate(updateID)}>Ok</button>
                        <button onClick={handleCancelUpdate}>Cancel</button>
                    </>
                    }


                    <RenderList
                        fDelete={handleDelete}
                        fUpdate={handleUpdate}
                        fDone={handleDone}
                        itemList={itemList} />
                </div>
            </div>
        </>
    )
}
