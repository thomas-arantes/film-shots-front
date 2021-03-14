import React from "react" 
import { useHistory } from "react-router"
import ImageCard from "../../components/ImageCards/ImageCard"
import { BASE_URL } from "../../constants/url"
import useProtectedPage from "../../hooks/useProtectedPage"
import useRequestData from "../../hooks/useRequestData"
import { CardListContainer } from "./styled"
import { Button } from "@material-ui/core"
import { goToAddImage, goToDetail } from "../../routes/coordinator"


const FeedPage = () => {
    useProtectedPage()
    const history = useHistory()
    const images = useRequestData([], `${BASE_URL}image/all `)
    
    const OnClickCard = (id) => {
        goToDetail(history, id)
    }

    const imageCards = images.map((image) => {
        return (
                <ImageCard
                    key = {image.id} 
                    subtitle = {image.subtitle}
                    image = {image.file}
                    onClick = {() => OnClickCard(image.id)}
                />
        )
    })
    return (
        <div>
            <CardListContainer>
                {imageCards}
            </CardListContainer>
            <Button
                onClick = {() => goToAddImage(history)}
                variant = {"contained"}
                color = {"primary"}
                width = "300px"
                >
                Adicionar nova imagem
            </Button>
        </div>

    )
}

export default FeedPage