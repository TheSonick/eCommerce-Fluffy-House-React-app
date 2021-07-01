import {Link} from 'react-router-dom'
import BeastInfo from './BeastInfo'


export default function ParentItem({beast}){
                                  
    return(<div className="parents__item">
                <div className="card__substrate">
                    <div className="card__vertical">
                        <Link to={'/' + beast.id} className="card__vertical__beast-img">
                            <img className="beast__img" src={require('../images/beasts/' + beast.name + '_' + beast.id + '/1.jpg').default} alt={beast.name + beast.type}/>
                        </Link>
                        <div className="beast">
                            <div className="beast__gender">
                                <i className={'fas fa-' + beast.gender} aria-hidden="true"></i>
                            </div>
                            <div className="beast__info">
                                <Link to={'/' + beast.id}>
                                    <BeastInfo beast={beast} />
                                </Link>
                            </div>
                        </div>
                        <Link className="parents__detail" to={'/' + beast.id}>
                            Подробнее...
                        </Link>
                    </div>
                </div>
            </div>
        )
}