import React, { useEffect, useState } from "react";

const useReview = () => {
  const [reviews, setReviews] = useState([]);
  
  useEffect(() => {
    fetch("testimonial.json")
      .then((response) => response.json())
      .then((json) => setReviews(json));
  });
  return [reviews, setReviews];
}

export default useReview;
