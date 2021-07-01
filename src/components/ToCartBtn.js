export default function ToCartBtn({beast}){
    function addToCart(beast, event){
        localStorage.setItem(beast.id, JSON.stringify(beast))
        const btn = event.target
        btn.classList.add('added')
        btn.innerHTML = `<i class="fas fa-toolbox" aria-hidden="true"></i>`
    }
    
    if (Object.keys(localStorage).includes(beast.id)){
        return( 
            <div className="card__to-cart to-cart added" data-id={beast.id}>
                <i className="fas fa-toolbox" aria-hidden="true"></i>
            </div>
        )
    } else {
        return(
            <div className="card__to-cart to-cart" data-id={beast.id} onClick={event => addToCart(beast, event)}>
                +
            </div>
        )
    }
    return(
        <></>
    )  
}