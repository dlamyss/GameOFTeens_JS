import Nav from '@/components/navigation';
import '@/styles/Nav.css';
import '@/styles/globals.css';
import '@/styles/style.css';

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
