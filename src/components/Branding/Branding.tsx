import { Container } from '@mui/material'
import logo from 'assets/logo.png'
import './Branding.scss'
type Props = {}

const Branding = (props: Props) => {
    return (
        <div className="site-branding">
            <Container maxWidth="lg" className="container">
                <div className="site-branding-inner">
                    <a href="#">
                        <img src={logo} alt="Logo Radians" />
                    </a>
                    <p>Modern Magazine Theme</p>
                </div>
            </Container>
        </div>
    )
}

export default Branding
