export default function Price({beast}){
        return(
            <>
                <div className="card__pet pet-price">
                    {'$' + beast.isKitten.status.avaliable.petPrice}
                </div>
                <span className="card__title-pet">- Pet</span>
                <div className="card__breeding breeding-price">
                    {'$' + beast.isKitten.status.avaliable.breedPrice}
                </div>
                <span className="card__title-breeding">- Breeding</span>
            </>
        )
    
}