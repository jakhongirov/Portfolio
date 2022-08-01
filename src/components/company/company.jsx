import { Link } from 'react-router-dom'
import content from '../../localization/content'


function Company({ lang }) {
    return (
        <>
            <section className="company" id="company">
                <div className="container">
                    <h1 className="company__heading">
                        {content[lang].company.heading}
                    </h1>
                    <p className="company__title">
                        {content[lang].company.title}
                    </p>
                    <div className="company__btn_box">
                        <button className="port_btn">
                            <Link to={'#portfolio'} className='port_link' >
                                {content[lang].company.portfolio}
                            </Link>
                        </button>
                        <button className='phone_btn'>
                            <a href="tel:+998958883537">
                                {content[lang].company.call}
                            </a>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Company