import { Card, CardContent } from '@mui/material'
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
                    <a href="#" className="image">
                        <img src={image} alt="photo-content" />
                    </a>
                    <a href="#" className="category">
                        {category}
                    </a>
                    <div className="title">{title}</div>
                    <div className="text">{text}</div>
                </CardContent>
            </Card>
        </>
    )
}

export default ArticleListItem
