import React from 'react'
import Layout from '../../components/Layout/Layout'
import "../../styles/AuthStyles.css";
import { Link } from 'react-router-dom'

const Register = () => {
    return (
            <div className="container">
                <div className="form">
                    <div className="contact-info">
                        <h3 className="title">HELLO 👋</h3>
                        <h3 className="title">SMIT</h3>
                        <h3 className="title">STUDENT</h3>

                        <br />
                        <p className="text">
                            Please register
                            <br />
                            to start managing your
                            <br />
                            fees efficiently....
                        </p>
                    </div>

                    <div className="contact-form">
                        <span className="circle one" />
                        <span className="circle two" />
                        <form action="#" id="form">
                            <h3 className="title">Register</h3>
                            <p className="text-para">Don’t have an account? <span><Link to='/' style={{ color: "#8AC642", textDecoration: "none" }}>Create an account, </Link></span> it takes less than a minute</p>
                            <div className="input-container">
                                <input type="text" name="name" className="input" id="fullname" autoComplete="off" placeholder="Full Name" />
                            </div>
                            <div className="input-container">
                                <input type="email" name="email" className="input" id="email" autoComplete="off" placeholder="Email Address" />
                            </div>
                            <div className="input-container">
                                <input type="number" name="phone" className="input" id="phonenum" autoComplete="off" placeholder="Phone Number" />
                            </div>
                            <div className="input-container">
                                <input type="password" name="phone" className="input" id="phonenum" autoComplete="off" placeholder="Password" />
                            </div>
                            <div className="input-container">
                                <input type="text" name="phone" className="input" id="phonenum" autoComplete="off" placeholder="Trainer" />
                            </div>
                            <div className="input-container">
                                <input type="number" name="phone" className="input" id="phonenum" autoComplete="off" placeholder="Batch" />
                            </div>
                            <div className="input-container">
                                <input type="number" name="phone" className="input" id="phonenum" autoComplete="off" placeholder="Rollno" />
                            </div>

                            <input type="submit" defaultValue="Send" className="btn" />
                        </form>
                    </div>
                </div>
            </div>
    );
};

export default Register;