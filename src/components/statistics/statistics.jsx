import content from "../../localization/content"

function Statistics({ lang }) {
    return (
        <section className="statistics">
            <div className="container">
                <ul className="statistics__list">
                    <li className="statistics__item">
                        <h2 className="statistics__count">10+</h2>
                        <p className="statistics__title">{content[lang].statistics.completed}</p>
                    </li>
                    <li className="statistics__item">
                        <h2 className="statistics__count">10+</h2>
                        <p className="statistics__title">{content[lang].statistics.completed}</p>
                    </li>
                    <li className="statistics__item">
                        <h2 className="statistics__count">10+</h2>
                        <p className="statistics__title">{content[lang].statistics.completed}</p>
                    </li>
                    <li className="statistics__item">
                        <h2 className="statistics__count">10+</h2>
                        <p className="statistics__title">{content[lang].statistics.completed}</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Statistics