import { Grid } from '@mui/material'
import articlesArray from 'utils/articlesArray'
import ArticleListItem from './ArticleListItem'
import './ArticlesList.scss'

type ArticlesProps = {
    id: number
    image: string
    category: string
    title: string
    text: string
}

type Props = {}

const ArticlesList = (props: Props) => {
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="stretch"
                sx={{
                    padding: '30px 0 35px',
                    width: '100%',
                }}
            >
                {articlesArray
                    .slice(0, 4)
                    .map(
                        ({
                            id,
                            image,
                            category,
                            title,
                            text,
                        }: ArticlesProps) => (
                            <Grid
                                className="article-grid-item"
                                item
                                xs={12}
                                sm={6}
                                md={3}
                                key={id}
                            >
                                <ArticleListItem
                                    image={image}
                                    category={category}
                                    title={title}
                                    text={text}
                                />
                            </Grid>
                        )
                    )}
            </Grid>
        </>
    )
}

export default ArticlesList
