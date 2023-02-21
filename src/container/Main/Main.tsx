import { Container } from '@mui/material'
import Home from 'pages/Home/Home'
import Favorites from 'pages/Favorites/Favorites'
import { Route, Routes } from 'react-router-dom'
import './Main.scss'

type Props = {}

const Main = (props: Props) => {
    return (
        <div className="main">
            <Container maxWidth="lg" className="container">
                <div className="main-inner">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="favorites" element={<Favorites />} />
                    </Routes>
                </div>
            </Container>
        </div>
    )
}

export default Main
