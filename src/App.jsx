/*
    Homework 5
    Sizhe Liu
    NOTE:
        - the right answer for a random selector will be printed for convenience.
        - the input box is number type, please enter a number via the build-in up and down arrow
        - all selector and combinator titles and descriptions are extracted from
        https://developer.mozilla.org/en-US/
 */

import {useEffect, useState} from 'react'
import {generateSelector} from "./selectorGenerator.js";
import './App.css'
import db from "./myDB.js";

function App() {
    // number of ids, number of classes and pseudo-classes, tag names and pseudo-elements
    const [ans, setAns] = useState([]);
    const [arr, setArr] = useState([]); // contain a string from generator
    const [userX, setUserX] = useState(0);
    const [userY, setUserY] = useState(0);
    const [userZ, setUserZ] = useState(0);
    const [xb, setXb] = useState(false);
    const [yb, setYb] = useState(false);
    const [zb, setZb] = useState(false);
    const [selcombTitle, setSelcombTitle] = useState('');
    const [desc, setDesc] = useState('');

    // helper fn to init selectors and update useState
    function init() {
        const stringArr = generateSelector();
        setArr(stringArr);
        getAns(stringArr);
        setSelcombTitle('');
        setDesc('');
        setXb(false);
        setYb(false);
        setZb(false);
        setUserX(0);
        setUserY(0);
        setUserZ(0);
    }

    // helper fn to refresh all relevant states
    function refresh() {
        init();
    }

    // helper fn to compute the right ans
    function getAns (stringArr) {
        let temp = [0,0,0];
        for (let i = 0; i < stringArr.length; i++) {
            let s = stringArr[i];
            if (s[0] === '#') {
                // id
                temp[0]++;
            } else if (s[0] === '.') {
                // class
                temp[1]++;
            } else if (s[0] === ':') {
                if (s[1] === ':') {
                    // pseudo element
                    temp[2]++;
                } else {
                    // pseudo class
                    temp[1]++;
                }
            } else {
                if (s !== ' ' && s !== ' + ' && s !== ' ~ ' && s !== ' > ') {
                    // check if this is combinator or not, if not it's html tag
                    temp[2]++;
                }
            }
        }
        setAns(temp);
    }

    // validate user input
    function validateInput(i, inputVal) {
        inputVal = Number(inputVal);
        if (i === 0) {
            if (ans[i] !== inputVal) {
                setXb(true);
            } else {
                setXb(false);
            }
        } else if (i === 1) {
            if (ans[i] !== inputVal) {
                setYb(true);
            } else {
                setYb(false);
            }
        } else {
            if (ans[i] !== inputVal) {
                setZb(true);
            } else {
                setZb(false);
            }
        }
    }

    // helper fn to display detail of a string
    function getDetail(element) {
        if (element in db) {
            // check if its in db already
            setSelcombTitle(db[element].title);
            setDesc(db[element].description);
            return;
        }
        // cases: #, '.', or tag
        if (element[0] in db) {
            setSelcombTitle(db[element[0]].title);
            setDesc(db[element[0]].description);
        } else {
            setSelcombTitle(db['tag'].title);
            setDesc(db['tag'].description);
        }
    }

    useEffect(() => {
        init();
    }, []);

    return (
        <>
            <h1>CSS Quiz</h1>
            <section className='outer-box'>
                <section className='gameplay'>
                    <div className='game-title'>
                        <h2>Specificity</h2>
                        <button id='random-bt' onClick={refresh}>Randomize!</button>
                    </div>
                    <p>Guess the specificity of the following selector.</p>
                    <section className='display-random'>
                        {
                            arr.map((element, index) => (
                                <span key={index} onClick={() => {
                                    getDetail(element);
                                }}>{element}</span>
                            ))
                        }
                    </section>
                    <p>right answer: {ans[0]}, {ans[1]}, {ans[2]}</p>
                    <div className='input-fields'>
                        <input className={xb ? 'bad-input' : ''} type='number' min='0' value={userX}
                               onChange={(event) => {
                            setUserX(Number(event.target.value));
                            // set the value attribute on my input, give em to the input
                            validateInput(0, event.target.value);
                        }} />
                        <input className={yb ? 'bad-input' : ''} type='number' min='0' value={userY}
                               onChange={(event) => {
                            setUserY(Number(event.target.value));
                            validateInput(1, event.target.value);
                        }} />
                        <input className={zb ? 'bad-input' : ''} type='number' min='0' value={userZ}
                               onChange={(event) => {
                            setUserZ(Number(event.target.value));
                            validateInput(2, event.target.value);
                        }} />
                    </div>
                </section>
                <section className='display-explanation'>
                    <h3>{selcombTitle}</h3>
                    <p>{desc}</p>
                </section>
            </section>
        </>
    )
}

export default App