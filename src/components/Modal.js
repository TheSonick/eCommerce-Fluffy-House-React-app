const $ = {}
window.$ = $

function createModal(options){
            const modal = document.createElement('form')
            modal.classList.add('callback-form')
            modal.insertAdjacentHTML('afterbegin', `
                <div class="bg_form" data-close="true"></div>
                <span class="callback-form__title" action="/" method="post">
                    Заказать обратьный звонок!
                </span>

                <input class="callback-form__input" type="text" name="callback_name" id="callback-form__name" required placeholder="Имя" maxlength="50"/>

                <input class="callback-form__input" type="tel" name="callback_phone" id="callback-form__phone" required placeholder="Телефон" maxlength="17"/>

                <input class="callback-form__input" type="email" name="callback_email" id="callback-form__email" placeholder="Почта" maxlength="50"/>

                <textarea class="callback-form__input" type="text" name="callback_comment" id="callback-form__comment" placeholder="Комментарий / Вопрос" maxlength="200"></textarea>

                <input class="callback-form__btn" type="reset" value="Очистить"/>

                <input class="callback-form__btn" type="submit" value="Отправить"/>

                <div class="callback-form__close" data-close="true"><i class="fas fa-times" data-close="true"></i></div>
            `)

            document.body.appendChild(modal)
            return modal
        }


$.modal = function(options){
    const $modal = createModal(options)
    const modal = {
        open(){
            $modal.classList.add('active')
        },
        close(){
            $modal.classList.remove('active')
        }
    }
    
    $modal.addEventListener('click', event => {
        if(event.target.dataset.close){
            modal.close()
        }
    })
                            
    return modal
}

export default $