import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import './index.css';

export default function Counter() {
    const [values, setValues] = useState({ Val1: 0, Val2: 0 });
    const [result, setResult] = useState(0);

    const handleInputChange = (event, fieldName) => {
        const newValue = parseInt(event.target.value);
        setValues({ ...values, [fieldName]: newValue });                          
    };

    const add = () => {
        const { Val1, Val2 } = values;
        setResult(Val1 + Val2);
    };

    const sub = () => {
        const { Val1, Val2 } = values;
        setResult(Val1 - Val2);
    };

    const mul = () => {
        const { Val1, Val2 } = values;
        setResult(Val1 * Val2);
    };

    const div = () => {
        const { Val1, Val2 } = values;
        setResult(Val1 / Val2);
    };

    return (
        <div className="counter-section container w-25 mt-5 text-center border">
            <h1>This is Calculator</h1>
            <h2>Current Calculator Value: {result}</h2>
            <p>
                Enter First Value
                <Form.Control className=" flex" type="number" value={values.Val1}
                    onChange={(e) => handleInputChange(e, "Val1")} />
            </p>
            <p>
                Enter Second Value
                <Form.Control className=" flex" type="number" value={values.Val2}
                    onChange={(e) => handleInputChange(e, "Val2")} />
            </p>
            <Button onClick={add} className="p-3 m-2">
                Add
            </Button>
            <Button onClick={sub} className="p-3 m-2">
                Subtract
            </Button>
            <Button onClick={mul} className="p-3 m-2">
                Multiply
            </Button>
            <Button onClick={div} className="p-3 m-2">
                Divide
            </Button>
        </div>
    );
}
