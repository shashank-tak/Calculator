import React, { useState } from 'react';

const Calculator = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    const handleButtonClick = (value) => {
        setInput((prevInput) => prevInput + value);
    };

    const handleClear = () => {
        setInput("");
        setResult("");
    };

    const handleCalculate = () => {
        try {
            if (input.trim() === "") {
                setResult("Error");
            } else {
                const evalResult = eval(input); // Using eval to evaluate the expression
                setResult(evalResult === Infinity ? "Infinity" : evalResult);
            }
        } catch (error) {
            setResult("Error");
        }
    };

    return (
        <div style={{ width: '60%', margin: '0 auto', textAlign: 'center', alignItems:'center'}}>
            <h1>React Calculator</h1>
            <input 
                type="text" 
                value={input} 
                readOnly 
                placeholder="0"
                style={{ width: '50%', height: '30px', fontSize: '20px', textAlign: 'left' }}
            />
            <div style={{ margin: '10px 0', fontSize: '20px' }}>{result}</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 100px)', gridTemplateRows: 'repeat(4, 100px)' , gap: '10px' }}>
                {[7, 8, 9, '+'].map((val) => (
                    <button onClick={() => handleButtonClick(val.toString())} style={{border: '2px solid black'}}>{val}</button>
                ))}
                {[4, 5, 6, '-'].map((val) => (
                    <button onClick={() => handleButtonClick(val.toString())} style={{border: '2px solid black'}}>{val}</button>
                ))}
                {[1, 2, 3, '*'].map((val) => (
                    <button onClick={() => handleButtonClick(val.toString())} style={{border: '2px solid black'}}>{val}</button>
                ))}
                {['C', 0, '=', '/'].map((val) => (
                    <button 
                        onClick={val === '=' ? handleCalculate : val === 'C' ? handleClear : () => handleButtonClick(val.toString())}
                        style={{border: '2px solid black'}}>
                        {val}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Calculator;
