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
        <div className="counter-section container text-center">
            <h1>This is Counter</h1>
            <h2>Current Counter : {Count}</h2>
            <p>To Increse press '+'</p>
            <p>To Decrese press '-'</p>
            <Button onClick={increse} className="p-3 m-2">+</Button>
            <Button onClick={decrese} className="p-3 m-2">-</Button>
        </div>
    )
}