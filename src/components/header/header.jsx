import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import content from '../../localization/content'

import Logo from '../../assets/images/logo.svg'
import LangIcon from '../../assets/images/lang-icon.svg'
import HamburgerOpen from '../../assets/images/hamburger-open.svg'
import HamburgerClose from '../../assets/images/hamburger-close.svg'

function Header({ lang, setLang }) {
    const [menu, setMenu] = useState(false)

    return (
        <>
            <header className="header" id='header'>
                <div className="container">

                    <div className="logo-box">
                        <NavLink to="/">
                            <img src={Logo} alt="logo" width={200} height={68} />
                        </NavLink>
                    </div>

                    <nav className='header__nav'>
                        <ul className='header__nav-list'>
                            <li className='header__nav-item'>
                                <NavLink className="header__nav-link" to={'/'}>
                                    {content[lang].header.company}
                                </NavLink>
                            </li>
                            <li className='header__nav-item'>
                                <NavLink className="header__nav-link" to={'#services'}>
                                    {content[lang].header.services}
                                </NavLink>
                            </li>
                            <li className='header__nav-item'>
                                <NavLink className="header__nav-link" to={'#portfolio'}>
                                    {content[lang].header.portfolio}
                                </NavLink>
                            </li>
                            <li className='header__nav-item'>
                                <NavLink className="header__nav-link" to={'#partners'}>
                                    {content[lang].header.partners}
                                </NavLink>
                            </li>
                            <li className='header__nav-item'>
                                <NavLink className="header__nav-link" to={'#contact'}>
                                    {content[lang].header.contact}
                                </NavLink>
                            </li>
                        </ul>
                    </nav>

                    <div className='header__item'>
                        <div className='header__item-mobile'>
                            <p className='header__item__tel'>
                                <a className='header__item__tel-link' href="tel:+998958883537">
                                    <span className='header__item__tel-link--color'>+99895</span> 888 35 37
                                </a>
                            </p>
                            <span className='header__localization' onClick={(evt) => {
                                setLang(lang === "UZ" ? "RU" : "UZ");
                                window.localStorage.setItem('lang', JSON.stringify(lang === "UZ" ? "RU" : "UZ"))
                            }}>
                                <img className='header__localization__icon' src={LangIcon} alt="localization icon" width={20} height={20} />
                                <span className='header__localization__lang'>{lang}</span>
                            </span>
                        </div>

                        <div className='header_hamburger'>
                            <button className='header_hamburger_open' onClick={() => setMenu(!menu)}>
                                <img src={HamburgerOpen} alt="hamburger open button icon" width={27} height={20} />
                            </button>
                        </div>
                    </div>


                    {/* Tablet Hamburger */}

                    <div className={menu ? 'modal' : 'modal-close'}>

                        <button className='modal__close-btn' onClick={() => setMenu(!menu)}>
                            <img src={HamburgerClose} alt="hamburger close button icon" width={33} height={33} />
                        </button>

                        <nav className='header__nav'>
                            <ul className='header__nav-list'>
                                <li className='header__nav-item' onClick={() => setMenu(!menu)}>
                                    <NavLink className="header__nav-link" to={'/'}>
                                        {content[lang].header.company}
                                    </NavLink>
                                </li>
                                <li className='header__nav-item' onClick={() => setMenu(!menu)}>
                                    <NavLink className="header__nav-link" to={'#services'}>
                                        {content[lang].header.services}
                                    </NavLink>
                                </li>
                                <li className='header__nav-item' onClick={() => setMenu(!menu)}>
                                    <NavLink className="header__nav-link" to={'#portfolio'}>
                                        {content[lang].header.portfolio}
                                    </NavLink>
                                </li>
                                <li className='header__nav-item' onClick={() => setMenu(!menu)}>
                                    <NavLink className="header__nav-link" to={'#partners'}>
                                        {content[lang].header.partners}
                                    </NavLink>
                                </li>
                                <li className='header__nav-item' onClick={() => setMenu(!menu)}>
                                    <NavLink className="header__nav-link" to={'#contact'}>
                                        {content[lang].header.contact}
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>

                        <hr />

                        <div className='header__item-mobile'>
                            <p className='header__item__tel'>
                                <a className='header__item__tel-link' href="tel:+998958883537">
                                    <span className='header__item__tel-link--color'>+99895</span> 888 35 37
                                </a>
                            </p>
                            <span className='header__localization' onClick={(evt) => {
                                setLang(lang === "UZ" ? "RU" : "UZ");
                                window.localStorage.setItem('lang', JSON.stringify(lang === "UZ" ? "RU" : "UZ"))
                            }}>
                                <img className='header__localization__icon' src={LangIcon} alt="localization icon" width={20} height={20} />
                                <span className='header__localization__lang'>{lang}</span>
                            </span>
                        </div>
                    </div>

                </div>
            </header>
        </>
    )
}

export default Header