import { useState } from 'react'
import FontSizeControls from "./components/FontSizeControls.jsx"
import GreetingDisplay from "./components/GreetingDisplay.jsx"
import LanguageSelector from "./components/LanguageSelector.jsx"
import './App.css'

function App() {
  //  good morning render
  const [text, setText] = useState("Good Morning");

  // font size
  const [fontSize, setFontSize] = useState("16px");

  // new greeting
  const handleLanguageChange = (newGreeting) => {
    setText(newGreeting);
  };

  // increase font size
  const increaseFontSize = () => {
    setFontSize((preSize) => {
      const newIncreasedSize = parseInt(preSize, 10) +2;
      return `${newIncreasedSize}px`;
    });
  }

  // decrease font size
  const decreaseFontSize = ()  => {
    setFontSize((prevSize) => {
      const newDecreasedSize = Math.max(parseInt(prevSize, 10) - 2,8);
      return `${newDecreasedSize}px`
    });
  }

  return (
    <main>
      <FontSizeControls
        onDecrease={decreaseFontSize}
        onIncrease={increaseFontSize}
      />
      <GreetingDisplay
        text={text}
        fontSize={fontSize}
      />
      <LanguageSelector
        onLanguageChange={handleLanguageChange}
      />

    </main>
  )
}

export default App
