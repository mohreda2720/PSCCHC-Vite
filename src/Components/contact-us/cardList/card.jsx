import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';
import "./card.css"
import Col from 'react-bootstrap/Col';

const CardPage = ({ title, subtitle, description, imgUrl }) => {


  return (

    <Row className="card CardListCard">
      <img src={require(`../img/${imgUrl}`)} alt="imagee" className="card-image CardListImage" />
      <Col className="card-content CardListContent">
        <h2 className="card-title CardListTitle">{title}</h2>
        <p className="card-subtitle CardListSubtitle">{subtitle}</p>
        <p className='card-description CardListDes'>{description}</p>
      </Col>
    </Row>

  );
}
export default CardPage;
