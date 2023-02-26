import { Typography } from '@mui/material'
import './TrendingArticles.scss'
type Props = {}

const TrendingArticles = (props: Props) => {
    return (
        <Typography
            component="div"
            align="center"
            className="trending-articles"
        >
            <div className="trending-preview">
                <h2>Trending Articles</h2>
                <p>Articles most viewed this week</p>
            </div>
        </Typography>
    )
}

export default TrendingArticles
