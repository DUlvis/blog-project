import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import './App.scss'

type Props = {}

const App = (props: Props) => {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Header />
                <Main />
            </StyledEngineProvider>
        </>
    )
}

export default App
