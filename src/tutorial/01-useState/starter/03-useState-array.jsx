import { useState } from 'react';
import  { data, people } from '../../../data.js';
  // console.log(data)

const UseStateArray = () => {
  const [people, changePeople] = useState(data);

  const removeItem =(id)=>{
    console.log(id)
    const newPeople = people.filter((person)=>person.id!==id)
    changePeople(newPeople)
  }
  const clearAllItem =()=>{
    changePeople([]);
  };

  return(
    <div>
      {people.map((person)=>{
        const {id, name} = person
        // console.log(person)
        return(
        <div key={id}>
          <h4>{name}</h4>
          <button type='button' onClick={()=>removeItem(id)}>
            remove</button>
        </div>
        )
    })}
    <button type='button' style={{marginTop:'2rem'}}
     className='btn' onClick={clearAllItem}>clear Items</button>
    </div>
  );
};

export default UseStateArray;
