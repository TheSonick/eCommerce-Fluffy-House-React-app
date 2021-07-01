import Price from './Price'
import {Link} from 'react-router-dom'
import BeastInfo from './BeastInfo'
import ToCartBtn from './ToCartBtn'


export default function Child({beast}){
    
    const status = beast.isKitten?.status === 'sold' || beast.isKitten?.status === 'reserved' 
                    ? beast.isKitten?.status
                    : Object.keys(beast.isKitten?.status).[0]
                                  
    return(<div className="child">
                <div className="child__card card">
                    <Link className="child__img beast-img" to={'/' + beast.id}>
                        <img src={require('../images/beasts/' + beast.name + '_' + beast.id + '/1.jpg').default} 
                             alt={beast.name + beast.type} />          
                        <div className="beast-img__status">
                            <div className={'beast-img__status-' + status}>
                                {status}
                            </div>
                        </div>
                    </Link>
                    <div className="card__price">
                        {status === 'avaliable' 
                                  ?  <>
                                        <Price beast={beast}/>
                                        <ToCartBtn beast={beast}/>
                                      </>
                                  : <></>}
                    </div>
                    <div className="card__info beast-info">
                        <Link to={'/' + beast.id}>
                            <BeastInfo beast={beast} />
                        </Link>
                        <div className="beast-info__gender">
                            <i className={'fas fa-' + beast.gender} aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>)
}