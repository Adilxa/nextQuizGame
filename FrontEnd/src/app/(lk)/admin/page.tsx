"use client"
import React, { useEffect } from 'react'
import axios from "axios"

function AdminPage() {

    const getUsers = async () => {
        const res = await axios.get("http://localhost:3001/user")
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div>Adminpage hello</div>
    )
}

export default AdminPage;