import React from 'react'
import NavMenu from '../components/nav-menu';
import TopNav from "../components/top-nav";
import BottomNav from "../components/bottom-nav";
import BottomMinNav from "../components/btm-min-nav";
import { Container, Row, Col } from 'react-bootstrap'; 
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div>
            <Container fluid className = "bkg">
                <NavMenu/>
                <TopNav/>
                <BottomNav/>
                <BottomMinNav/>

                
                    <div className = "about-wrap">
                        <h1>Hello!</h1>
                        <p>
                        I'm a full stack developer interested in builing exciting technologies and bringing innovative ideas to life through the medium of the web. Development is an ever-changing enterprise, new technologies constantly emerging and evolving, and I love staying up to date with the latest trends.
                        </p>

                        <p>
                        Feel free to sample my work and reach out via email or phone if you have questions or are interested in building a project together!  
                        </p>

                    </div>
                    
            </Container>
            
        </div>
    )
}
