import content from "../../localization/content"

import Website from "../../assets/images/web-site.png"

function Services({ lang }) {
    return (
        <section className="services" id="services">
            <div className="container">
                <div className="services__heading-box">
                    <p className="services__heading__title">{content[lang].services.title}</p>
                    <h2 className="services__heading">{content[lang].services.heading}</h2>
                </div>

                <ul className="services__list">
                    <li className="services__item">
                        <img className="services__item__image" src={Website} alt="web-site icon" width={80} heigh={80} />
                        <h3 className="services__item__title">Veb-saytlar</h3>
                        <p className="services__item__info">
                            Korporativ veb saytlardan tortib veb ilovalargacha boʻlgan murakkablikdagi internet saytlarni sifat kafolati bilan ishlab chiqaramiz
                        </p>
                    </li>
                    <li className="services__item">
                        <img className="services__item__image" src={Website} alt="web-site icon" width={80} heigh={80} />
                        <h3 className="services__item__title">Veb-saytlar</h3>
                        <p className="services__item__info">
                            Korporativ veb saytlardan tortib veb ilovalargacha boʻlgan murakkablikdagi internet saytlarni sifat kafolati bilan ishlab chiqaramiz
                        </p>
                    </li>
                    <li className="services__item">
                        <img className="services__item__image" src={Website} alt="web-site icon" width={80} heigh={80} />
                        <h3 className="services__item__title">Veb-saytlar</h3>
                        <p className="services__item__info">
                            Korporativ veb saytlardan tortib veb ilovalargacha boʻlgan murakkablikdagi internet saytlarni sifat kafolati bilan ishlab chiqaramiz
                        </p>
                    </li>
                    <li className="services__item">
                        <img className="services__item__image" src={Website} alt="web-site icon" width={80} heigh={80} />
                        <h3 className="services__item__title">Veb-saytlar</h3>
                        <p className="services__item__info">
                            Korporativ veb saytlardan tortib veb ilovalargacha boʻlgan murakkablikdagi internet saytlarni sifat kafolati bilan ishlab chiqaramiz
                        </p>
                    </li>
                    <li className="services__item">
                        <img className="services__item__image" src={Website} alt="web-site icon" width={80} heigh={80} />
                        <h3 className="services__item__title">Veb-saytlar</h3>
                        <p className="services__item__info">
                            Korporativ veb saytlardan tortib veb ilovalargacha boʻlgan murakkablikdagi internet saytlarni sifat kafolati bilan ishlab chiqaramiz
                        </p>
                    </li>
                    <li className="services__item">
                        <img className="services__item__image" src={Website} alt="web-site icon" width={80} heigh={80} />
                        <h3 className="services__item__title">Veb-saytlar</h3>
                        <p className="services__item__info">
                            Korporativ veb saytlardan tortib veb ilovalargacha boʻlgan murakkablikdagi internet saytlarni sifat kafolati bilan ishlab chiqaramiz
                        </p>
                    </li>
                    <li className="services__item">
                        <img className="services__item__image" src={Website} alt="web-site icon" width={80} heigh={80} />
                        <h3 className="services__item__title">Veb-saytlar</h3>
                        <p className="services__item__info">
                            Korporativ veb saytlardan tortib veb ilovalargacha boʻlgan murakkablikdagi internet saytlarni sifat kafolati bilan ishlab chiqaramiz
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Services