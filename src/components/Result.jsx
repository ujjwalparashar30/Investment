import {calculateInvestmentResults, formatter } from "./../util/investment"

export default function Result({userInput}){
    const resultData = calculateInvestmentResults(userInput);
    const intialInvestment = resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment;
    console.log(resultData);
    return (
        <table id="result">
            <thead>
                <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest </th>
                <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultData.map(data =>{
                    const totalInterest = data.valueEndOfYear - data.annualInvestment*data.year - intialInvestment;
                    return (
                        <tr key={data.year}>
                    <td>{data.year}</td>
                    <td>{formatter.format(data.valueEndOfYear)}</td>
                    <td>{formatter.format(data.interest)}</td>
                    <td>{data.annualInvestment}</td>
                    <td>{formatter.format(totalInterest)}</td>
                </tr>
                    )
                }
                
)}
            </tbody>
        </table>
    )
}