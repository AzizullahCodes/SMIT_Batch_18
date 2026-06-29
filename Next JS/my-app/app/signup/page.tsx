'use client';

import React, { useState } from 'react';
import { app, auth } from "@/src/utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {

    const [formStates, setFormStates] = useState({
        email: "",
        password: ''
    });

    const submit = async () => {

        const saveUser = await createUserWithEmailAndPassword(
            auth,
            formStates.email,
            formStates.password
        );
        console.log('User res: ', saveUser);

        setFormStates({
            email: "",
            password: ""
        });
    }

    return (
        <div>
            <h1> Sign Up Screen! </h1>

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

            <button onClick={submit}> Save User </button>
        </div>
    )
}

export default SignUp