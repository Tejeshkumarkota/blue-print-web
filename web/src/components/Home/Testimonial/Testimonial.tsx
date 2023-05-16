import TestimonialProp from "./TestimonialProp/TestimonialProp";
import TestimonialPropTour from "./TestimonialPropTour/TestimonialPropTour";
import TestimonialVilla from "./TestimonialVilla/TestimonialVilla";
import TestimonialCounter from "./TestimonialCounter/TestimonialCounter";

const Testimonial = () => {
  return (
    <>
      <TestimonialVilla />
      <TestimonialProp />
      <TestimonialPropTour />
      <TestimonialCounter />
    </>
  );
};

export default Testimonial;
