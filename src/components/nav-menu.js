import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './style.css';
import Modal from 'react-bootstrap/Modal';

export default function NavMenu() {

    const [modalShow, setModalShow] = useState(false);

    const handleClose = () => setModalShow(false);
    const handleShow = () => setModalShow(true);

    return (
        
        <div>  

        <div style = {{height:'100vh', position:'fixed', left:'0', width:'6rem', zIndex:'100', borderRight:'1px solid rgb(21, 47, 71)', boxShadow:'inset 2px 2px 7px black'}} className='main-nav'>

           
            <div style = {{width:"4rem", height:'40%', margin:'auto', paddingTop:'15px'}}>
                <Link to = '/'>
                    <div className = "logo" style = {{border:'1px solid black', borderRadius:'50%', display:'flex', justifyContent:'center', alignItems:'center', width:'4rem', height:'4rem', margin:'auto'}}>
                        <p style = {{margin:'auto'}}>D</p>
                    </div>
                </Link>
            </div>
            

            <ul className='d-flex flex-column align-items-center justify-content-end contact' style = {{listStyleType:'none', height:'50%', padding:'0'}}>

                <div onClick={() => setModalShow(true)} className = 'd-flex align-items-center justify-content-center'>
                <li className='text-center d-flex align-items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
                            <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                        </svg>
                </li>
                </div>

                <a href = 'https://www.linkedin.com/in/dalton-heck-a15184169/' target="_blank" className = 'd-flex align-items-center justify-content-center'>
                <li className='text-center d-flex align-items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                        </svg>
                </li>
                </a>

                <a href = 'https://github.com/dalton1993' target="_blank" className = 'd-flex align-items-center justify-content-center'>
                <li className='text-center d-flex align-items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                </li>
                </a>
            </ul>
        </div>

            <Modal
                show={modalShow} 
                onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header className = "d-flex justify-content-end">
                    <svg onClick = {handleClose} xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" style = {{cursor:"pointer"}}>
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </Modal.Header>
                <Modal.Body className = "d-flex flex-column align-items-center justify-content-center">

                    <svg xmlns="http://www.w3.org/2000/svg" width="4rem" height="4rem" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                    </svg>
                    <p style = {{marginTop:'10px', marginBottom:'30px',fontFamily: 'Roboto Slab, serif', fontSize:'20px'}}>
                        423.494.5888
                    </p>

                    <svg xmlns="http://www.w3.org/2000/svg" width="4rem" height="4rem" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                    </svg>
                    <p style = {{marginTop:'10px', marginBottom:'30px',fontFamily: 'Roboto Slab, serif', fontSize:'20px'}}>
                        dalton.heck@icloud.com
                    </p>
                </Modal.Body>
            </Modal>

        </div>

        
    )
}
