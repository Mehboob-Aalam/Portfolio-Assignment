import React from 'react'
import TestimonialSlider from '@/Components/TestimonialSlider';

function Testimonial() {
  return (
    <section className="bg-[#02050a] pt-16 md:pt-32 pb-4" id="review">
      <h1 className="text-white text-center text-[28px] sm:text-[33px] md:text-[45px] font-bold uppercase">
        Client <span className="text-yellow-400">Review</span>
      </h1>
      <div className="pt-20 pb-16 w-4/5 mx-auto">
        <TestimonialSlider />
      </div>
    </section>
  );
}

export default Testimonial