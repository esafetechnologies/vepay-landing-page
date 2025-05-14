import React, { useState } from "react";
import "./InvestmentCalculator.css";

const InvestmentCalculator = () => {
    const [initialInvestment, setInitialInvestment] = useState(50000);
    const [investmentTerm, setInvestmentTerm] = useState(12); // in months

    // ROI Map [term][investment] -> avg ROI
    const roiMap = {
        6: 10.14,
        12: 11.32,
        18: 12.64,
        24: 13.38,
        30: 14.05,
        36: 14.71,
    };

    // Calculate earnings based on ROI and term
    const avgROI = roiMap[investmentTerm] || 10; // Fallback ROI if term doesn't match
    const totalEarned = (initialInvestment * (avgROI / 100));
    const totalInvested = initialInvestment;

    return (
        <section className="invest-calculator-container">
            <div className="invest-calculator-header">
                <h2 className="invest-calculator-title fade-in-up">Investment Calculator</h2>
                <p className="invest-calculator-description fade-in-up">
                    At VePay, we’ve made it fast and effortless to get funded. In just three easy steps, connect your eCommerce business and access the working capital you need – instantly.
                </p>
            </div>

            <div className="invest-calculator-cards">
                {/* Input Card */}
                <div className="invest-calculator-card fade-in-up">
                    {/* Investment Amount */}
                    <div className="slider-container">
                        <div className="slider-label fade-in">
                            <p>Initial Investment</p>
                            <div className="initial-investment-value">${initialInvestment.toLocaleString()}</div>
                        </div>
                        <input
                            type="range"
                            min="50000"
                            max="1000000"
                            step="50000"
                            value={initialInvestment}
                            onChange={(e) => setInitialInvestment(Number(e.target.value))}
                            list="investment-values"
                        />
                        <datalist id="investment-values">
                            {[...Array(20)].map((_, i) => (
                                <option key={i} value={(i + 1) * 50000} />
                            ))}
                        </datalist>
                    </div>

                    {/* Investment Term */}
                    <div className="slider-container">
                        <div className="slider-label fade-in">
                            <p>Investment Term</p>
                            <div className="investment-term-value">{investmentTerm} Months</div>
                        </div>
                        <input
                            type="range"
                            min="6"
                            max="36"
                            step="6"
                            value={investmentTerm}
                            onChange={(e) => setInvestmentTerm(Number(e.target.value))}
                            list="investment-terms"
                        />
                        <datalist id="investment-terms">
                            {[6, 12, 18, 24, 36].map((term) => (
                                <option key={term} value={term} />
                            ))}
                        </datalist>
                    </div>
                </div>

                {/* Summary Card */}
                <div className="invest-calculator-card summary-card fade-in-up">
                    <h3 className="invest-calculator-subheading">Investment Summary</h3>
                    <p>Total Invested: <strong>${totalInvested.toLocaleString()}</strong></p>
                    <p>Expected Return: <span className="highlight-return">${totalEarned.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span></p>
                    <p>Term: <strong>{investmentTerm} Months</strong></p>
                    <p>Estimated ROI: <strong>{avgROI}%</strong></p>
                </div>
            </div>
        </section>
    );
};

export default InvestmentCalculator;
