import React, { Component } from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import {AnimatedOnScroll} from "react-animated-css-onscroll";
import "animate.css/animate.min.css";

import './About.css'

export class About extends Component {
    render() {
        return (
            <div className="about">
                    <div className="container">
                    
                <Flippy 
                    flipOnHover={true} // default false
                    flipOnClick={true} // default false
                    flipDirection="horizontal" // horizontal or vertical
                    ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                    // if you pass isFlipped prop component will be controlled component.
                    // and other props, which will go to div
                    style={{ width: '100%', height: '400px' ,marginTop: '100px', marginBottom: '100px', marginLeft: '50px'}} /// these are optional style, it is not necessary
                >
                    <FrontSide
                    className="frontSide"
                    >

                    </FrontSide>
                    <BackSide
                    className="backSide"
                   >
                    <h2>Check more about us</h2>
                    <hr/>
                    <p>Until recently, the prevailing view assumed lorem ipsum was 
                        born as a nonsense text. “It's not Latin, though it looks like it, 
                        and it actually says nothing,” Before & After magazine answered a curious
                         reader, “Its ‘words’ loosely approximate the frequency with which letters o
                         ccur in English, which is why at a glance it looks pretty real.”As Cicero would put it, “Um, not so fast.”
                         The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like 
                         Latin because in its youth, centuries ago, it was Latin.
                        Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous 
                        filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur—a genuine, albeit rare, Latin word. Consulting a Latin dictionary led McClintock to a passage from De Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text from the Roman philosopher Cicero.</p>
                    </BackSide>
                </Flippy>
                </div>
            
                <div className=" about-text">
                <div className="about-text">
    <div className="container">
    <AnimatedOnScroll animationIn="fadeInLeft" animationInDuration={800}>
        <h2>Our Story</h2>
        <hr/>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type 
             specimen book. . It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in 
              the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
              and more recently with desktop publishing software like Aldus PageMaker including 
              versions of Lorem Ipsum.</p>
              </AnimatedOnScroll>

              <AnimatedOnScroll animationIn="fadeInRight" animationInDuration={800}>
              <h2>Vision</h2>
              <hr/>
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. 
                  It has roots in a piece of classical Latin literature from 45 BC, making 
                  it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney 
                  College in Virginia, looked up one of the more obscure Latin words, consectetur,
                   from a Lorem Ipsum passage, and going through the cites of the word in classical
                    literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32
                     and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                      written in 45 BC. This book is a treatise on the theory of ethics, very popular during the 
                      Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32..</p>
            </AnimatedOnScroll>

            <AnimatedOnScroll animationIn="fadeInLeft" animationInDuration={800}>
                      <h2>Mission</h2>
                      <hr/>
                      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in 
                          some form, by injected humour, or randomised words which don't look even slightly believable. If you are going 
                          to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. 
                          All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true 
                          generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures,
                           to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, 
                           or non-characteristic words etc. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) 
                           by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
                           The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32..</p>
                           </AnimatedOnScroll>
    </div>
</div>
                </div>
            </div>
        )
    }
}

export default About
