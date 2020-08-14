import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CarouselCard from './CarouselCard';

import './styles.css';

const cardForFoods = (recommendeds, flag) => {
  return recommendeds.map((recipe, index) =>
    (index < 6 ? (
      <CarouselCard
        key={recipe.idMeal}
        id={recipe.idMeal}
        flag={flag}
        index={index}
        url={recipe.strMealThumb}
        name={recipe.strMeal}
      />
    ) : null),
  );
};

const cardForDrinks = (recommendeds, flag) => {
  return recommendeds.map((recipe, index) =>
    (index < 6 ? (
      <CarouselCard
        key={recipe.idDrink}
        id={recipe.idDrink}
        flag={flag}
        index={index}
        url={recipe.strDrinkThumb}
        name={recipe.strDrink}
      />
    ) : null),
  );
};

const Carousel = ({ recommendeds, flag }) => {
  const settings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div className="carousel">
      <Slider {...settings}>
        {flag === 'comida' ? cardForFoods(recommendeds, flag) : cardForDrinks(recommendeds, flag)}
      </Slider>
    </div>
  );
};

export default Carousel;
