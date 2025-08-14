import { useState } from "react";
import backgroundImage from "../assets/vepay-vecard-bg.png"; // Background image
import "./CalculateFunding.css";

const CalculateFunding = () => {
    const [monthlyIncome, setMonthlyIncome] = useState("");
    const [totalRevenue, setTotalRevenue] = useState("");

    // Funding Calculation (Example Formula: 4x Monthly Income)
    const eligibleFunding = monthlyIncome ? (monthlyIncome * 4).toLocaleString() : "0";

    return (
        <section
            className="calculate-funding-section"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="calculate-funding-container">
                <div className="calculate-funding-content">
                    <h2>Calculate your Funding</h2>
                    <p>
                        At VePay, we’ve made it fast and effortless to get funded.
                        In just three easy steps, connect your eCommerce business
                        and access the working capital you need instantly.
                    </p>
                </div>

                {/* Funding Calculator */}
                <div className="calculate-funding-calculator">
                    <div className="input-group">
                        <div className="input-box">
                            <input
                                type="number"
                                value={monthlyIncome}
                                onChange={(e) => setMonthlyIncome(e.target.value)}
                                placeholder="Average Monthly Income?"
                            />
                            <span>$</span>
                        </div>
                    </div>

                   

                    {/* Output */}
                    <div className="output-box">
                        <p>Total Eligible Funding Amount</p>
                        <h2>${eligibleFunding}</h2>
                    </div>

                    {/* Footer Text */}
                    <p className="calculator-footer">
                        If your average monthly revenue for the last 12 months is $10,000, you could unlock up to $40,000 today.
                    </p>
                    <p className="calculator-note">
                        *This is an estimate. Actual funding amounts may vary based on various factors.
                    </p>
                    
                </div>
            </div>
        </section>
    );
};

export default CalculateFunding;
