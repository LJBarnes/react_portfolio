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
          <CardTitle className="title">Weather Dashboard</CardTitle>
          
          <CardText className="text">Created using OpenWeather API to retrieve weather data, this
                        application allows users to find and compare current weather conditions in different cities to appropriately plan for
                        travel.</CardText>
          <span><button className="button"><a href="https://ljbarnes.github.io/weather_dashboard/" className="light-link">Demo</a></button> <button className="button"><a href="https://github.com/LJBarnes/weather_dashboard" className="light-link">Code</a></button> </span>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle className="title">Day Planner</CardTitle>
          
          <CardText className="text">Easily schedule your work day with this applicaiton that utilizes jQuery and Moment JS
                        to dynamically update HTML and color code your hours based on past, present and future times. User
                        input is saved to local storage so that schedule remains on page even after refreshing.</CardText>
          <span><button className="button"><a href="https://ljbarnes.github.io/day_planner/" className="light-link">Demo</a></button> <button className="button"><a href="https://github.com/LJBarnes/day_planner" className="light-link">Code</a></button> </span>
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
          <CardTitle className="title">FurEver Home</CardTitle>
          <CardText className="text">Potential pet adopters can search for information and images
                        about dog and cat breeds to learn what breed might best fit their lifestyle.
The goal of this app is to cut down on pet re-homing after adoption.
                        Powered by Materialize CSS, jQuery, The Dog API and The Cat API.</CardText>
          <span><button className="button"><a href="https://pdorgu00.github.io/FurEverHome/" className="light-link">Demo</a></button> <button className="button"><a href="https://github.com/pdorgu00/FurEverHome" className="light-link">Code</a></button> </span>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle className="title">Eat Da Burger</CardTitle>
          
          <CardText className="text">A burger logger created with MySql, Node, Express, Handlebars, an ORM, and follows the
                        MVC design pattern. This application is a restaurant app that lets users input the names
                        of burgers they'd like to eat and allows them to archive the burger name once it has been eaten.
                        All burgers are stored in a database.</CardText>
          <span><button className="button"><a href="https://infinite-wave-71265.herokuapp.com/" className="light-link">Demo</a></button> <button className="button"><a href="https://github.com/LJBarnes/burger" className="light-link">Code</a></button> </span>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle className="title">Shelfie</CardTitle>
           <CardText className="text">This virtual library allows users to create their own account to orgainize and catalog
                        their books. Users can search for books and add them to lists
                        called "shelves". The books can then be moved between shelves or
                        deleted at user's discretion. Built with Google Books API, Node.js, Express.js,
                        Handebars.js, Bulma, MVC Design Pattern,
                        Passport.js, MySQL and Sequelize..</CardText>
           <span><button className="button"><a href="https://aqueous-refuge-48419.herokuapp.com/" className="light-link">Demo</a></button> <button className="button"><a href="https://github.com/taylormbruno/project2" className="light-link">Code</a></button> </span>
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

