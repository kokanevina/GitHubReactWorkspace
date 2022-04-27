import { useRef } from "react";
/*The useRef is a hook that allows to directly create a reference to the 
DOM element in the functional component.  */
export function UseRef(){
    const focusPoint = useRef(null);
    const myName=useRef(null);
    const onClickHandler = (ev) => {
    focusPoint.current.value =
      "India is my country. All Indians are my brothes and sisters";
      //focusPoint.current.focus();
      console.log(myName.current.value);
  };
  return (
    <>
      <button type="submit" onClick={onClickHandler}>ACTION</button>
      <form>
      <label>
      Click on button to paste the contents in text area
      </label><br/>
      <textarea rows="5" cols="30" ref={focusPoint} />
      <input type="text" ref={myName}></input>
      </form>
    </>
  );
}