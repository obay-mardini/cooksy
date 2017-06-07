import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodaysMeals } from '../actions/index';
import { Link } from 'react-router-dom';
import { GridList, GridTile } from 'material-ui/GridList';
import { Rating } from 'material-ui-rating';
import Carousel from 'nuka-carousel';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import _ from 'lodash';

import './Homepage.css';


class Homepage extends Component {
  componentDidMount() {
    this.props.fetchTodaysMeals();
  }

  render() {
    return (
      <div className="root-homepage">
        <Carousel slidesToShow={2} cellAlign="center">
          <img src="https://greatist.com/sites/default/files/SlowCooker-Pork-Ramen_0.jpg"/>
          <img src="https://static1.squarespace.com/static/53ffb08fe4b0a9868676061c/53ffb0bbe4b006127c1eae3e/53ffcd46e4b0cd9fe3d11696/1409273160709/pasta.jpg"/>
          <img src="http://del.h-cdn.co/assets/15/51/1450278988-honey-soy-chicken.jpg"/>
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4"/>
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5"/>
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6"/>
        </Carousel>
        <h2>{new Date().toDateString()}</h2>
        <GridList
          cellHeight={200}
          className="grid"
          cols={2.2}
        >
          {_.map(this.props.todaysMeals, (meal) => (
            <GridTile
              key={meal.name}
              title={<Link to={`/meals/${meal.id}`} style={{color:'white', textDecoration: 'none'}}>{meal.name}</Link>}
              subtitle={<span>by <b>{meal.chef.username}</b></span>}
              actionIcon={<Rating value={Math.ceil(meal.rating)} max={5} readOnly={true} />}
            >
              <img src={meal.images} alt="picture"/>
            </GridTile>
          ))}
        </GridList>
      </div>


    );
  }
}

function mapStateToProps(state) {
  return { todaysMeals: state.todaysMeals };
}


export default connect(mapStateToProps, { fetchTodaysMeals: fetchTodaysMeals })(Homepage);
