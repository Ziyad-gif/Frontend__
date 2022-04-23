import {useEffect,useState} from "react";
function Counter(){

  const [angka ,setAngka] = useState(0)

  function addAngka(){
    
    console.log(angka);
    setAngka(angka +1);
  }
  function updateDOM(){
    console.log("lifestyle Dimount");
    document.title = `hasil ${angka}`;

  }
  useEffect(function(updateDOM){
   
  },[angka]);
  console.log("lifestyle dirender");
  

  return(
    <div>
      <p>hasil :${angka}</p>
      <button onClick={addAngka}>Add</button>
    </div>
  )
}
export default Counter;