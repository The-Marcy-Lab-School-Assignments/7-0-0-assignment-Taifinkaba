function FontSizeControls({onDecrease, onIncrease}){
    return(
        <section>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </section>
    )
}

export  default FontSizeControls