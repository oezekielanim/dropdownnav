import React, { useState } from 'react';


const useNavmenu = () => {
  // State to manage the open/closed state of different menu sections
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Event handlers for hover states
  const handleFeaturesOnClick = () => {
    setFeaturesOpen(!featuresOpen);
  };

  

  const handleCompanyOnClick = () => {
    setCompanyOpen(!companyOpen);
  };

 
  // Event handler for menu click
  const handleMenuClick = () => {
    console.log('clicked');
    setMenuOpen(!menuOpen);
  };

  // Return state and functions for external use
  return {
    featuresOpen,
    companyOpen,
    menuOpen,
    handleFeaturesOnClick,
    handleCompanyOnClick,
    handleMenuClick,
    setMenuOpen
  };
};

export default useNavmenu;
