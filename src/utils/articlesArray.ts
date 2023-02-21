type ArticlesProps = {
    id: number
    image: string
    category: string
    title: string
    text: string
}

const articlesArray: ArticlesProps[] = [
    {
        id: 1,
        image: '/images/zurich.jpg',
        category: 'Travel',
        title: 'Zurich Switzerland',
        text: '“You go in at once, Giorgio,” she directed. “One would think you do not wish to have any pity on me—with four Signori Inglesi…',
    },
    {
        id: 2,
        image: '/images/when-sometimes.jpg',
        category: 'Business',
        title: 'When sometimes a frying-pan caught fire',
        text: 'Meantime Giorgio, with tranquil movements, had been unfastening the door; the flood of light fell on Signora Teresa, with her two girls gathered to…',
    },
    {
        id: 3,
        image: '/images/secrets-of-a-happy.jpg',
        category: 'Lifestyle',
        title: 'Secrets of a happy life we often forget',
        text: 'The mob, driven away from the Custom House, had broken up into several bands, retreating across the plain in the direction of the town.…',
    },
    {
        id: 4,
        image: '/images/last-night.jpg',
        category: 'Travel',
        title: 'Last Night',
        text: 'Meantime Giorgio, with tranquil movements, had been unfastening the door; the flood of light fell on Signora Teresa, with her two girls gathered to…',
    },
]

export default articlesArray
