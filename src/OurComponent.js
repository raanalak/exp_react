import {useState} from 'react'
function OurComponent(props) {
  const [strawberryCount, setStrawberryCount] = useState(0)
  function handleClick(){
    setStrawberryCount(prev => prev +1 )
  }
  return (
    <div>
      <h3> Our cool Component</h3>
      <p>There are {strawberryCount}  strawberries, mood is {props.mood} </p>
      <button onClick={handleClick}>strawberry count </button>
    </div>
  );
}

export default OurComponent;
