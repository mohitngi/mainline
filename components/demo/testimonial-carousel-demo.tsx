"use client";

import { TestimonialCarousel } from "@/components/ui/testimonial-carousel";

const testimonials = [
  {
    company: "clerk",
    avatar: "nick-parsons.webp",
    name: "Nick Parsons",
    role: "Director of Marketing, Clerk",
    review: "Mainline's intuitive interface transformed our workflow. Our team's productivity has never been higher.",
  },
  {
    company: "raycast",
    avatar: "thomas-paul-mann.webp",
    name: "Thomas Paul Mann",
    role: "CEO, Raycast",
    review: "From concept to deployment, Mainline streamlines our entire process. The results speak for themselves.",
  },
  {
    company: "vercel",
    avatar: "guillermo-rauch.webp",
    name: "Guillermo Rauch",
    role: "CEO, Vercel",
    review: "Mainline's powerful features help us stay ahead. A must-have tool for modern development teams.",
  },
];

export function TestimonialCarouselDemo() {
  return (
    <TestimonialCarousel
      testimonials={testimonials}
      companyLogoPath="https://assets.rapidui.dev/testimonials/companies/"
      avatarPath="https://assets.rapidui.dev/testimonials/people/"
    />
  );
}
