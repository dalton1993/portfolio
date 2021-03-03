import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavMenu from '../components/nav-menu';
import TopNav from "../components/top-nav";
import BottomNav from "../components/bottom-nav"; 
import BottomMinNav from "../components/btm-min-nav";
import { Container, Row, Col, Carousel } from 'react-bootstrap'; 
import Image1 from '../Images/Screenshot1.png';
import Image2 from '../Images/Screenshot2.png';
import Image3 from '../Images/Screenshot4.png';
import Image4 from '../Images/Screenshot3.png';
import Image5 from '../Images/Screenshot11.png';
import Image6 from "../Images/Screenshot5.png"; 
import Image7 from "../Images/Screenshot13.png";
import Image8 from "../Images/Screenshot8.png";
import Image9 from "../Images/Screenshot9.png";
import Image10 from "../Images/Screenshot10.png";
import express from '../Images/expressjs.png';

export default function Projects() {

    const [ opacity1, setOpacity1 ] = useState('');
    const [ infoOpacity1, setInfoOpacity1 ] = useState(0);
    const [ opacity2, setOpacity2 ] = useState('');
    const [ infoOpacity2, setInfoOpacity2 ] = useState(0);
    const [ opacity3, setOpacity3 ] = useState('');
    const [ infoOpacity3, setInfoOpacity3 ] = useState(0);
    const [ imgArr1, setArr1 ] = useState([Image2, Image4, Image5]);
    const [ imgArr2, setArr2 ] = useState([Image3, Image6, Image7]);
    const [ imgArr3, setArr3 ] = useState([Image8, Image9, Image10]);
    const [ project1Show, setProject1Show ] = useState("block");
    const [ project2Show, setProject2Show ] = useState("none");
    const [ project3Show, setProject3Show ] = useState("none");
    const [ border1, setBorder1 ] = useState("1px solid red");
    const [ border2, setBorder2 ] = useState("none");
    const [ border3, setBorder3 ] = useState("none");
    const [ arr1count, setArr1Count ] = useState(0);
    const [ arr2count, setArr2Count ] = useState(0);
    const [ arr3count, setArr3Count ] = useState(0);

    const handleImagePlus = (index) => {
        if(index < 2){
            setArr1Count(index + 1)
        } else {
            setArr1Count(0);
        }
    }

    const handleImageMinus = (index) => {
        if(index > 0){
            setArr1Count(index - 1)
        } else {
            setArr1Count(2)
        }
    }

    const handleImagePlus2 = (index) => {
        if(index < 2){
            setArr2Count(index + 1)
        } else {
            setArr2Count(0);
        }
    }

    const handleImageMinus2 = (index) => {
        if(index > 0){
            setArr2Count(index - 1)
        } else {
            setArr2Count(2)
        }
    }

    const handleImagePlus3 = (index) => {
        if(index < 2){
            setArr3Count(index + 1)
        } else {
            setArr3Count(0);
        }
    }

    const handleImageMinus3 = (index) => {
        if(index > 0){
            setArr3Count(index - 1)
        } else {
            setArr3Count(2)
        }
    }

    return (
            <Container fluid className = 'bkg'>
                <NavMenu/>
                <TopNav/>
                <BottomNav/>
                <BottomMinNav/>
                
                    

                <Row style = {{height:"100vh"}} className = "d-flex flex-column justify-content-center ">

                <Col lg = {12} style = {{marginTop:"20px"}} className = "d-flex justify-content-center align-items-center w-100">
                        <div  className = "proj-nav">
                        <ul style = {{listStyleType:"none", padding:"0", display:"flex", fontFamily:'Roboto Slab, serif'}}>
                            <li style = {{cursor:"pointer", padding:"10px"}}>
                                <p style = {{borderBottom:border1, padding:"8px", margin:"0" }}
                                    onClick = {()=>{
                                        setProject1Show("block");
                                        setProject2Show("none");
                                        setProject3Show("none");
                                        setBorder1("1px solid red");
                                        setBorder2("none");
                                        setBorder3("none");
                                    }}
                                >Core Ultra</p>
                            </li>

                            <li style = {{cursor:"pointer", padding:"10px"}}>
                                <p style = {{borderBottom:border2, padding:"8px", margin:"0"}}
                                    onClick = {()=>{
                                        setProject1Show("none");
                                        setProject2Show("block");
                                        setProject3Show("none");
                                        setBorder1("none");
                                        setBorder2("1px solid red");
                                        setBorder3("none");
                                    }}
                                >Electron
                                </p>
                            </li>

                            <li style = {{cursor:"pointer", padding:"10px" }}>
                               <p style = {{borderBottom:border3, padding:"8px", margin:"0"}}
                                onClick = {()=>{
                                    setProject1Show("none");
                                    setProject2Show("none");
                                    setProject3Show("block");
                                    setBorder1("none");
                                    setBorder2("none");
                                    setBorder3("1px solid red");
                                }}
                               >Gallery</p>
                            </li>
                        </ul>
                    </div>
                </Col>

                    <Col lg = {12} md = {6} className = "d-flex justify-content-center align-items-center w-100">

                    <div className = "proj-wrap" style = {{ maxWidth:"50rem", maxHeight:"30rem", display:project1Show
                    }}>

                    <div style = {{position:'relative'}}>
                        <a href = 'https://coreultra.herokuapp.com/' target="_blank" onMouseEnter = {()=>{
                            setOpacity1('project-image')
                            setInfoOpacity1(1)
                        }} 
                            
                            onMouseLeave = {()=>{
                                setOpacity1('')
                                setInfoOpacity1(0)
                            }}>
                            <div style = {{borderRadius:'15px', background:'#100c0b', position:'relative'}} className = 'd-flex flex-column justify-content-center align-items-center'>

                                    <h1 style = {{position:'absolute', top:'20%', left:'50%', transform:'translate(-50%, -50%)', color:'white', fontSize:"30px", opacity:infoOpacity1}}>
                                        Core Ultra
                                    </h1>

                                    <ul style = {{position:'absolute', padding:'0', top:'45%', left:'50%', transform:'translate(-50%, -50%)', color:'white', background:'white', listStyleType:'none', opacity:infoOpacity1}} className = 'd-flex'>
                                        <li className = 'p-2'>
                                            <img src="https://img.icons8.com/color/48/000000/mongodb.png"/>
                                        </li>

                                        <li className = 'p-2'>
                                            <img src = {express} style = {{width:'48px', height:'48px', objectFit:'contain'}}/>
                                        </li>

                                        <li className = 'p-2'>
                                            <img src = "https://img.icons8.com/officel/48/000000/react.png"/>
                                        </li>

                                        <li className = 'p-2'>
                                            <img src="https://img.icons8.com/color/48/000000/redux.png"/>
                                        </li>

                                        <li className = 'p-2'>
                                            <img src="https://img.icons8.com/color/48/000000/nodejs.png"/>
                                        </li>

                                        <li className = 'p-2'>
                                            <img src="https://img.icons8.com/color/48/000000/bootstrap.png"/>
                                        </li>
                                    </ul>

                                    <div style = {{position:'absolute', bottom:'20px', left:'50%', transform:'translate(-50%, -50%)', color:'white', fontSize:"13px", opacity:infoOpacity1}}>
                                        <p style = {{padding:'0', margin:"0", textAlign:"center"}}>Sample username: test</p>
                                        <p style = {{padding:'0', margin:"0",textAlign:"center"}}>Sample password: test</p>
                                    </div>

                                    <div style = {{position:'absolute', top:'70%', left:'50%', transform:'translate(-50%, -50%)', color:'white', listStyleType:'none', opacity:infoOpacity1}} className = 'd-flex'
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-hand-index" viewBox="0 0 16 16" style = {{color:'white'}}>
                                            <path fill-rule="evenodd" d="M6.75 1a.75.75 0 0 0-.75.75V9a.5.5 0 0 1-1 0v-.89l-1.003.2a.5.5 0 0 0-.399.546l.345 3.105a1.5 1.5 0 0 0 .243.666l1.433 2.15a.5.5 0 0 0 .416.223h6.385a.5.5 0 0 0 .434-.252l1.395-2.442a2.5 2.5 0 0 0 .317-.991l.272-2.715a1 1 0 0 0-.995-1.1H13.5v1a.5.5 0 0 1-1 0V7.154a4.208 4.208 0 0 0-.2-.26c-.187-.222-.368-.383-.486-.43-.124-.05-.392-.063-.708-.039a4.844 4.844 0 0 0-.106.01V8a.5.5 0 0 1-1 0V5.986c0-.167-.073-.272-.15-.314a1.657 1.657 0 0 0-.448-.182c-.179-.035-.5-.04-.816-.027l-.086.004V8a.5.5 0 0 1-1 0V1.75A.75.75 0 0 0 6.75 1zM8.5 4.466V1.75a1.75 1.75 0 0 0-3.5 0v5.34l-1.199.24a1.5 1.5 0 0 0-1.197 1.636l.345 3.106a2.5 2.5 0 0 0 .405 1.11l1.433 2.15A1.5 1.5 0 0 0 6.035 16h6.385a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.272-2.715a2 2 0 0 0-1.99-2.199h-.582a5.184 5.184 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.634 2.634 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046l-.048.002zm2.094 2.025z"/>
                                        </svg>
                                    </div>

                                    
                                    <img src = {imgArr1[arr1count]} style = {{maxWidth:'100%', maxHeight:'100%',  objectFit:'cover', borderRadius:'15px', boxShadow:'2px 2px 8px black', cursor:'pointer', transition:'opacity 0.5s'}} className = {opacity1}/>

                            </div>
                        </a>
                                    <div className = "arrow" style = {{position:'absolute', right:'2rem', top:'50%', cursor:'pointer'}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" style = {{color:'#5c504a', width:"3rem", height:"3rem"}} fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16" onClick = {()=>handleImagePlus(arr1count)}>
                                            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z"/>
                                        </svg>
                                    </div>

                                    <div className = "arrow" style = {{position:'absolute', left:'2rem', top:'50%', cursor:'pointer'}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" style={{color:'#5c504a'}}fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16" onClick = {()=>handleImageMinus(arr1count)}>
                                        <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                        <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                                        </svg>
                                    </div>
                        </div>
                    </div>
                    

                    
                <div className = "proj-wrap" style = {{display:project2Show, maxWidth:"50rem", maxHeight:"30rem"}}>
                    <div style = {{position:'relative'}}>

                    <a href = 'https://electron-commerce.herokuapp.com/' target="_blank" onMouseEnter = {()=>{
                            setOpacity2('project-image')
                            setInfoOpacity2(1)
                        }} 
                            
                            onMouseLeave = {()=>{
                                setOpacity2('')
                                setInfoOpacity2(0)
                            }}>
                            <div style = {{maxWidth:'50rem', maxHeight:'30rem', borderRadius:'15px', background:'#100c0b', position:'relative'}} className = 'd-flex flex-column justify-content-center align-items-center'>

                                    <h1 style = {{position:'absolute', top:'20%', left:'50%', transform:'translate(-50%, -50%)', color:'white', opacity:infoOpacity2, fontSize:"30px"}}>
                                        Electron
                                    </h1>

                                    <ul style = {{position:'absolute', padding:'0', top:'45%', left:'50%', transform:'translate(-50%, -50%)', color:'white', background:'white', listStyleType:'none', opacity:infoOpacity2}} className = 'd-flex'>
                                        <li className = 'p-2'>
                                            <img src="https://img.icons8.com/color/48/000000/mongodb.png"/>
                                        </li>

                                        <li className = 'p-2'>
                                            <img src = {express} style = {{width:'48px', height:'48px', objectFit:'contain'}}/>
                                        </li>

                                        <li className = 'p-2'>
                                            <img src = "https://img.icons8.com/officel/48/000000/react.png"/>
                                        </li>

                                        <li className = 'p-2'>
                                            <img src="https://img.icons8.com/color/48/000000/redux.png"/>
                                        </li>

                                        <li className = 'p-2'>
                                            <img src="https://img.icons8.com/color/48/000000/nodejs.png"/>
                                        </li>

                                        <li className = 'p-2'>
                                            <img src="https://img.icons8.com/color/48/000000/bootstrap.png"/>
                                        </li>
                                    </ul>

                                    <div style = {{position:'absolute', bottom:'20px', left:'50%', transform:'translate(-50%, -50%)', color:'white', fontSize:"13px", opacity:infoOpacity2}}>
                                        <p style = {{padding:'0', margin:"0", textAlign:"center"}}>Sample username: first1_last1@gmail.com</p>
                                        <p style = {{padding:'0', margin:"0",textAlign:"center"}}>Sample password: password</p>
                                    </div>

                                    <div style = {{position:'absolute', top:'70%', left:'50%', transform:'translate(-50%, -50%)', color:'white', listStyleType:'none', opacity:infoOpacity2}} className = 'd-flex'
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-hand-index" viewBox="0 0 16 16" style = {{color:'white'}}>
                                            <path fill-rule="evenodd" d="M6.75 1a.75.75 0 0 0-.75.75V9a.5.5 0 0 1-1 0v-.89l-1.003.2a.5.5 0 0 0-.399.546l.345 3.105a1.5 1.5 0 0 0 .243.666l1.433 2.15a.5.5 0 0 0 .416.223h6.385a.5.5 0 0 0 .434-.252l1.395-2.442a2.5 2.5 0 0 0 .317-.991l.272-2.715a1 1 0 0 0-.995-1.1H13.5v1a.5.5 0 0 1-1 0V7.154a4.208 4.208 0 0 0-.2-.26c-.187-.222-.368-.383-.486-.43-.124-.05-.392-.063-.708-.039a4.844 4.844 0 0 0-.106.01V8a.5.5 0 0 1-1 0V5.986c0-.167-.073-.272-.15-.314a1.657 1.657 0 0 0-.448-.182c-.179-.035-.5-.04-.816-.027l-.086.004V8a.5.5 0 0 1-1 0V1.75A.75.75 0 0 0 6.75 1zM8.5 4.466V1.75a1.75 1.75 0 0 0-3.5 0v5.34l-1.199.24a1.5 1.5 0 0 0-1.197 1.636l.345 3.106a2.5 2.5 0 0 0 .405 1.11l1.433 2.15A1.5 1.5 0 0 0 6.035 16h6.385a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.272-2.715a2 2 0 0 0-1.99-2.199h-.582a5.184 5.184 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.634 2.634 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046l-.048.002zm2.094 2.025z"/>
                                        </svg>
                                    </div>

                                    
                                    <img src = {imgArr2[arr2count]} style = {{width:'100%', height:'100%', objectFit:'cover', borderRadius:'15px', boxShadow:'2px 2px 8px black', cursor:'pointer', transition:'opacity 0.5s'}} className = {opacity2}/>
                                
                            </div>
                        </a>
                                    <div className = "arrow" style = {{position:'absolute', right:'2rem', top:'50%', cursor:'pointer'}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" style = {{color:'#5c504a'}} fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16" onClick = {()=>handleImagePlus2(arr2count)}>
                                            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z"/>
                                        </svg>
                                    </div>

                                    <div className = "arrow" style = {{position:'absolute', left:'2rem', top:'50%', cursor:'pointer'}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" style={{color:'#5c504a', width:"3rem", height:"3rem"}}fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16" onClick = {()=>handleImageMinus2(arr2count)}>
                                        <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                        <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                                        </svg>
                                    </div>
                        </div>
                    </div>
                   

                    
                    <div className = "proj-wrap" style = {{display:project3Show, maxWidth:"50rem", maxHeight:"30rem"
                }}>
                    <div style = {{position:'relative'}}>
                    <a href = 'https://gallerypictures.herokuapp.com/' target="_blank" onMouseEnter = {()=>{
                            setOpacity3('project-image')
                            setInfoOpacity3(1)
                        }} 
                            
                            onMouseLeave = {()=>{
                                setOpacity3('')
                                setInfoOpacity3(0)
                            }}>
                            <div style = {{maxWidth:'50rem', maxHeight:'30rem', borderRadius:'15px', background:'#100c0b', position:'relative'}} className = 'd-flex flex-column justify-content-center align-items-center'>

                                    <h1 style = {{position:'absolute', top:'20%', left:'50%', transform:'translate(-50%, -50%)', color:'white', fontSize:"30px", opacity:infoOpacity3}}>
                                        Gallery
                                    </h1>

                                    <ul style = {{position:'absolute', top:'45%', left:'50%', padding:'0', transform:'translate(-50%, -50%)', color:'white', background:'white', listStyleType:'none', opacity:infoOpacity3}} className = 'd-flex'>

                                        <li className = 'p-2'>
                                            <img src="https://img.icons8.com/color/48/000000/mongodb.png"/>
                                        </li>

                                        <li className = 'p-2'>
                                            <img src = {express} style = {{width:'48px', height:'48px', objectFit:'contain'}}/>
                                        </li>

                                        <li className = 'p-2'>
                                            <img src="https://img.icons8.com/color/48/000000/nodejs.png"/>
                                        </li>

                                    </ul>

                                    <div style = {{position:'absolute', bottom:'20px', left:'50%', transform:'translate(-50%, -50%)', color:'white', fontSize:"13px", opacity:infoOpacity3}}>
                                        <p style = {{padding:'0', margin:"0", textAlign:"center"}}>Sample username: test</p>
                                        <p style = {{padding:'0', margin:"0",textAlign:"center"}}>Sample password: test</p>
                                    </div>

                                    <div style = {{position:'absolute', top:'70%', left:'50%', transform:'translate(-50%, -50%)', color:'white', listStyleType:'none', opacity:infoOpacity3}} className = 'd-flex'
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-hand-index" viewBox="0 0 16 16" style = {{color:'white'}}>
                                            <path fill-rule="evenodd" d="M6.75 1a.75.75 0 0 0-.75.75V9a.5.5 0 0 1-1 0v-.89l-1.003.2a.5.5 0 0 0-.399.546l.345 3.105a1.5 1.5 0 0 0 .243.666l1.433 2.15a.5.5 0 0 0 .416.223h6.385a.5.5 0 0 0 .434-.252l1.395-2.442a2.5 2.5 0 0 0 .317-.991l.272-2.715a1 1 0 0 0-.995-1.1H13.5v1a.5.5 0 0 1-1 0V7.154a4.208 4.208 0 0 0-.2-.26c-.187-.222-.368-.383-.486-.43-.124-.05-.392-.063-.708-.039a4.844 4.844 0 0 0-.106.01V8a.5.5 0 0 1-1 0V5.986c0-.167-.073-.272-.15-.314a1.657 1.657 0 0 0-.448-.182c-.179-.035-.5-.04-.816-.027l-.086.004V8a.5.5 0 0 1-1 0V1.75A.75.75 0 0 0 6.75 1zM8.5 4.466V1.75a1.75 1.75 0 0 0-3.5 0v5.34l-1.199.24a1.5 1.5 0 0 0-1.197 1.636l.345 3.106a2.5 2.5 0 0 0 .405 1.11l1.433 2.15A1.5 1.5 0 0 0 6.035 16h6.385a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.272-2.715a2 2 0 0 0-1.99-2.199h-.582a5.184 5.184 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.634 2.634 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046l-.048.002zm2.094 2.025z"/>
                                        </svg>
                                    </div>

                                    
                                    <img src = {imgArr3[arr3count]} style = {{width:'100%', height:'100%', objectFit:'cover', borderRadius:'15px', boxShadow:'2px 2px 8px black', cursor:'pointer', transition:'opacity 0.5s'}} className = {opacity3}/>
                                
                            </div>
                        </a>
                                    <div className = "arrow" style = {{position:'absolute', right:'2rem', top:'50%', cursor:'pointer'}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" style = {{color:'white', width:"3rem", height:"3rem"}} fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16" onClick = {()=>handleImagePlus3(arr3count)}>
                                            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z"/>
                                        </svg>
                                    </div>

                                    <div className = "arrow" style = {{position:'absolute', left:'2rem', top:'50%', cursor:'pointer'}}>
                                        <svg class = "arrow" xmlns="http://www.w3.org/2000/svg"  style={{color:'white', width:"3rem", height:"3rem"}}fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16" onClick = {()=>handleImageMinus3(arr3count)}>
                                        <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                        <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                                        </svg>
                                    </div>
                        </div>
                    </div>

            </Col>

            
        </Row>

        </Container>
    )
}
