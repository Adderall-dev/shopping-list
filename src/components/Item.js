import React, {useState} from 'react'
import {useDispatch} from 'react-redux'

function Item({id, name}) {
    const [isChecked, setIsChecked] = useState(false);
    const dispatch = useDispatch();
    
    const handleDelete = () => {
        dispatch({
            type: 'DELETE_ITEM',
            payload: {
                id: id
            }
        })   
    }

    return (
        <div className='Item' style={{backgroundColor: `${isChecked ? '#9A8C98' : '#F2E9E4'}`}}>
            <li key={id} >
                <input type={'checkbox'} value={isChecked} onChange={() => setIsChecked(!isChecked)} />
                {name}
            </li>
            <button className='btn' onClick={handleDelete}>x</button>
        </div>
        
    )
    
}

export default Item
