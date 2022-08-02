import content from "../../localization/content"

function Portfolio({ lang }) {
    let photo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'

    return (
        <section className="portfolio">
            <div className="container">
                <div className="portfolio__top-box">
                    <div className="services__heading-box">
                        <p className="services__heading__title">{content[lang].portfolio.title}</p>
                        <h2 className="services__heading">{content[lang].portfolio.heading}</h2>
                    </div>

                    <ul className="portfolio__type-list">
                        <li className="portfolio__type-item">
                            <button className="portfolio__type-btn">
                                VEB-SAYTLAR
                            </button>
                        </li>
                        <li className="portfolio__type-item">
                            <button className="portfolio__type-btn">
                                VEB-SAYTLAR
                            </button>
                        </li>
                        <li className="portfolio__type-item">
                            <button className="portfolio__type-btn">
                                VEB-SAYTLAR
                            </button>
                        </li>
                        <li className="portfolio__type-item">
                            <button className="portfolio__type-btn">
                                VEB-SAYTLAR
                            </button>
                        </li>
                        <li className="portfolio__type-item">
                            <button className="portfolio__type-btn">
                                VEB-SAYTLAR
                            </button>
                        </li>
                    </ul>
                </div>

                <div className="portfolio__list-box">
                    <div className="portfolio__single">
                        <img className="portfolio__single-image" src={photo} alt="nature" width={650} height={515} />
                    </div>
                    <ul className="portfolio__list">
                        <li className="portfolio__item">
                            <img className="portfolio__list-img" src={photo} alt="nature" width={315} height={250} />
                        </li>
                        <li className="c">
                            <img className="portfolio__list-img" src={photo} alt="nature" width={315} height={250} />
                        </li>
                        <li className="portfolio__item">
                            <img className="portfolio__list-img" src={photo} alt="nature" width={315} height={250} />
                        </li>
                        <li className="portfolio__item">
                            <img className="portfolio__list-img" src={photo} alt="nature" width={315} height={250} />
                        </li>
                    </ul>
                </div>

                <button className="port_btn">
                    {content[lang].portfolio.button}
                </button>
            </div>
        </section>
    )
}

export default Portfolio