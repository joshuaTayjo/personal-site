import Nav from '../components/Nav'
import ToggleSwitch from '../components/toggle'
import Head from 'next/head'
import Image from 'next/image'

const Home = () => {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>


            <main>
            <Nav/>


            </main>

            <footer>
            </footer>
        </div>
    )
}

export default Home
