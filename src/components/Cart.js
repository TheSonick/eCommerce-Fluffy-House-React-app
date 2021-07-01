import React from 'react'

export default function Cart(){
    return (<div className="cart">
                <div className="cart__button">
                    <i className="fas fa-toolbox"></i>
                    <div className="cart__title"></div>
                </div>
                <div className="cart-inner">
                    <div className="cart-inner__empty">Выберите котенка
                    и поместите его в корзинку</div>
                    <div className="cart-inner__set">
                        <div className="cart-inner__header">
                            Вы добавили в корзинку этих котят:
                        </div>
                        <div className="cart-inner__container">
                        </div>
                        <div className="cart-inner__total-price">
                            <span>Общая стоимость:</span>
                            <div className="breeding-price summary_price">
                                $0 
                            </div>
                        </div>
                        <button className="cart-inner__order-btn" type="button">Оформить заказ</button>
                    </div>
                    <div className="cart-inner__closebtn"><i className="fas fa-times"></i></div>
                </div>
            </div>
            )
}