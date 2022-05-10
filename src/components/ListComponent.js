import React, { useState, useEffect } from 'react'
import Button from './Button'


export default function ListComponent(props) {
    // usestate
    // editmode jab true hojae to input ki value listitem banjae  
    const { editMode, onClick, text } = props
    const [InputData, setInputData] = useState("")
    const texted = InputData
    useEffect(() => {
        setInputData(props.listItem);

    }, [])

    function saveInputData() {

        props.saveData(InputData,props.id)
    }
    function DeleteListData() {

    }
    return (
        <div>

            <p className='d-flex align-items-center justify-content-between'>
                {!editMode && <div>{props.listItem}</div>}
                {editMode && <input value={texted} onChange={(e) => { setInputData(e.target.value) }} className='form-control w-25' type={"text"} />}
                <div className='d-flex gap-2'>
                    {editMode ?
                        <Button value={props.value.Cancel} onClick={onClick} class={props.class.Cancel} />
                        :
                        <Button value={props.value.Edit} onClick={onClick} class={props.class.Edit} />}

                    {editMode ?
                        <Button value={props.value.Save} onClick={saveInputData} class={props.class.Save} />
                        :
                        <Button value={props.value.Delete} onClick={onClick} class={props.class.Delete} />}
                </div>
            </p>
        </div>
    )
}
