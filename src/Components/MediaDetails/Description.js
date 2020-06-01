import React from "react";

const Description = (props) => {
  return (
    <section id="summary">
      <h1>Описание</h1>
      <p>{props.description}</p>
    </section>
  );
};
export default Description;
