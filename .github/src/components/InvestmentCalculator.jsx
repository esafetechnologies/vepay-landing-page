import React, { useState } from "react";
import "./InvestmentCalculator.css";

const InvestmentCalculator = () => {
    // State for sliders
    const [initialInvestment, setInitialInvestment] = useState(500000);
    const [monthlyInvestment, setMonthlyInvestment] = useState(50000);
    const [investmentTerm, setInvestmentTerm] = useState(12);

    // Calculate Total Invested
    const totalInvested = initialInvestment + monthlyInvestment * investmentTerm;

    // Calculate Total Earned (Assuming a simple ROI of 10% per year)
    const annualROI = 0.10;
    const totalEarned = totalInvested * (1 + annualROI * (investmentTerm / 12));

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
                            min="10000"
                            max="100000000"
                            step="10000"
                            value={initialInvestment}
                            onChange={(e) => setInitialInvestment(Number(e.target.value))}
                        />
                    </div>

                    <div className="slider-container">
                        <div className="slider-label fade-in">
                            <p className="fade-in">Monthly Investment</p>
                            <div className="monthly-investment-value fade-in">${monthlyInvestment.toLocaleString()}</div>
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="100000000"
                            step="10000"
                            value={monthlyInvestment}
                            onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                        />
                    </div>

                    <div className="slider-container">
                        <div className="slider-label">
                            <p className="fade-in">Investment Term</p>
                            <div className="investment-term-value fade-in">${investmentTerm} Months</div>
                        </div>
                        <input
                            type="range"
                            min="1"
                            max="40"
                            step="1"
                            value={investmentTerm}
                            onChange={(e) => setInvestmentTerm(Number(e.target.value))}
                        />
                    </div>
                </div>

                {/* Second Card - Investment Summary */}
                <div className="invest-calculator-card summary-card fade-in-up">
                    <h3 className="invest-calculator-subheading fade-in">Investment Summary</h3>
                    <p className="fade-in">Total Invested: <strong> ${totalInvested.toLocaleString()}</strong></p>
                    <p className="fade-in">Total Earned:<strong> ${totalEarned.toLocaleString()}</strong></p>
                </div>
            </div>
        </section>
    );
};

export default InvestmentCalculator;
