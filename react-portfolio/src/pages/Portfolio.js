import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, Container, Row, Col
} from 'reactstrap';
import "./style.css";

const Portfolio = (props) => {
  return (
    <>
    <div className="container-fluid">
    <Container>
    <Row h-100>
      <Col>
    <CardDeck>
      <Card>
        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle className="title">Password Generator</CardTitle>
          <CardText className="text">Built with HTML, CSS, and JavaScript, this application prompts users to specify the criteria for their password. A random password is then generated according to their specifications.</CardText>
          <span><button className="button"><a href="https://ljbarnes.github.io/Homework3/Index.html" className="light-link">Demo</a></button> <button className="button"><a href="https://github.com/LJBarnes/password_generator" className="light-link">Code</a></button> </span>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle className="title">Card title</CardTitle>
          
          <CardText className="text">This card has supporting text below as a natural lead-in to additional content.</CardText>
          <span><button className="button"><a href="https://ljbarnes.github.io/weather_dashboard/" className="light-link">Demo</a></button> <button className="button"><a href="https://github.com/LJBarnes/weather_dashboard" className="light-link">Code</a></button> </span>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle className="title">Card title</CardTitle>
          
          <CardText className="text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <span><button className="button"><a href="#" className="light-link">Demo</a></button> <button className="button"><a href="#" className="light-link">Code</a></button> </span>
        </CardBody>
      </Card>
    </CardDeck>
    </Col>
    </Row>

    <Row className="h-100 first">
      <Col>
    <CardDeck>
      <Card>
        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle className="title">Card title</CardTitle>
          <CardText className="text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <span><button className="button"><a href="#" className="light-link">Demo</a></button> <button className="button"><a href="#" className="light-link">Code</a></button> </span>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle className="title">Card title</CardTitle>
          
          <CardText className="text">This card has supporting text below as a natural lead-in to additional content.</CardText>
          <span><button className="button"><a href="#" className="light-link">Demo</a></button> <button className="button"><a href="#" className="light-link">Code</a></button> </span>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle className="title">Card title</CardTitle>
           <CardText className="text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
           <span><button className="button"><a href="#" className="light-link">Demo</a></button> <button className="button"><a href="#" className="light-link">Code</a></button> </span>
        </CardBody>
      </Card>
    </CardDeck>
    </Col>
    </Row>
    </Container>
    </div>
    </>
  );
};



export default Portfolio;

