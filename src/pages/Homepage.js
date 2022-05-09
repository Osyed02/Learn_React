import React from 'react'
import ListComponent from '../components/ListComponent'
import Button from '../components/Button'
export default function Homepage() {
    const userName = 'Osyed quershi'
    const age = 14
    const test = 'test'
    const value = {
        Add: "Add",
        Edit: "Edit",
        Delete: "Delete",
    }
    const btn_class = {
        Add: "btn-outline-primary",
        Edit: "btn-outline-success",
        Delete: "btn-outline-danger",
    }

    const list = [
        "lorem impsum lorem impsum 1 ",
        "lorem impsum lorem impsum 2",
        "lorem impsum lorem impsum 3",
        "lorem impsum lorem impsum 4",
        "lorem impsum lorem impsum 5",
    ];

    const listItems = list.map((list) =>
        <li><p>{list}</p></li>
    );

    function testFunc() {
        alert("Alert")
    }




    return (
        <div className='container'>
            <h1 className='text-center mt-4 bg-dark text-white p-4'>To Do List</h1>

            <div className='d-flex justify-content-between bg-light pe-2 py-2'>
                <ListComponent listItem={listItems} />
                <div className='d-flex flex-column gap-2 align-items-end justify-content-between'>
                    <Button
                        testFunc={testFunc}
                        value={value.Add}
                        class={btn_class.Add}
                    />
                    <div className='d-flex gap-2'>
                        <Button
                            value={value.Edit}
                            class={btn_class.Edit}
                        />
                        <Button
                            value={value.Delete}
                            class={btn_class.Delete}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
