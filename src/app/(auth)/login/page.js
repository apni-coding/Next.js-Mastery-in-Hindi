"use client"

import { useRouter } from "next/navigation"



export default function Login() {

    const router = useRouter()

    const handleLogin = () => {
        router.push("/about")
    }

    return (
        <>
            <h1>Login Page</h1>
            <button onClick={handleLogin}>Login</button>
        </>
    )
}