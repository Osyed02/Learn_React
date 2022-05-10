import React, { useState, useEffect } from 'react'
import Button from './Button'


export default function ListComponent(props) {
    // usestate
    // editmode jab true hojae to input ki value list item banjae  
    const { editMode, onClick } = props
    const [InputData, setInputData] = useState("")
    useEffect(() => {
        setInputData(props.listItem);

    }, [])

    function saveInputData() {

        try {
            props.saveData(InputData, props.id)
            setInputData("")
        } catch (error) {
            console.log(error);
        }
    }
    function DeleteListData() {
        props.deleteData(props.id);
    }
    function cancelEdit() {
        props.cancelEditing(props.id);
    }
    return (
        <div>

            <p className='d-flex align-items-center justify-content-between'>
                {!editMode && <div>{props.listItem}</div>}
                {editMode && <input value={InputData} onChange={(e) => { setInputData(e.target.value) }} className='form-control w-25' type={"text"} />}
                <div className='d-flex gap-2'>
                    {editMode ?
                        <Button value={props.value.Cancel} onClick={cancelEdit} class={props.class.Cancel} />
                        :
                        <Button value={props.value.Edit} onClick={onClick} class={props.class.Edit} />}

                    {editMode ?
                        <Button value={props.value.Save} onClick={saveInputData} class={props.class.Save} />
                        :
                        <Button value={props.value.Delete} onClick={DeleteListData} class={props.class.Delete} />}
                </div>
            </p>
        </div>
    )
}
