import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function Counter() {
    const [Count, setCount] = useState(0);
    const increse = () => {
        setCount(Count + 1);
    } 
    const decrese = () => {
        setCount(Count - 1);
    }
    return (
        <div className="counter-section container mt-5 w-25 text-center border">
            <h1>This is Counter </h1>
            <h2>Current Counter : {Count}</h2>
            <p>To Increse press <Button onClick={increse} className="p-3 m-2">+</Button></p>
            <p>To Decrese press <Button onClick={decrese} className="p-3 m-2">-</Button>
            </p>

        </div>
    )
}
