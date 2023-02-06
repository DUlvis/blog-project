import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import HeaderTopbarLeft from 'components/HeaderTopbarLeft/HeaderTopbarLeft'
import HeaderTopbarRight from 'components/HeaderTopbarRight/HeaderTopbarRight'
import './Header.scss'
import Branding from 'components/Branding/Branding'
import Menu from 'components/Menu/Menu'
type Props = {}

const Header = (props: Props) => {
    return (
        <>
            <AppBar position="static" className="app-bar">
                <Container maxWidth="lg" className="container">
                    <Toolbar className="tool-bar">
                        <HeaderTopbarLeft />
                        <HeaderTopbarRight />
                    </Toolbar>
                </Container>
            </AppBar>
            <Branding />
            <Menu />
        </>
    )
}

export default Header
