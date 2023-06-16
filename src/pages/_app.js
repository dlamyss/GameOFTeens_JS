import Nav from '@/components/Nav/Nav';
import '@/styles/Nav.css';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
    return (
        <>
            <header>
                <Nav />
            </header>
            <Component {...pageProps} />
        </>
    );
}
