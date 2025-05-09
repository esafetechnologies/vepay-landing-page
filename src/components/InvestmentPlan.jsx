import "./InvestmentPlan.css";

const InvestmentPlan = ({ heading, description }) => {
    const tableData = [
        { term: "6 Months", investment: "$50,000", roi: "6.76% - 13.51% ", distribution: "Quarterly" },
        { term: "12 Months", investment: "$50,000", roi: "8.63% - 14.00% ", distribution: "Quarterly" },
        { term: "18 Months", investment: "$50,000", roi: "10.26% - 15.02%", distribution: " Quarterly" },
        { term: "24 Months", investment: "$50,000", roi: "11.17% - 15.58% ", distribution: "Quarterly" },
        { term: "36 Months", investment: "$50,000", roi: "12.46% - 16.96%", distribution: " Quarterly" },
    ];
    return (
        <section className="invest-plan-container">
            <div className="invest-plan-header">
                <h2 className="invest-plan-title fade-in-up">Investment Plan</h2>
                <p className="invest-plan-description fade-in-up">
                    At VePay, we’ve made it fast and effortless to get funded. In just three easy steps,
                    connect your eCommerce business and access the working capital you need – instantly.</p>
            </div>
            <div className="invest-plan-cards">
                <div className="invest-plan-card">
                    <div className="invest-plan-table-container">
                        <table className="invest-plan-table">
                            <thead>
                            <tr>
                                <th className="fade-in">Investment Term</th>
                                <th className="fade-in">Minimum Investment</th>
                                <th className="fade-in">Average ROI (Annual)</th>
                                <th className="fade-in">Profit Distribution</th>
                            </tr>
                            </thead>
                            <tbody>
                            {tableData.map((row, index) => (
                                <tr key={index}>
                                    <td className="fade-in">{row.term}</td>
                                    <td className="fade-in">{row.investment}</td>
                                    <td className="fade-in">{row.roi}</td>
                                    <td className="fade-in">{row.distribution}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InvestmentPlan;
