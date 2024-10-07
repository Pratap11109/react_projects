import {useState} from "react";
export function Name() {
    return (
        <h1>Pratap</h1>
    )
}

export function Surname(){
    return(
        <h1>Thakur</h1>
    )
}

export function Counter(){
    let [count, setCount] = useState(1);

    const addCount = ()=>{
        console.log(count);
        if(count < 20 ){
            count = setCount(count+1)
        }
    }

    const removeCount = ()=>{
        console.log(count);
        if(count > 0 ){
            count = setCount(count -1);
        }
    }

    return (
        <div>
            <h1>
                Count is {count}
            </h1>
            <button onClick={addCount}>Add 1 to {count}</button>
            <button onClick={removeCount}>Remove 1 from {count}</button>
        </div>
    )
}

export default {Name, Surname, Counter}