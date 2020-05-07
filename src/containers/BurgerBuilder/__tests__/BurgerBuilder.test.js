import React from 'react';
import { shallow } from 'enzyme';

import { BurgerBuilder } from '../BurgerBuilder';
import BuildControls from '../../../components/Burger/BuildControls/BuildControls';

describe('<BurgerBuilder/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BurgerBuilder onInitIngredients={() => {}} />);
  });

  it('should render <BuildControls> when receiving ingredients', () => {
    wrapper.setProps({ ings: { salad: 0 } });
    expect(wrapper.find(BuildControls)).toHaveLength(1);
  });
  it('should not render <BuildControls> when not receiving ingredients', () => {
    wrapper.setProps({ ings: null });
    expect(wrapper.find(BuildControls)).toHaveLength(0);
  });
});
