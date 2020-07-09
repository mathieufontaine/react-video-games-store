import React, { useContext, useState, useEffect } from 'react';
import { StoreContext }  from '../../context/StoreContext';



const CustomListForm = () => {
    const { addCustomList, removeList, editList, setEditList, editTitle } = useContext(StoreContext);
    const [title, setTitle] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        // if(editList === ''){
        addCustomList(title);
        // } else {
        //     editTitle (title, editList.id);
        // }
        setTitle('');
        // setEditList('');
    };

    // useEffect(() => {
    //     if(editList !== ''){
    //         setTitle(editList.title);
    //     } else {
    //         setTitle('');
    //     }
    // }, [editList]);

    return (
        <form className="form"
              onSubmit={handleSubmit}>
            <input type="text" 
            className="text"
            placeholder="Add List.." 
            value = {title}
            onChange = {(e) => setTitle(e.target.value) }
            required
            />
        <div className="buttons">
            <button className="btn add-btn">
                Add new List
            </button>
            {/* <button className="btn remove-btn"
                    onClick={removeList}>
                Remove
            </button> */}
        </div>
        </form>
    )
}

export default CustomListForm;
