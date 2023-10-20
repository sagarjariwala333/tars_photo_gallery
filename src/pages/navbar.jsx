import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux'
import { listImageRequest } from "../redux/image/actions";

const NavBar = () => {

    const [searchquery, setSearchQuery] = useState("")
    const dispatch = useDispatch();

    const handleSearchChange = (e) => {
        console.log("e target value", e.target.value)
        setSearchQuery(e.target.value)
    }

    useEffect(()=>{
        dispatch(listImageRequest(searchquery,1))
    },[searchquery])

    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <form className="d-flex mx-auto w-50">
                        <input value={searchquery} onChange={handleSearchChange} className="form-control me-2" type="search" placeholder="Type anything" aria-label="Search" />
                    </form>
                </div>
            </nav>
        </>
    )
}

export default NavBar;
