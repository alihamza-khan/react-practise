import "./Bmi.css"
import { useState } from "react";

function Bmi() {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmi, setBmi] = useState(0);

    function CalculateBmi(e) {
        e.preventDefault();
        const heightInMeters = height / 100;
        const bmiValue = weight / (heightInMeters * heightInMeters);
        setBmi(bmiValue.toFixed(2));
    }

    return (
        <div className="bmi">
            <h1 className="title">BMI Calculator</h1>
            <p>Calculate your Body Mass Index (BMI) to understand your health better. Enter your weight and height to get started.</p>
            <form className="bmi-form" onSubmit={CalculateBmi}>
                <label htmlFor="weight">Weight (kg):</label>
                <input type="number" id="weight" name="weight" required onChange={(e) => setWeight(e.target.value)}/>
                <label htmlFor="height">Height (cm):</label>
                <input type="number" id="height" name="height" required onChange={(e) => setHeight(e.target.value)}/>
                <button type="submit">Calculate BMI</button>
                <h2>BMI: {bmi}</h2>
            </form>

        </div>
    );
}

export default Bmi;