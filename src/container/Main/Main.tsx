import { Container } from '@mui/material'
import Home from 'pages/Home/Home'
import Favorites from 'pages/Favorites/Favorites'
import { Route, Routes } from 'react-router-dom'
import './Main.scss'
import AboutUs from 'pages/AboutUs/AboutUs'
import Typography from 'pages/Typography/Typography'
import Travel from 'pages/Travel/Travel'
import Business from 'pages/Business/Business'
import Contact from 'pages/Contact/Contact'

type Props = {}

const Main = (props: Props) => {
    return (
        <div className="main">
            <Container maxWidth="lg" className="container">
                <div className="main-inner">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="about" element={<AboutUs />} />
                        <Route path="typography" element={<Typography />} />
                        <Route path="travel" element={<Travel />} />
                        <Route path="business" element={<Business />} />
                        <Route path="favorites" element={<Favorites />} />
                        <Route path="contact" element={<Contact />} />
                    </Routes>
                </div>
            </Container>
        </div>
    )
}

export default Main
