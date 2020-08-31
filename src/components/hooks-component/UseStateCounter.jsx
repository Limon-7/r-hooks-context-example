import React, { useState } from "react";

function UseStateCounter() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState({ firstName: "", lastName: "" });
    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount((prevCount) => prevCount + 1);
        }
    };
    return (
        <div className="container">
            <h1>useState Example</h1>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>
                Increment
            </button>
            <button
                onClick={() => setCount((prevCount) => prevCount - 1)}
                disabled={count === 0 ? "disabled" : ""}
            >
                Decrement
            </button>
            <button onClick={incrementFive}>Increment 5 times</button>

            <h2>useState with object</h2>
            <form>
                <input
                    type="text"
                    value={name.firstName}
                    onChange={(event) =>
                        setName({ ...name, firstName: event.target.value })
                    }
                />

                <input
                    type="text"
                    value={name.lastName}
                    onChange={(event) =>
                        setName({ ...name, lastName: event.target.value })
                    }
                />
                <p>First Name : {name.firstName}</p>
                <p>First Name : {name.lastName}</p>
                <p> {JSON.stringify(name)}</p>
            </form>
        </div>
    );
}

export default UseStateCounter;
