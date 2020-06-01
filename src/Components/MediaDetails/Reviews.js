import React from "react";

const Reviews = (props) => {
  const read = (e) => {
      if (e.target.className === "reviews-toggle") {
      let button = e.target;
      let review = e.target.previousSibling;
      review.classList.toggle("full-height");
      button.innerHTML =
        button.innerHTML === "Развернуть" ? "Свернуть" : "Развернуть";
    }
  };

  const reviews = props.reviews;

  return (
    <section id="reviews" onClick={read}>
      <h1>Отзывы</h1>
        {reviews.total_results > 0 ? (
        reviews.results.map((cur) => (
          <div key={cur.id}>
            <h4>{cur.author}</h4>
            <p className="review">{cur.content}</p>
            <button className="reviews-toggle">Развернуть</button>
          </div>
        ))
      ) : (
        <div>
          <h4>Отзывы не найдены...</h4>
        </div>
      )}
    </section>
  );
};
export default Reviews;
