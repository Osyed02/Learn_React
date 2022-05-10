import React, { useState, useEffect } from 'react'
import ListComponent from '../components/ListComponent'
import Button from '../components/Button'

const API_Data = [
    { id: 0, text: 'My name is Text0', editMode: false },
    { id: 1, text: 'My name is Text1', editMode: false },
    { id: 2, text: 'My name is Text2', editMode: false },
    { id: 3, text: 'My name is Text3', editMode: false }
]



export default function Homepage() {
    const [inputHandler, setInputHandler] = useState(false)
    const [data, setData] = useState([])
    const [List, setList] = useState("")
    useEffect(() => {
        setList("")
    }, [])
    function addNewListHandler(id) {
        try {
            const myData = [...data]
            const myListData = { id: myData.length + 1, text: List, editMode: false }
            myData.push(myListData)
            setData(myData)
            setInputHandler(false)
            setList("")


        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        setData(API_Data)
    }, [])
    const value = {
        Add: <i class="ri-add-circle-line"></i>,
        Edit: <i class="ri-edit-line"></i>,
        Delete: <i class="ri-delete-bin-5-line"></i>,
        Cancel: <i class="ri-close-line"></i>,
        Save: <i class="ri-save-line"></i>,
    }
    const btn_class = {
        Add: "btn-outline-primary",
        Edit: "btn-outline-success",
        Delete: "btn-outline-danger",
        Cancel: "btn-outline-danger",
        Save: "btn-outline-success",
    }

    function addList() {
        setInputHandler(!inputHandler)
    }


    function buttonHandler(currentData) {
        const myData = [...data]
        for (let i = 0; i < myData.length; i++) {

            myData[i] = { ...myData[i], editMode: false }

        }
        const currentObjIndex = myData.findIndex((val) => val.id === currentData.id)
        myData[currentObjIndex] = { ...myData[currentObjIndex], editMode: !myData[currentObjIndex].editMode }
        setData(myData)
    }
    const saveDataHandler = (myInputData, id) => {
        const myData = [...data]
        for (let i = 0; i < myData.length; i++) {

            myData[i] = { ...myData[i], editMode: false }

        }
        const currentObjIndex = myData.findIndex((val) => val.id === id)
        myData[currentObjIndex] = { ...myData[currentObjIndex], text: myInputData }
        setData(myData)
    }
    const deleteDataHandler = (id) => {
        const myData = [...data]
        try {
            const currentObjIndex = data.findIndex((val) => val.id === id)
            myData.splice(currentObjIndex, 1)
            setData(myData)
            console.log(currentObjIndex);

        } catch (err) {
            console.log(err)
        }
    }
    const cancelEditHandler = (id) => {
        try {
            const myData = [...data]
            for (let i = 0; i < myData.length; i++) {

                myData[i] = { ...myData[i], editMode: false }

            }
            // myData.splice(currentObjIndex, 1)
            setData(myData)

        } catch (error) {
            console.log(error);
        }
    }


    const listItems = data.map((list, index) =>
        <li><ListComponent key={index} onClick={() => buttonHandler(list)} id={list.id} cancelEditing={cancelEditHandler} deleteData={deleteDataHandler} saveData={saveDataHandler} editMode={list.editMode} value={value} class={btn_class} listItem={list.text} /></li>
    );


    return (
        <div className='container'>
            <h1 className='text-center mt-4 bg-dark text-white p-4'>To Do List</h1>
            <div className=' bg-light pe-2 py-2'>

                <div className='d-flex justify-content-between'>
                    <h2 className='ps-2'>List Items</h2>
                    <Button
                        onClick={addList}
                        value={value.Add}
                        class={btn_class.Add}
                    />
                </div>
                {inputHandler && <div className='d-flex ms-2 gap-2 align-items-center'>
                    <p className='mb-0'>Add Item:</p>
                    <input value={List} onChange={(event) => { setList(event.target.value) }} className='form-control w-25' type={"text"} />
                    <Button
                        onClick={() => setInputHandler(false)}
                        value={value.Cancel}
                        class={btn_class.Cancel}
                    />
                    <Button
                        onClick={addNewListHandler}
                        value={value.Save}
                        class={btn_class.Save}
                    />
                </div>}
                <hr />
                <ul style={{ listStyleType: "number" }}>{listItems}</ul>
            </div>
        </div>
    )
}
