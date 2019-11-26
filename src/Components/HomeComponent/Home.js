import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'
import FirstSlide from '../../img/carouselFirst.png'
import SecondSlide from '../../img/carouselSecond.png'
import ThirdSlide from '../../img/carousel.png'
import {AnimatedOnScroll} from "react-animated-css-onscroll";
import "animate.css/animate.min.css";

import './Home.css'

class Home extends Component {
    render() {
        return(
            <div className="content">
                <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 fadeInLeftBig"
      src={FirstSlide}
      alt="First slide"
    />
    <Carousel.Caption className="animated fadeInLeft">
      <h3>Background Image One</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      <Button className="px-5" variant="success">Learn more</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={SecondSlide}
      alt="Third slide"
    />

    <Carousel.Caption className="animated fadeInLeft">
      <h3>Background Image Two</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Button className="px-5" variant="success">Learn more</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ThirdSlide}
      alt="Third slide"
    />

    <Carousel.Caption className="animated fadeInLeft">
      <h3>Background Image Three</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      <Button className="px-5" variant="success">Learn more</Button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>



                <div class="container">
                <AnimatedOnScroll animationIn="swing" animationInDuration={800}>
  

                <Jumbotron className="jumbotron mb-5 ">
                <h1>Hello, world!</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
                </Jumbotron>
                </AnimatedOnScroll>
            </div>
              
              
              <div className="layer">
                  <div className="container">
                  <AnimatedOnScroll animationIn="fadeInLeft" animationInDuration={800}>
              <h2 className="animated fadeInLeft">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus consecteturadipisicing elit.</h2>
                    </AnimatedOnScroll>

                    <AnimatedOnScroll animationIn="fadeInRight" animationInDuration={800}>
              <Button className="px-5 py-3 animated fadeInRight" variant="light">Learn more</Button>
              </AnimatedOnScroll>
              </div>
              </div>

            <div className="container">
            <div className="row text-center">
                
                
                <div class="col-lg-3 col-md-6 mb-5">
                <AnimatedOnScroll animationIn="bounceInDown" animationInDuration={1500}>
                    <div class="card h-100">
                    <img class="card-img-top" src="http://placehold.it/500x325" alt=""/>
                    <div class="card-body">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                    </div>
                    <div class="card-footer">
                         <button className="btn btn-primary">Find Out More!</button>
                    </div>
                    </div>
                    </AnimatedOnScroll>
                </div>
                
                <div class="col-lg-3 col-md-6 mb-5">
                <AnimatedOnScroll animationIn="bounceInUp" animationInDuration={1500}>
                    <div class="card h-100">
                    <img class="card-img-top" src="http://placehold.it/500x325" alt=""/>
                    <div class="card-body">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                    </div>
                    <div class="card-footer">
                        <button className="btn btn-primary">Find Out More!</button>
                    </div>
                    </div>
                    </AnimatedOnScroll>
                </div>
                
                <div class="col-lg-3 col-md-6 mb-5">
                     <AnimatedOnScroll animationIn="bounceInDown" animationInDuration={1500}>
                    <div class="card h-100">
                    <img class="card-img-top" src="http://placehold.it/500x325" alt=""/>
                    <div class="card-body">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                    </div>
                    <div class="card-footer">
                         <button className="btn btn-primary">Find Out More!</button>
                    </div>
                    </div>
                    </AnimatedOnScroll>
                </div>

                <div class="col-lg-3 col-md-6 mb-5">
                   <AnimatedOnScroll animationIn="bounceInUp" animationInDuration={1500}>
                    <div class="card h-100">
                    <img class="card-img-top" src="http://placehold.it/500x325" alt=""/>
                    <div class="card-body">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                    </div>
                    <div class="card-footer">
                        <button className="btn btn-primary">Find Out More!</button>
                    </div>
                    </div>
                    </AnimatedOnScroll>
                </div>
                </div>
                </div>
                </div>
          
        )
    }
}

export default Home;