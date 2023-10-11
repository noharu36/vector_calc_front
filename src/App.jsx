import { useState } from 'react';


function App() {
    const [state, setState] = useState({
        element: '',
        element2: '',
        element3: '',
        element4: '',
        element5: '',
        element6: ''
    });


    const [vector, setVector] = useState({
        message: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setState({
            ...state,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ a: `${state.element}i${state.element2}j${state.element3}k`, b: `${state.element4}i${state.element5}j${state.element6}k` })
        };

        console.log(requestOptions);
        fetch('http://127.0.0.1:8080/', requestOptions)
            .then(response => response.json())
            .then(jsonObj => {
                const vector = {
                    message: jsonObj.message
                };
                setVector(vector);
                console.log(vector)
            });

            /*
        fetch('http://127.0.0.1:8080/get')
            .then(response => response.json())
            .then(jsonObj => {
                console.log(jsonObj)
                const newState = {
                    ...state,
                    message: jsonObj.message
                };
                setState(newState);
            });
            */
    };

    return (
        <>
            <p>0,1,-1は省略せずに入力してね</p>
            <p>例） -1i + 0j + 1k</p>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        a:
                        <input
                            name="element"
                            type="text"
                            value={state.element}
                            onChange={handleChange}
                        />
                        i
                        <input
                            name="element2"
                            type="text"
                            value={state.element2}
                            onChange={handleChange}
                        />
                        j
                        <input
                            name="element3"
                            type="text"
                            value={state.element3}
                            onChange={handleChange}
                        />
                        k
                    </label>
                    <br />
                    <label>
                        b:
                        <input
                            name="element4"
                            type="text"
                            value={state.element4}
                            onChange={handleChange}
                        />
                        i
                        <input
                            name="element5"
                            type="text"
                            value={state.element5}
                            onChange={handleChange}
                        />
                        j
                        <input
                            name="element6"
                            type="text"
                            value={state.element6}
                            onChange={handleChange}
                        />
                        k
                    </label>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <div>
                <p>{vector.message}</p>
            </div>
        </>
    );
}

export default App;
