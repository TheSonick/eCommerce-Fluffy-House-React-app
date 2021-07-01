import React from 'react'
import {Link} from 'react-router-dom'
import BeastInfo from './BeastInfo'


export default function Parent({ beast }){
    return(<div className="preview-block__item preview">
                <div className="preview__card">
                    <div className="preview__info beast-info">
                        <div className="beast-info__gender">
                            <i className={'fas fa-' + beast.gender} aria-hidden="true"></i>
                        </div>
                        <Link to={'/' + beast.id}>
                            <BeastInfo beast={beast} />
                        </Link>
                    </div>
                    <Link className="preview__img beast-img" to={'/' + beast.id}>
                        <img src={require('../images/beasts/' + beast.name + '_' + beast.id + '/1.jpg').default}
                             alt={beast.name + beast.type} />
                    </Link>
                </div>
            </div>
          )
}