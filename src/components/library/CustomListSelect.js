import React, { useContext, useEffect } from "react";
import { StoreContext } from "../../context/StoreContext";

const CustomListSelect = ({
  gamesToAdd,
  setSelectListSection,
  selectListSection
}) => {
  const { customLists, clearSelectedGames, addToCustomList } = useContext(
    StoreContext
  );

  useEffect(() => {
    handleCancel();
  }, [customLists]);

  const handleClick = listId => {
    addToCustomList(gamesToAdd, listId);
  };

  const handleCancel = () => {
    setSelectListSection(false);
    clearSelectedGames();
  };

  return (
    <div className={selectListSection === false ? "hide" : "show"}>
      <h2>Select the list you want to add the games to:</h2>
      <div className="actions-lists">
        {customLists.map(list => (
          <button
            className="btn custom-btn"
            key={list.id}
            onClick={() => handleClick(list.id)}
          >
            {list.title}
          </button>
        ))}
      </div>
      <button className="btn remove-btn" onClick={handleCancel}>
        Cancel
      </button>
    </div>
  );
};

export default CustomListSelect;
