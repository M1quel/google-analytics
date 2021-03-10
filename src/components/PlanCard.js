import "./PlanCard.scss";

function PlanCard ({ heading, summary, price, link }) {
    return (
        <article className="planCard">
            <section className="planCard__title">
                <h1 className="title__heading">{heading}</h1>
                <p className="title__summary">{summary}</p>
                <p className="title__price">{price}</p>
                <p className="title__conditions">/user/month*<br/>(billed annually) </p>
                <a href={link}>Try for free &gt;</a>
            </section>

            <section className="planCard__features">
                
            </section>
        </article>
    )
}

export default PlanCard;