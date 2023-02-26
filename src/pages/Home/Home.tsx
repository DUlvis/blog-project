import ArticlesList from 'components/Articles/ArticlesList'
import TrendingArticles from 'components/TrendingArticles/TrendingArticles'

type Props = {}

const Home = (props: Props) => {
    return (
        <>
            <ArticlesList />
            <TrendingArticles />
        </>
    )
}

export default Home
