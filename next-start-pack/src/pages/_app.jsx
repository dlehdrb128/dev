import Layout from '../Layout';
import { Reset } from 'styled-reset';
const App = ({ Component, pageProps }) => {
    console.log(Component, '_app 컴포넌트!');
    console.log(Component, 'PageProps란 무언인지!');

    return (
        <Layout>
            <Reset />
            <Component {...pageProps} />
        </Layout>
    );
};

export default App;
