import "./CarouselItem.scss";

function CarouselItem ({ image, copy, ctaLink, ctaCopy }) {
    return(
        <div className="carouselItem">
            <img src={image} alt="" className="carouselItem__image"/>
            <div className="carouselItem__content">
                <p className="carouselItem__copy">{copy}</p>
                <a href={ctaLink} className="carouselItem__CTA">{ctaCopy}</a>
            </div>
        </div>
    )
    
}

export default CarouselItem;