import Nav from '../components/nav.js'
import Main from './main.js'
import Major from './Major.js'
import Events from './events.js'
import Contact from './contact.js'

export default function App() {
    return (
        <>
            <nav>
                <Nav />
            </nav>
            <main>
                <Main/>
                <Major/>
                <Events/>
                <Contact/>
            </main>

        </>
    )
}