import React, {useState} from "react";

const AddItems = ({add}) => {
  const [myInput, setMyInput] = useState("");

  return (
    <div>
      <input type="text" onChange={(e) => setMyInput(e.target.value)} />
      <button onClick={()=>add(myInput)} >ADD</button>
    </div>
  );
};

export default AddItems;
