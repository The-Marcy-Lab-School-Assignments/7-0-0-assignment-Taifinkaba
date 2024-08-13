import {useState} from 'react'

function LanguageSelector({onLanguageChange}){
    return(
        <section>
            <button onClick={()=>onLanguageChange("Good Morning")}>English</button>
            <button onClick={()=>onLanguageChange("早上好")}>Chinese</button>
            <button onClick={()=>onLanguageChange("좋은 아침이에요")}>Korean</button>
            <button onClick={()=>onLanguageChange("buen día")}>Spanish</button>
            <button onClick={()=>onLanguageChange("Guten Morgen")}>German</button>
        </section>
    )
}

export default LanguageSelector