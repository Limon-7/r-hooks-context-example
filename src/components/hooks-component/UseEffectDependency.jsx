import React, { useState, useEffect } from "react";

function UseEffectDependency() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const doSomething = () => {
            console.log("someProp");
        };
        const interval = setInterval(() => {
            setCount(count + 1);
        }, 1000);
        doSomething();
        return () => {
            console.log("Remove interval");
            clearInterval(interval);
        };
    }, [count]);
    return (
        <div>
            <h1>{count}</h1>
        </div>
    );
}

export default UseEffectDependency;
