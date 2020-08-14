import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CarouselCard from './CarouselCard';

import './styles.css';

// const testObj1 = {
//   id: 15997,
//   type: 'bebida',
//   area: '',
//   category: 'Ordinary Drink',
//   alcoholicOrNot: 'Optional alcohol',
//   name: 'GG',
//   image: 'https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg',
//   doneDate: '11/09/2020',
//   tags: [],
// };

// const testObj2 = {
//   id: 1111,
//   type: 'bebida',
//   area: '',
//   category: 'Cocktail',
//   alcoholicOrNot: 'Alcoholic',
//   name: 'A1',
//   image: 'https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg',
//   doneDate: '10/09/2020',
//   tags: [],
// };

// const testObj3 = {
//   id: 1111,
//   type: 'bebida',
//   area: '',
//   category: 'Shot',
//   alcoholicOrNot: 'Alcoholic',
//   name: 'ABC',
//   image: 'https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg',
//   doneDate: '10/09/2020',
//   tags: [],
// };

// const testObj4 = {
//   id: 1111,
//   type: 'bebida',
//   area: '',
//   category: 'Ordinary Drink',
//   alcoholicOrNot: 'Alcoholic',
//   name: 'Kir',
//   image: 'https://www.thecocktaildb.com/images/media/drink/apneom1504370294.jpg',
//   doneDate: '10/09/2020',
//   tags: [],
// };

// const testObj5 = {
//   id: 1111,
//   type: 'bebida',
//   area: '',
//   category: 'Shot',
//   alcoholicOrNot: 'Alcoholic',
//   name: '747',
//   image: 'https://www.thecocktaildb.com/images/media/drink/xxsxqy1472668106.jpg',
//   doneDate: '10/09/2020',
//   tags: [],
// };

// const testObj6 = {
//   id: 1111,
//   type: 'bebida',
//   area: '',
//   category: 'Shot',
//   alcoholicOrNot: 'Alcoholic',
//   name: '252',
//   image: 'https://www.thecocktaildb.com/images/media/drink/rtpxqw1468877562.jpg',
//   doneDate: '10/09/2020',
//   tags: [],
// };

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
  console.log(recommendeds);
  return (
    <div className="carousel">
      <Slider {...settings}>
        {flag === 'comida' ? cardForFoods(recommendeds, flag) : cardForDrinks(recommendeds, flag)}
      </Slider>
    </div>
  );
};

export default Carousel;
