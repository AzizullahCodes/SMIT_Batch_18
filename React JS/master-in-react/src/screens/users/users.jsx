import React, { useEffect } from 'react';
import useFetch from '../../custom hooks/useFetch';

const Users = () => {

    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    // const { data, err, loading } = useFetch(apiUrl);

    if (loading) return <h1> Loading...! </h1>
    if (err) {
        console.log('Err: ', err);
        return <h1> Err while fetching api data </h1>
    }

    if (data) {
        console.log('Success: ', data);
    }

    return (
        <div>
            <h1> Users Screen! </h1>
        </div>
    );
};

export default Users;