import React from 'react';
import './Header.css';

import HeaderTitle from './components/HeaderComponents/HeaderTitle';
import ImageThumbnail from './components/HeaderComponents/ImageThumbnail';
import HeaderContent from './components/HeaderComponents/HeaderContent';


const HeaderContainer = () => {
  return (
    <div>
      <ImageThumbnail />
      <HeaderTitle />
      <HeaderContent />
    </div>
  );
};

export default HeaderContainer;
