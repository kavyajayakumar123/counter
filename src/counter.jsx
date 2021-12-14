import { useState } from "react";

function Counter() {
    const [a, setNum] = useState(10000);

    function inc() {
        setNum(a + 1);
    }
    function dec() {
        setNum(a - 1);
    }
    return (
        <>
            <div className="Startt" >
                <div className="haii">
                    <button className="increment" onClick={inc}>+</button>
                    <h1>{a}</h1>
                    <button className="decrement" onClick={dec}>-</button>
                </div>

            </div>
        </>
    )
}
export default Counter;
