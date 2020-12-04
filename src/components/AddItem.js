import React, {useState} from 'react'
import {v1 as uuid} from 'uuid'
import {useDispatch} from 'react-redux'

function AddItem() {
    const [inputVal, setInputVal] = useState('')
    const dispatch = useDispatch();

    const handleChange = e => {
        e.persist();
        setInputVal(e.target.value)
    }
    
    const handleSubmit = () => {
            dispatch({
            type: 'ADD_ITEM',
            payload: {
                name: inputVal,
                id: uuid()
            }
        })
        setInputVal('')
    }
    

    return (
        <div className='addItem'>
            <input value={inputVal} type={'text'} placeholder={'type product here...'} onChange={e => handleChange(e)}/>
            <button className='addBtn' onClick={handleSubmit}>Add Product</button>
        </div>
    )
}

export default AddItem
