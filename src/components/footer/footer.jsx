import { Link } from 'react-router-dom'
import content from '../../localization/content'

import Instagram from '../../assets/images/instagram.svg'
import Telegram from '../../assets/images/telegram.svg'
import Facebook from '../../assets/images/facebook.svg'
import Youtube from '../../assets/images/youtube.svg'
import Topbtn from '../../assets/images/top-btn.svg'


function Footer({ lang }) {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer__top desktop">
                        <ul className="footer__top__list">
                            <li className="footer__top__item">
                                <a href="https://instagram.com/" className='footer__top__link'>
                                    <img src={Instagram} alt="instagram icon" width={30} height={30} />
                                </a>
                            </li>
                            <li className="footer__top__item">
                                <a href="https://web.telegram.org/" className='footer__top__link'>
                                    <img src={Telegram} alt="telegram icon" width={30} height={30} />
                                </a>
                            </li>
                            <li className="footer__top__item">
                                <a href="https://www.facebook.com/" className='footer__top__link'>
                                    <img src={Facebook} alt="facebook icon" width={30} height={30} />
                                </a>
                            </li>
                            <li className="footer__top__item">
                                <a href="https://youtube.com/" className='footer__top__link'>
                                    <img src={Youtube} alt="youtube icon" width={30} height={30} />
                                </a>
                            </li>
                            <li className="footer__top__item">
                                <a href="tel:+998991814233" className='footer__top__link'>+99899 181 42 33</a>
                            </li>
                            <li className='footer__top__item'>
                                |
                            </li>
                            <li className="footer__top__item">
                                <a href="tel:+998997393538" className='footer__top__link'>+99899 739 35 38</a>
                            </li>
                        </ul>
                        <button className="footer__top__btn">
                            <Link className='' to={'#header'}>
                                <img src={Topbtn} alt="top button icon" width={53} heigh={53} />
                            </Link>
                        </button>
                    </div>


                    {/* mobile footer top box */}

                    <div className='mobile'>
                        <div className='footer__top'>

                            <ul className="footer__top__list">
                                <li className="footer__top__item">
                                    <a href="https://instagram.com/" className='footer__top__link'>
                                        <img src={Instagram} alt="instagram icon" width={30} height={30} />
                                    </a>
                                </li>
                                <li className="footer__top__item">
                                    <a href="https://web.telegram.org/" className='footer__top__link'>
                                        <img src={Telegram} alt="telegram icon" width={30} height={30} />
                                    </a>
                                </li>
                                <li className="footer__top__item">
                                    <a href="https://www.facebook.com/" className='footer__top__link'>
                                        <img src={Facebook} alt="facebook icon" width={30} height={30} />
                                    </a>
                                </li>
                                <li className="footer__top__item">
                                    <a href="https://youtube.com/" className='footer__top__link'>
                                        <img src={Youtube} alt="youtube icon" width={30} height={30} />
                                    </a>
                                </li>
                            </ul>

                            <button className="footer__top__btn">
                                <Link className='' to={'#header'}>
                                    <img src={Topbtn} alt="top button icon" width={30} heigh={30} />
                                </Link>
                            </button>
                        </div>

                        <ul className='footer__top__phones'>
                            <li className="footer__top__item">
                                <a href="tel:+998991814233" className='footer__top__link'>+99899 181 42 33</a>
                            </li>
                            <li className='footer__top__item'>
                                |
                            </li>
                            <li className="footer__top__item">
                                <a href="tel:+998997393538" className='footer__top__link'>+99899 739 35 38</a>
                            </li>
                        </ul>
                    </div>

                    <hr />

                    <div className="footer__bottom">
                        <p className="footer__bottom__title">Favour group 2022</p>
                        <p className="footer__bottom__address">Toshkent, Chilonzor, Shirin chorrahasi
                            <button className='footer__bottom__address-btn'>
                                <a href="https://goo.gl/maps/oh5YzUFcery5CBpt8" className='footer__bottom__address-link'>xaritada</a>
                            </button>
                        </p>
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer