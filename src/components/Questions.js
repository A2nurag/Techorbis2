import React, { useEffect, useState } from 'react'
import db, { auth } from '../firebase';
import './Questions.css'
import { login, logout, selectUser } from '../features/userSlice'
import { useDispatch, useSelector } from 'react-redux';

function Questions() {
    const [num, setNum] = useState(0);
    const user = useSelector(selectUser);

    const [hint1, setHint1] = useState('')
    const [hint2, setHint2] = useState('')
    const [hint3, setHint3] = useState('')
    const [hint4, setHint4] = useState('')
    const [coord, setCoord] = useState('')
    const [answer, setAnswer] = useState('')
    const [id, setId] = useState()
    const [response, setResponse] = useState('')
    const [points, setPoints] = useState(15)

    useEffect(async () => {
        db.collection('users').doc(user.uid).get().then((ref) => {
            setNum(ref.data().level)
            console.log(num)
        })

        db.collection('questions').onSnapshot((snapshot) => {
            setHint1(snapshot.docs[num].data().hint1)
            setHint2(snapshot.docs[num].data().hint2)
            setHint3(snapshot.docs[num].data().hint3)
            setHint4(snapshot.docs[num].data().hint4)
            setCoord(snapshot.docs[num].data().coordinates)
            setAnswer(snapshot.docs[num].data().answer)
            setId(snapshot.docs[num].id)
        })
    }, [num])

    const handleChange = () => {
        if (answer === response) {

            db.collection('scores').doc(user.uid).update({
                player: user.displayName,
                score: points * num + points
            })

            setResponse('')
            db.collection('users').doc(user.uid).set({
                level: (num + 1) % 11
            })
            setNum((num + 1) % 2);
            setPoints(15)

        }
    }

    return (
        <div className='questions'>
            <h3>{hint1}</h3>
            <h3>{hint2}</h3>
            <h3>{hint3}</h3>
            <h3>{hint4}</h3>
            <h3>{coord}</h3>
            <input type="text" value={response} placeholder='Your answer goes here...' onChange={(e) => setResponse(e.target.value)} />
            <button onClick={handleChange}>Submit</button>
        </div>
    )
}

export default Questions
