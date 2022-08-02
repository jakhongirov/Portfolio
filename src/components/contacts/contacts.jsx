import content from '../../localization/content'

function Contacts({ lang }) {
    return (
        <section className="contact">
            <div className="container">
                <p className="contact__title">{content[lang].contacts.title}</p>
                <h2 className="contact__heading">{content[lang].contacts.heading}</h2>
                <form>
                    <div className='contacts__input-box'>
                        <label >
                            <span className=''></span>
                            <input className='' type="text" name='name'  placeholder='' required/>
                        </label>
                        <label >
                            <span className=''></span>
                            <input className='' type="phone" name='phone'  placeholder='' required/>
                        </label>
                    </div>
                    <label>
                        <span className=''></span>
                        <textarea className='' name="message" cols="30" rows="10"></textarea>
                    </label>

                    <button className=''></button>
                </form>
            </div>
        </section>
    )
}

export default Contacts