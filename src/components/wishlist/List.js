import React, { useContext } from 'react';
import { StoreContext }  from '../../context/StoreContext';



const List = ({ list }) => {

    const { removeList, findItem } = useContext(StoreContext);


    return (
        <li className = "list">
            <p className="title">{list.title}</p>
            <div>
                <button className="btn remove-btn"
                        onClick = {() => removeList(list.id)}>
                    <i className="fa fa-trash"></i>
                </button>
                {/* <button className="btn btn-edit"
                        onClick = {() => findItem(list.id)}>
                    <i className="fa fa-pencil"></i>
                </button> */}
            </div>
        </li>
    )
}

export default List;