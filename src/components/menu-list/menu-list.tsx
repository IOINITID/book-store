import React from 'react';
import './menu-list.scss';
import MenuItem from '../menu-item/menu-item';
import { connect } from 'react-redux';

interface IMenuList {
  favoriteQuantity: number;
  cartQuantity: number;
}

const MenuList = (props: IMenuList) => {
  const { cartQuantity, favoriteQuantity } = props;

  return (
    <ul className="menu-list">
      <li className="menu-list__item">
        <MenuItem type="favorite" quantity={favoriteQuantity} />
      </li>
      <li className="menu-list__item">
        <MenuItem type="cart" quantity={cartQuantity} />
      </li>
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    favoriteQuantity: state.default.favoriteQuantity,
    cartQuantity: state.default.cartQuantity,
  };
};

export default connect(mapStateToProps, null)(MenuList);
