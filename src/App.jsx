import { useState } from "react"
import Header from "./components/header"
import UserInput from "./components/UserInput"
import Result from "./components/Result";


function App() {
  const [ userInput, setUserInput ] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  
  });
  
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevState) => {
        return {
            ...prevState,
            [inputIdentifier]: +newValue,
        }
    })
  }
  return (
    <>
    <Header />
    <UserInput onChange={handleChange} userInput={userInput} />
    <Result userInput={userInput} />
    </>
  )
}

export default App
