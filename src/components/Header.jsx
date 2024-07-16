import logo from "../assets/investment-calculator-logo.png"

export default function Header(){
    return(
        <header id="header">
            <img src={logo} alt="Investemnt Image" />
            <h1>Investent Calculator</h1>
        </header>
    )
}