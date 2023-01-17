import { useState } from 'react';
import './style.css';

function Calculator() {

    const [result, setResult] = useState("");

    const handleShow = (e) => {
        setResult(result.concat(e.target.value))
    };

    const handleClear = () => {
        setResult("")
    };

    const handleBack = () => {
        setResult(result.slice(0, -1))
    };

    const handleCalculate = () => {
        try {
            let finalResult = eval(result).toString()
            setResult(finalResult.substr(0, 5))
        }
        catch (error) {
            setResult("Error")
        }
    };

    return (
        <main className='Calculator-Container'>
            <div className='Calculator'>

                <input
                    className='Calculator-Result'
                    type="text"
                    defaultValue={result}>

                </input>

                <div className='Calculator-Keypad'>

                    <button className='Special-Button Operator' onClick={handleClear}>AC</button>
                    <button className='Regular-Button Operator' onClick={handleBack}>C</button>
                    <button className='Regular-Button Operator' value="/" onClick={handleShow}>/</button>
                    <button className='Regular-Button Number' value="7" onClick={handleShow}>7</button>
                    <button className='Regular-Button Number' value="8" onClick={handleShow}>8</button>
                    <button className='Regular-Button Number' value="9" onClick={handleShow}>9</button>
                    <button className='Regular-Button Operator' value="*" onClick={handleShow}>x</button>
                    <button className='Regular-Button Number' value="4" onClick={handleShow}>4</button>
                    <button className='Regular-Button Number' value="5" onClick={handleShow}>5</button>
                    <button className='Regular-Button Number' value="6" onClick={handleShow}>6</button>
                    <button className='Regular-Button Operator' value="-" onClick={handleShow}>-</button>
                    <button className='Regular-Button Number' value="1" onClick={handleShow}>1</button>
                    <button className='Regular-Button Number' value="2" onClick={handleShow}>2</button>
                    <button className='Regular-Button Number' value="3" onClick={handleShow}>3</button>
                    <button className='Regular-Button Operator' value="+" onClick={handleShow}>+</button>
                    <button className='Regular-Button Number' value="0" onClick={handleShow}>0</button>
                    <button className='Regular-Button Number' value="." onClick={handleShow}>,</button>
                    <button className='Special-Button Operator' onClick={handleCalculate}>=</button>
                </div>

            </div>
        </main>
    )
}

export default Calculator