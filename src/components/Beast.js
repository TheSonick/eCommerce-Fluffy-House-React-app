import Price from './Price'
import BeastInfo from './BeastInfo'
import ToCartBtn from './ToCartBtn'


export default function Beast({beast}){
                                  
//    function loadImages(i){
//        i = i || 2
//        var img = new Image()
//        img.onload = function(){
//            document.getElementById('fotorama').appendChild(img)
//            loadImages(++i)
//        }
//        img.src = require('../images/beasts/' + beast.name + '_' + beast.id + '/' + i +'.jpg').default
//    }
    
    return(<div className="child_item_bp">
                <div className="card_back_bp">
                    <div className="card_beast_img_bp">
                        <div className="child_status_bp">
                        </div>
                        <div id="fotorama" className="fotorama" data-width="100%" data-allowfullscreen="true" data-ratio="192/108" data-thumbheight="36" data-fit="cover" data-loop="true" data-keyboard="true">
                            <img className="beast__img" src={require('../images/beasts/' + beast.name + '_' + beast.id + '/1.jpg').default} alt={beast.name + beast.type}/>
                        </div>
                    </div>
                        
                    <div className="beast_info_container_bp">
                        <div className="beast-info__gender beast_gender_bp">
                            <i className="fas fa-mars" aria-hidden="true"></i>
                        </div>
                        <div className="beast_info_bp">
                            <BeastInfo beast={beast} />
                        </div>
                        {Object.keys(beast).includes('isKitten') && Object.keys(beast.isKitten.status).[0] === 'avaliable'
                         ?
                            <>
                                <div className="card_bottom_bp">
                                    <div className="price-container">
                                        <Price beast={beast}/>
                                    </div>
                                    <ToCartBtn beast={beast}/>
                                </div>
                            </>
                        : <></>}
                    </div>
                </div>
            </div>
          )
}