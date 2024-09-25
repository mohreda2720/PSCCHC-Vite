import { useState } from "react";
import "./DetailedNavBar.css";
import SideMenu from "../SideMenu/SideMenu";
const DetailedNavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  }
  return (
    <>
      <div className="w-100 text-black bg-white fw-bold">
        <div className="container py-1">
          <div>
            <ul className="d-flex listStyle align-items-center pt-3">
              <li className="col listItem" onClick={handleMenuToggle}>Social Responsibility</li>
              <li className="col listItem" onClick={handleMenuToggle}>Adminstrative Services </li>
              <li className="col listItem" onClick={handleMenuToggle}>Employees Club</li>
              <li className="col listItem" onClick={handleMenuToggle}>Egypt Vision 2030</li>
            </ul>
          </div>
        </div>
      </div>
      <SideMenu isOpen={isMenuOpen} onClose={handleMenuToggle} />
    </>
  );
};


export default DetailedNavBar;