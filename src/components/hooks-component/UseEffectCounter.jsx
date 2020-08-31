import React, { useState, useEffect } from "react";

function UseEffectCounter() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const handleMousePosition = (e) => {
        console.log("Mouse move");
        setX(e.clientX);
        setY(e.clientY);
    };
    useEffect(() => {
        console.log("useEffect called");
        window.addEventListener("mousemove", handleMousePosition);
        return () => {
            console.log("Clean up");
            window.removeEventListener("mousemove", handleMousePosition);
        };
    }, []);
    useEffect(() => {
        console.log("updating document");
        document.title = `you clicked ${count} times`;
    }, [count]);
    return (
        <div className="container">
            <h1>useEffect logically render and cleanup</h1>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={() => setCount((prestate) => prestate + 1)}>
                Click {count} times
            </button>
            <div>
                X: {x} and Y: {y}
            </div>
        </div>
    );
}

export default UseEffectCounter;
