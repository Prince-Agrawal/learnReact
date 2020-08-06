import React from "react";
import "../App.css";
import Menu from "./MenuComponent";
import Header from "./Header";
import Footer from "./Footer";
import Contact from "./ContactComponent";
import DishDetail from './DishDetails';
import About from './AboutComponent';
import Home from "./HomeComponent";
import { Component } from "react";
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import DishDetails from "./DishDetails";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
    };
  }

  render() {
    // function HomePage() {
    //   // console.log(this.state.dishes)
    //   return (
    //     <div>

    //     </div>
    //   );
    // }

    const HomePage = ()=>{
      return(
        <Home
                dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                promotion={
                  this.state.promotions.filter((promo) => promo.featured)[0]
                }
                leader={
                  this.state.leaders.filter((leader) => leader.featured)[0]
                }
              />
      )
    }

    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };
    return (
      <div>
        <Header />
        <Switch>
          <Route
            path="/home"
            component={HomePage}
          />
          <Route
            exact
            exact path="/menu"
            component={() => <Menu dishes={this.state.dishes} />}
          />
          <Route path='/menu/:dishId' component={DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Route exact path="/aboutus" component={()=> <About leaders = {this.state.leaders} />} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
