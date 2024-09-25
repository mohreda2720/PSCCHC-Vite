import Breadcrumb from "react-bootstrap/Breadcrumb";

const DiscoverHeader = (props) => {
  return (
    <>
      <div className="discover-header">
        <img
          src={props.img}
          alt=""
          className="discover-header-image"
        />
        <h1 className="discover-header-title w-100">{props.title}</h1>
        <div className="breadcrumb-container ">
          <Breadcrumb className="breadcrumb d-flex flex-nowrap">
            <Breadcrumb.Item href="/" className="breadcrumb-item">
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item active href="#" className="breadcrumb-item">
              {props.current}
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
    </>
  );
};

export default DiscoverHeader;
