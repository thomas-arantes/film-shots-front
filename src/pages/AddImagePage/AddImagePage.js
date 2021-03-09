import React from "react" 
import useProtectedPage from "../../hooks/useProtectedPage"

const AddImagePage = () => {
    useProtectedPage()
    return (
        <div>
            <h1> AddImagePage</h1>
        </div>
    )
}

export default AddImagePage