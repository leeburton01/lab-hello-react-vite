import React from "react";
import Feature from "./Feature";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";

function Features() {
  let features = [
    {
      imgSrc: icon1,
      title: "Declarative",
      description: "React makes it painless to create interactive UIs.",
    },
    {
      imgSrc: icon2,
      title: "Components",
      description: "Build encapsulated components that manage their state.",
    },
    {
      imgSrc: icon3,
      title: "Single-Way",
      description: "A set of immutable values are passed to the component's.",
    },
    {
      imgSrc: icon4,
      title: "JSX",
      description: "Statically-typed, designed to run on modern browsers.",
    },
  ];

  return (
    <section className="App-features">
      {features.map((feature, index) => (
        <Feature key={index} {...feature} />
      ))}
    </section>
  );
}

export default Features;
