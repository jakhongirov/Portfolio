import content from '../../localization/content'

function Partners({ lang }) {
    return (
        <section className="partners">
            <div className="container">
                <div className="services__heading-box">
                    <p className="services__heading__title">{content[lang].partners.title}</p>
                    <h2 className="services__heading">{content[lang].partners.heading}</h2>
                </div>

                <ul className='partners__list'>
                    <li className='partners__item'>
                        <img src="https://elmakon.uz/images/feature_variant/10/b71aebe73a15e6131d58c73f1e2610e6__2_.jpg" alt="novaey" width={110} height={65} />
                    </li>
                    <li className='partners__item'>
                        <img src="https://elmakon.uz/images/feature_variant/10/b71aebe73a15e6131d58c73f1e2610e6__2_.jpg" alt="novaey" width={110} height={65} />
                    </li>
                    <li className='partners__item'>
                        <img src="https://elmakon.uz/images/feature_variant/10/b71aebe73a15e6131d58c73f1e2610e6__2_.jpg" alt="novaey" width={110} height={65} />
                    </li>
                    <li className='partners__item'>
                        <img src="https://elmakon.uz/images/feature_variant/10/b71aebe73a15e6131d58c73f1e2610e6__2_.jpg" alt="novaey" width={110} height={65} />
                    </li>
                    <li className='partners__item'>
                        <img src="https://elmakon.uz/images/feature_variant/10/b71aebe73a15e6131d58c73f1e2610e6__2_.jpg" alt="novaey" width={110} height={65} />
                    </li>
                    <li className='partners__item'>
                        <img src="https://elmakon.uz/images/feature_variant/10/b71aebe73a15e6131d58c73f1e2610e6__2_.jpg" alt="novaey" width={110} height={65} />
                    </li>
                    <li className='partners__item'>
                        <img src="https://elmakon.uz/images/feature_variant/10/b71aebe73a15e6131d58c73f1e2610e6__2_.jpg" alt="novaey" width={110} height={65} />
                    </li>
                    <li className='partners__item'>
                        <img src="https://elmakon.uz/images/feature_variant/10/b71aebe73a15e6131d58c73f1e2610e6__2_.jpg" alt="novaey" width={110} height={65} />
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Partners