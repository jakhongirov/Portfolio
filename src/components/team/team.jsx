import content from '../../localization/content'

function Team({ lang }) {
    return (
        <section className="team">
            <div className="container">
                <h2 className="team__heading">{content[lang].team.heading}</h2>

                <ul className='team__list'>
                    <li className='team__item'>
                        <img className='team__image'
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Emblem-person-blue.svg/2048px-Emblem-person-blue.svg.png"
                            alt="person's avatar"
                            width={210}
                            height={190} />
                        <h3 className='team__item__title'>Мироншох Насимов</h3>
                        <p className='team__item__info'>IT-эксперт, Основатель компании Naf</p>
                    </li>
                    <li className='team__item'>
                        <img className='team__image'
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Emblem-person-blue.svg/2048px-Emblem-person-blue.svg.png"
                            alt="person's avatar"
                            width={210}
                            height={190} />
                        <h3 className='team__item__title'>Мироншох Насимов</h3>
                        <p className='team__item__info'>IT-эксперт, Основатель компании Naf</p>
                    </li>
                    <li className='team__item'>
                        <img className='team__image'
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Emblem-person-blue.svg/2048px-Emblem-person-blue.svg.png"
                            alt="person's avatar"
                            width={210}
                            height={190} />
                        <h3 className='team__item__title'>Мироншох Насимов</h3>
                        <p className='team__item__info'>IT-эксперт, Основатель компании Naf</p>
                    </li>
                    <li className='team__item'>
                        <img className='team__image'
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Emblem-person-blue.svg/2048px-Emblem-person-blue.svg.png"
                            alt="person's avatar"
                            width={210}
                            height={190} />
                        <h3 className='team__item__title'>Мироншох Насимов</h3>
                        <p className='team__item__info'>IT-эксперт, Основатель компании Naf</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Team