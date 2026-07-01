'use client';

import React, { useState } from 'react';
import { auth } from "@/src/utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const LogIn = () => {

    const [formStates, setFormStates] = useState({
        email: "",
        password: ''
    });

    const submit = async () => {
        const res = await signInWithEmailAndPassword(
            auth,
            formStates.email,
            formStates.password
        );
        console.log('Login success: ', res);
    };

    return (
        <div>
            <h1> Log In Screen! </h1>

            <input
                type="email"
                placeholder='Enter email'
                value={formStates.email}
                onChange={(e) => setFormStates({ ...formStates, email: e.target.value })}
            />

            <input
                type="password"
                placeholder='*****'
                value={formStates.password}
                onChange={(e) => setFormStates({ ...formStates, password: e.target.value })}
            />

            <button onClick={submit}> Login User </button>
        </div>
    )
}

export default LogIn;