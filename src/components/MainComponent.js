import React from "react";
import "../App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponent";
import Header from "./Header";
import Footer from "./Footer";
import { Component } from "react";
import { DISHES } from "../shared/dishes";
import DishDetails from "./DishDetails";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null,
    };
  }

  onDishSelect(dishID) {
    this.setState({ selectedDish: dishID });
  }

  render() {
    return (
      <div>
        <Header />
        <Menu
          dishes={this.state.dishes}
          onClick={(dishID) => this.onDishSelect(dishID)}
        />
        <DishDetails
          dish={
            this.state.dishes.filter(
              (dish) => dish.id === this.state.selectedDish
            )[0]
          }
        />
        <Footer />
      </div>
    );
  }
}

export default Main;
