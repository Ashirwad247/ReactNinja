import { useState } from 'react';

const UseStateObject = () => {
    
  const people={
    name:'peter',
      age:24, hobby:'readbooks'
    
  }
  const [person, setPerson] = useState(people)
  const displayForm =()=>{
  //  setPerson({name:'john', age:28, hobby:'scream'});
  setPerson({...person, name:'susan'})
  }
  return (
    <>
      <h1>{person.name}</h1>
      <h1>{person.age}</h1>
      <h1>{person.hobby}</h1>
      <button className='btn' onClick={displayForm}>Show John</button>
    </>
  )
};

export default UseStateObject;
