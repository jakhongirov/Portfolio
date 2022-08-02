import content from '../../localization/content'

function Contacts({ lang }) {
    return (
        <section className="contact">
            <div className="container">
                <p className="contact__title">Sizda g’oya bormi?</p>
                <h2 className="contact__heading">BIZGA BOG'LANING G'OYALARNI AMALGA OSHIRING!</h2>
                <form>
                    <div className='contacts__input-box'>
                        <label >
                            <p className='contacts__input-name__label'>Ism</p>
                            <input className='contacts__input-name' type="text" name='name' placeholder='Ismingizni kiriting' required />
                        </label>
                        <label >
                            <p className='contacts__input-phone__label'>Telefon <span className=''>(Ko’rsatilishi shart)</span></p>
                            <input className='contacts__input-phone' type="phone" name='phone' placeholder='+998958883537' required />
                        </label>
                    </div>
                    <label className='contacts__input-message__label-box'>
                        <p className='contacts__input-message__label'>Xabaringizni qoldiring</p>
                        <textarea className='contacts__input-message' name="message" cols="85" rows="5" placeholder='Xabar yozish...'></textarea>
                    </label>

                    <button className='contacts__btn'>Yuborish</button>
                </form>
            </div>
        </section>
    )
}

export default Contacts