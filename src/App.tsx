import styles from './App.module.scss';
import { Header } from './components/header/header';
import { HomePage } from './components/home-page/home-page';
import { Footer } from './components/footer/footer';

function App() {
    return (
        <div className={styles.App}>
            <Header />
            <HomePage />
            <Footer />
        </div>
    );
}

export default App;
