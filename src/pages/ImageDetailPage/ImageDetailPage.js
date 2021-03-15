import { Typography } from "@material-ui/core"
import React from "react" 
import { useParams } from "react-router"
import { BASE_URL } from "../../constants/url"
import useProtectedPage from "../../hooks/useProtectedPage"
import useRequestData from "../../hooks/useRequestData"
import { ImageContainer } from "./styled"

const ImageDetailPage = () => {
    useProtectedPage()
    const params = useParams()

    const image = useRequestData({}, `${BASE_URL}image/${params.id}`)
    console.log(image)
    
    return (
        <div>
            <ImageContainer>
                <img src = {image.file} />
                
            </ImageContainer>
            <Typography
                    variant={'h4'}
                    align={'center'}>
                    {image.subtitle}
                </Typography>
        </div>
    )
}

export default ImageDetailPage