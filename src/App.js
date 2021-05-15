import React, { useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import { login, logout, selectUser } from './features/userSlice'
import { useDispatch, useSelector } from 'react-redux';
import db, { auth } from './firebase';
import Questions from './components/Questions';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Rules from './components/Rules';
import Leaderboard from './components/Leaderboard';

function App() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch()

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                dispatch(login({
                    uid: authUser.uid,
                    photo: authUser.photoURL,
                    email: authUser.email,
                    displayName: authUser.displayName,
                }))

                var levRef = db.collection('users').doc(authUser.uid)
                levRef.get().then((doc) => {
                    if (doc.exists) {

                    }
                    else {
                        db.collection('users').doc(user.uid).set({
                            level: 0
                        })
                    }
                })


                db.collection('scores').doc(authUser.uid).set({
                    score: 0,
                    player: user.displayName
                })
            }
            else {
                dispatch(logout())
            }
        })
    }, [dispatch])

    return (
        <div className="App">
            {user ?
                (
                    <>
                        <Router>
                            <Navbar />
                            <Switch>
                                <Route path="/" component={Questions} exact></Route>
                                <Route path="/rules" component={Rules} exact></Route>
                                <Route path="/leaderboard" component={Leaderboard} exact></Route>
                            </Switch>
                        </Router>
                    </>
                ) :
                (
                    <Login />
                )
            }
        </div>
    );
}

export default App;
