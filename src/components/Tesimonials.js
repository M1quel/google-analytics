import "./Testimonials.scss";
import TestimonialCard from "./TestimonialCard";

function Testimonials () {
    return(
        <section className="testimonials">
            <TestimonialCard
            image="https://picsum.photos/200/200?random=1"
            copy="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt provident atque a odio repellendus culpa nihil eos at voluptatum ut."
            />
            <TestimonialCard
            image="https://picsum.photos/200/200?random=2"
            copy="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt provident atque a odio repellendus culpa nihil eos at voluptatum ut."
            />
            <TestimonialCard
            image="https://picsum.photos/200/200?random=3"
            copy="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt provident atque a odio repellendus culpa nihil eos at voluptatum ut."
            />

        </section>
    )
}

export default Testimonials;