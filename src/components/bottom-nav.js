import React from 'react';
import { Link } from "react-router-dom";

export default function BottomNav() {
    return (
        <div className = "topNav bottom" style = {{position:"fixed", bottom:"0", left:"13rem", right:"13rem", height:'6rem', display:'flex', justifyContent:'center'}}>
            <nav style = {{width:"100vw", display:"flex", justifyContent:"flex-end", alignItems:'center', borderTop:"1px solid black"}} className = "btm-nav">
                <ul style = {{listStyleType:"none", display:"flex", padding:"0"}}>
                    <li className = "min-logos">
                        <div className = "d-flex justify-content-end align-items-center" style = {{width:"8rem", height:"8rem", background:"#e5d5dc", marginBottom:'80px'}}>
                            <div className = "icon-wrap d-flex justify-content-center align-items-center" style = {{width:"7rem", height:"7rem", borderRadius:"50%", background:"#100c0b"}}>
                                <i class="fas fa-chess-knight fa-4x"></i>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
