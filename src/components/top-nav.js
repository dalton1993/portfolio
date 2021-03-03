import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function TopNav() {
    return (
        <Container>
            <div className = "topNav" style = {{position:"fixed", top:"0", left:"13rem", right:"13rem", height:'6rem', display:'flex', justifyContent:'center'}}>
                <nav className = "nav-head" style = {{width:"100vw",display:"flex", display:"grid", gridTemplateColumns:"1fr 6fr", alignItems:'center', borderBottom:"1px solid black"}}>
                    <p className = "work-head" style = {{justifySelf:"start", fontFamily: 'Caveat, cursive', fontSize:"30px"}}>available for work</p>
                    <ul className = 'd-flex nav-items' style = {{listStyleType:"none", margin:'0', padding:'0', display:"flex",justifySelf:"end"}}>
                        <li>
                            <Link to = "/"><p>Home</p></Link>
                        </li>

                        <li>
                            <Link to = "/about"><p>About</p></Link>
                        </li>

                        <li>
                            <Link to = "/projects"><p>Projects</p></Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </Container>
    )
}
