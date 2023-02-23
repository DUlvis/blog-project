import { Card, CardContent } from '@mui/material'
import { NavLink } from 'react-router-dom'
import './ArticleListItem.scss'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { toggleLikeState } from 'redux/likeReducer'
type Props = {
    id: number
    image: string
    category: string
    title: string
    text: string
}

const ArticleListItem = ({ id, image, category, title, text }: Props) => {
    const isLiked = useAppSelector((state) => state.likeArticles[id])
    const dispatch = useAppDispatch()
    return (
        <>
            <Card className="article">
                <CardContent className="article-content">
                    <NavLink className="image" to={'/' + category}>
                        <img src={image} alt="content" />
                    </NavLink>
                    <NavLink className="category" to={'/' + category}>
                        {category}
                    </NavLink>
                    <h2 className="title">{title}</h2>
                    <p className="text">{text}</p>
                    <button onClick={() => dispatch(toggleLikeState(id))}>
                        {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </button>
                </CardContent>
            </Card>
        </>
    )
}

export default ArticleListItem
