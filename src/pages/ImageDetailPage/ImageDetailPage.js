import React from "react" 
import useProtectedPage from "../../hooks/useProtectedPage"

const ImageDetailPage = () => {
    useProtectedPage()
    return (
        <div>
            <h1> ImageDetailPage</h1>
        </div>
    )
}

export default ImageDetailPage