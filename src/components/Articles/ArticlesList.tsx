import { Grid } from '@mui/material'
import articlesArray from 'utils/articlesArray'
import ArticleListItem from './ArticleListItem'

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
                alignItems="center"
                sx={{
                    padding: '35px 0',
                }}
            >
                {articlesArray.map(
                    ({ id, image, category, title, text }: ArticlesProps) => (
                        <Grid item xs={12} sm={6} md={3} key={id}>
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
