import React from "react";
import "./SideMenu.css";
import { HiOutlineX } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const SideMenu = ({ isOpen, onClose }) => {

  const navigate = useNavigate();
  const handleAbout = () => {
    navigate('/about')
    onClose();
  }

  const handlemm = () => {
    navigate('/media')
    onClose();
  }

  const handleServices = () => {
    navigate('/services')
    onClose();
  }
  const handleSocialResponse = () => {
    navigate('/SocialResponse')
    onClose();
  }
  const handleDiscover = () => {
    navigate('/discover')
    onClose();
  }
  return (
    <>
      {isOpen && <div className="overlay" onClick={onClose} />}
      <div className={`side-menu ${isOpen ? "open" : ""} `}>
        <div
          className="d-flex justify-content-center align-items-center sideClose px-1"
          onClick={onClose}
        >
          <HiOutlineX />
          <div>Close</div>
        </div>
        <div className="menu-content">
          <div className="row">

            <div className="col-4">
              <h4>Social Responsiblity</h4>
              <ul>
                <li>item</li>
                <li>item</li>
                <li>item</li>
              </ul>
            </div>
            <div className="col-4">
              <h4>Social Responsiblity</h4>
              <ul>
                <li>item</li>
                <li>item</li>
                <li>item</li>
              </ul>
            </div>
            <div className="col-4">
              <h4>Social Responsiblity</h4>
              <ul>
                <li>item</li>
                <li>item</li>
                <li>item</li>
              </ul>
            </div>
            <div className="col-4">
              <h4>Social Responsiblity</h4>
              <ul>
                <li>item</li>
                <li>item</li>
                <li>item</li>
              </ul>
            </div>
            <div className="col-4">
              <h4>Social Responsiblity</h4>
              <ul>
                <li>item</li>
                <li>item</li>
                <li>item</li>
              </ul>
            </div>
            <div className="col-4">
              <button className="btn btn-primary" onClick={handleAbout}>about</button>
              <button className="btn btn-primary" onClick={handlemm}>media</button>
              <button className="btn btn-primary" onClick={handleSocialResponse}>Social response</button>
              <button className="btn btn-primary" onClick={handleServices}>services</button>
              <button className="btn btn-primary" onClick={handleDiscover}>Discover</button>

            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default SideMenu;
