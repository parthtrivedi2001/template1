import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function Counter() {
    const [{ Val1, Val2, Count }, setCount] = useState(0);
    const add = () => {
        setCount(Count = Val1 + Val2);
    }
    const sub = () => {
        setCount(Count = Val1 + Val2);
    }
    const mul = () => {
        setCount(Count = Val1 + Val2);
    }
    const div = () => {
        setCount(Count = Val1 + Val2);
    }
    return (
        <div className="counter-section container text-center">
            <h1>This is Calculator</h1>
            <h2>Current Calculator Value : {Count}</h2>
            <p>Enter First Value
                <input type="number"></input>
            </p>
            <p>Enter Second Value
                <input type="number"></input>
            </p>
            <Button onClick={add} className="p-3 m-2">
                Add
            </Button>
            <Button onClick={sub} className="p-3 m-2">
                Substract
            </Button>
            <Button onClick={mul} className="p-3 m-2">
                Multiply
            </Button>
            <Button onClick={div} className="p-3 m-2">
                Division
            </Button>
        </div>
    )
}