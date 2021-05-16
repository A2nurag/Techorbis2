import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { db, auth } from '../firebase';


function Navbar() {

    const [clicked, setClicked] = useState(false);
    const user = useSelector(selectUser)

    return (
        <>
            <div className="Nav">
                <div className="NavContainer">
                    <div className="NavLogo">
                        <Link className="NavLinks" to='/' >
                            <h2>TO2.0</h2>
                        </Link>
                    </div>

                    <div className="menu-icon" onClick={() => setClicked(!clicked)} >
                        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>

                    <ul className={clicked ? "NavMenu active" : "NavMenu"} onClick={() => setClicked(!clicked)} >
                        <li className="NavItems">
                            <Link className="NavLinks" to='/'>
                                Techorbis
                            </Link>
                        </li>

                        <li className="NavItems">
                            <Link className="NavLinks" to='/home'>
                                Home
                            </Link>
                        </li>

                        <li className="NavItems">
                            <Link className="NavLinks" to='/rules'>
                                Rules
                            </Link>
                        </li>

                        <li className="NavItems">
                            <Link className="NavLinks" to='/leaderboard'>
                                Leaderboard
                            </Link>
                        </li>
                        {
                            user && <li>
                                <Avatar className="navbar__profilePic" src={user.photo} onClick={() => auth.signOut()} />
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
