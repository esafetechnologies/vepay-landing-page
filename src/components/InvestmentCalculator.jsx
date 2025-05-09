import React, { useState } from "react";
import "./InvestmentCalculator.css";

const InvestmentCalculator = () => {
    // State for sliders and inputs
    const [initialInvestment, setInitialInvestment] = useState(50000);
    const [monthlyInvestment, setMonthlyInvestment] = useState(50000); // Optional if you want to include monthly investments
    const [investmentTerm, setInvestmentTerm] = useState(12); // Default term in months

    // ROI values (replace these with actual logic or data)
    const roiValues = {
        50000: [8.63, 14], // Example ROI for 50K, replace with actual ranges
        100000: [8.5, 13.5], // Example ROI for 100K
        // Add other ranges or logic as needed
    };

    // Calculate Total Invested
    const totalInvested = initialInvestment + monthlyInvestment * investmentTerm;

    // Calculate Expected Return based on the average ROI and term
    const avgROI = (roiValues[initialInvestment] || [8.63, 14]).reduce((a, b) => a + b) / 2;
    const totalEarned = initialInvestment * (avgROI / 100) * (investmentTerm / 12);

    return (
        <section className="invest-calculator-container">
            <div className="invest-calculator-header">
                <h2 className="invest-calculator-title fade-in-up">Investment Calculator</h2>
                <p className="invest-calculator-description fade-in-up">
                    At VePay, we’ve made it fast and effortless to get funded. In just three easy steps, connect your eCommerce business and access the working capital you need – instantly.
                </p>
            </div>

            <div className="invest-calculator-cards">
                {/* First Card - Sliders */}
                <div className="invest-calculator-card fade-in-up">
                    <div className="slider-container">
                        <div className="slider-label fade-in">
                            <p className="fade-in">Initial Investment</p>
                            <div className="initial-investment-value fade-in">${initialInvestment.toLocaleString()}</div>
                        </div>
                        <input
                            type="range"
                            min="50000"
                            max="1000000"
                            step="50000"  // Step size of 50K
                            value={initialInvestment}
                            onChange={(e) => setInitialInvestment(Math.min(Math.max(e.target.value, 50000), 1000000))}
                            list="investment-values"
                        />
                        <datalist id="investment-values">
                            <option value="50000" />
                            <option value="100000" />
                            <option value="150000" />
                            <option value="200000" />
                            <option value="250000" />
                            <option value="300000" />
                            <option value="350000" />
                            <option value="400000" />
                            <option value="450000" />
                            <option value="500000" />
                            <option value="1000000" />
                        </datalist>
                    </div>

                    <div className="slider-container">
                        <div className="slider-label">
                            <p className="fade-in">Investment Term</p>
                            <div className="investment-term-value fade-in">{investmentTerm} Months</div>
                        </div>
                        <input
                            type="range"
                            min="6"
                            max="36"
                            step="6"  // Only allow multiples of 3 (3, 6, 9, 12, etc.)
                            value={investmentTerm}
                            onChange={(e) => setInvestmentTerm(Number(e.target.value))}
                            list="investment-terms"
                        />
                        <datalist id="investment-terms">
                           
                            <option value="6" />
                           
                            <option value="12" />
                          
                            <option value="18" />
                          
                            <option value="24" />
                          
                            <option value="30" />
                         
                            <option value="36" />
                        </datalist>
                    </div>
                </div>

                {/* Second Card - Investment Summary */}
                <div className="invest-calculator-card summary-card fade-in-up">
                    <h3 className="invest-calculator-subheading fade-in">Investment Summary</h3>
                    <p className="fade-in">Total Invested: <strong> ${totalInvested.toLocaleString()}</strong></p>
                    <p className="fade-in">Total Earned: <strong> ${totalEarned.toLocaleString()}</strong></p>
                </div>
            </div>
        </section>
    );
};

export default InvestmentCalculator;
