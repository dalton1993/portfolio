import React from 'react'
import NavMenu from '../components/nav-menu';
import TopNav from "../components/top-nav";
import BottomNav from "../components/bottom-nav";
import BottomMinNav from "../components/btm-min-nav";
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function Home() {
    return (
            <Container fluid className = "bkg">
                <TopNav/>
                <NavMenu/>
                <BottomNav/>
                <BottomMinNav/>
                
                <div className = "me-wrap" style = {{position:"absolute", bottom:"8rem", left:"13rem"}}>
                    <h1 className = 'name'>Dalton</h1>
                    <h1 className = 'name'>Heck</h1>
                    <p className = 'description'>Full Stack Software Developer</p>
                    <p className = 'description2'>dalton.heck@icloud.com || 423.494.5888</p>
                </div>
                
                
                {/*<Row style  = {{height:'100%'}}>
                    <Col lg = {12} className = 'd-flex justify-content-center align-items-center'>
                        <div style = {{width:'50rem', height:'30rem', backgroundColor:'rgba(21, 47, 71, 0.95)', borderRadius:'5px', boxShadow:'2px 3px 8px black', border:'1px solid white'}} className = 'd-flex flex-column justify-content-center align-items-center'>
                            <h1 className = 'text-center' style = {{fontFamily:"Playfair Display, sans-serif", fontSize:'80px', padding:'15px', color:'white'}}>Dalton Heck</h1>
                            <h2 className = 'text-center' style = {{fontFamily:"Popins, sans-serif", color:'white'}}>Full Stack Developer</h2>
                            <p className = 'text-center' style = {{fontFamily:"Roboto, sans-serif", padding:'15px', color:'white', fontSize:'20px'}}>
                                I'm baby yr put a bird on it flannel, gluten-free mumblecore coloring book scenester PBR&B before they sold out shoreditch XOXO pabst 90's seitan. Hashtag helvetica glossier migas, coloring book jean shorts pour-over cronut activated charcoal pitchfork retro stumptown XOXO. Biodiesel tattooed craft beer, tote bag butcher raw denim
                            </p>
                        </div>
                    </Col>
                </Row>*/}
            </Container>
    )
}
