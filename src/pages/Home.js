import React from 'react'
import { useEffect, useState } from 'react'
import BlueButton from '../components/BlueButton'
import NavbarComponent from '../components/NavbarComponent'

const Home = () => {
    const [tests, setTests] = useState([])

    useEffect(() => {
        getTests()
    }, [])

    const getTests = async () => {
        const res = await fetch('http://localhost:4000/tests/', {
            method: 'GET',
        })
        const data = await res.json()

        setTests(data)
    }

    return (
        <>
            <NavbarComponent />
            <div>This is the Home Page</div>
            {tests.map((test) => (
                <>
                    <p>{test.name}</p>
                    <p>{test.email}</p>
                </>
            ))}
            <BlueButton />
        </>
    )
}

export default Home
