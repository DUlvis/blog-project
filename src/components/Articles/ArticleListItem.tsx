import { Card, CardContent } from '@mui/material'
import { NavLink } from 'react-router-dom'
import './ArticleListItem.scss'

type Props = {
    image: string
    category: string
    title: string
    text: string
}

const ArticleListItem = ({ image, category, title, text }: Props) => {
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
                </CardContent>
            </Card>
        </>
    )
}

export default ArticleListItem
