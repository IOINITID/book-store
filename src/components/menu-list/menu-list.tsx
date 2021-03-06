import React from 'react';
import './menu-list.scss';
import MenuItem from '../menu-item/menu-item';
import { connect } from 'react-redux';

interface IMenuList {
  favoritesQuantity: number;
  cartQuantity: number;
}

const MenuList = (props: IMenuList) => {
  const { cartQuantity, favoritesQuantity } = props;

  return (
    <ul className="menu-list">
      <li className="menu-list__item">
        <MenuItem type="favorite" quantity={favoritesQuantity} />
      </li>
      <li className="menu-list__item">
        <MenuItem type="cart" quantity={cartQuantity} />
      </li>
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    favoritesQuantity: state.favorites.quantity,
    cartQuantity: state.cart.quantity,
  };
};

export default connect(mapStateToProps, null)(MenuList);
