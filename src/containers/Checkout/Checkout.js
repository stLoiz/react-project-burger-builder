import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import ContactData from './ContactData/ContactData';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
  //   componentWillMount() {
  //     const query = new URLSearchParams(this.props.location.search);
  //     const ingredients = {};
  //     let price;
  //     for (let param of query.entries()) {
  //       if (param[0] === 'price') {
  //         price = param[1];
  //         break;
  //       }
  //       ingredients[param[0]] = +param[1];
  //     }

  //     this.setState({ ingredients: ingredients, totalPrice: price });
  //   }

  checkoutCancelHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinueHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  };

  render() {
    return (
      <div>
        {!this.props.ings && <Redirect to="/" />}
        {this.props.ings && (
          <>
            <CheckoutSummary
              ingredients={this.props.ings}
              checkoutCancelled={this.checkoutCancelHandler}
              checkoutContinued={this.checkoutContinueHandler}
            />

            <Route
              path={this.props.match.path + '/contact-data'}
              component={ContactData}
            />
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
  };
};
export default connect(mapStateToProps)(Checkout);
