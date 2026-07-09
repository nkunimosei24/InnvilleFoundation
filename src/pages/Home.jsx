import CTA from "../components/CTA";
import Hero from "../components/Hero";
import HowWeWork from "../components/HowWeWork";
import ImpactStats from "../components/ImpactStats";
import Partners from "../components/Partners";
import Testimonials from "../components/Testimonials";
import UpcomingEvents from "../components/UpcomingEvents";
import WhatWeDo from "../components/WhatWeDo";

export default function Home() {
  return (
    <div>
      <Hero/>
      <ImpactStats/>
      <WhatWeDo/>
      <HowWeWork/>
      <UpcomingEvents/>
      <Testimonials/>
      <Partners/>
      <CTA/>

    </div>
  );
}