import React, { Component } from 'react'
import Avatar from '../../img/avatar.jpg'
import {AnimatedOnScroll} from "react-animated-css-onscroll";
import "animate.css/animate.min.css";
// import Pagination from '../../Pagination';
import './Team.css';

export class Team extends Component {
    render() {
        return (
            <div className="teams">
               <h3>Team</h3>
               <hr/>
               <div className="row mt-4">
                   <Photos photo={photoObj[0].photo} title={photoObj[0].title} position={photoObj[0].position} ></Photos>
                   <Photos photo={photoObj[1].photo} title={photoObj[1].title} position={photoObj[1].position} ></Photos>
                   <Photos photo={photoObj[2].photo} title={photoObj[2].title} position={photoObj[2].position} ></Photos>
                   <Photos photo={photoObj[3].photo} title={photoObj[3].title} position={photoObj[3].position} ></Photos>
                   <Photos photo={photoObj[4].photo} title={photoObj[4].title} position={photoObj[4].position} ></Photos>
                   <Photos photo={photoObj[5].photo} title={photoObj[5].title} position={photoObj[5].position} ></Photos>
                   <Photos photo={photoObj[6].photo} title={photoObj[6].title} position={photoObj[6].position} ></Photos>
                   <Photos photo={photoObj[7].photo} title={photoObj[7].title} position={photoObj[7].position} ></Photos>
                   <Photos photo={photoObj[8].photo} title={photoObj[8].title} position={photoObj[8].position} ></Photos>
                   <Photos photo={photoObj[9].photo} title={photoObj[9].title} position={photoObj[9].position} ></Photos>
                   <Photos photo={photoObj[10].photo} title={photoObj[10].title} position={photoObj[10].position} ></Photos>
                   <Photos photo={photoObj[11].photo} title={photoObj[11].title} position={photoObj[11].position} ></Photos>
               </div>
            </div>
        )
    }
}

const photoObj = [
    {
        photo: <img src={Avatar} alt=""/>,
        title: "Lorem Ipsum",
        position: "Founder"
    },
    {
        photo: <img src={Avatar} alt=""></img>,
        title: "Lorem Ipsum",
        position: 'Software Developer'
    },
    {
        photo: <img src={Avatar} alt=""></img>,
        title: "Lorem Ipsum",
        position: 'Manager'
    },
    {
        photo: <img src={Avatar} alt=""></img>,
        title: "Lorem Ipsum",
        position: 'Designer'
    },
    {
        photo: <img src={Avatar} alt=""></img>,
        title: "Lorem Ipsum",
        position: 'Designer'
    },
    {
        photo: <img src={Avatar} alt=""></img>,
        title: "Lorem Ipsum",
        position: 'Software Developer'
    },
    {
        photo: <img src={Avatar} alt=""></img>,
        title: "Lorem Ipsum",
        position: 'Software Developer'
    },
    {
        photo: <img src={Avatar} alt=""></img>,
        title: "Lorem Ipsum",
        position: 'Software Developer'
    },
    {
        photo: <img src={Avatar} alt=""></img>,
        title: "Lorem Ipsum",
        position: 'Software Architect'
    },
    {
        photo: <img src={Avatar} alt=""></img>,
        title: "Lorem Ipsum",
        position: 'Team Lead'
    },
    {
        photo: <img src={Avatar} alt=""></img>,
        title: "Lorem Ipsum",
        position: 'Project Manager'
    },
    {
        photo: <img src={Avatar} alt=""></img>,
        title: "Lorem Ipsum",
        position: 'Database Administrator'
    },
]

class Photos extends Component{
    render(){
        return(
            <div className="mr-3 mt-3 mb-3">
                  <AnimatedOnScroll animationIn="rotateIn" animationInDuration={800}>
                <span>
                    {this.props.photo}
                </span>
                </AnimatedOnScroll>
                <h4 className="mt-2">{this.props.title}</h4>
                <p>{this.props.position}</p>
              
            </div>
        )
    }
}





export default Team
