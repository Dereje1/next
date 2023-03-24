import Head from 'next/head';
import Link from 'next/link';
import LayOut from '../../components/layout';

function FirstPost() {
    return (
        <LayOut>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>Hello!!</h1>
            <Link href='/'>Go back </Link>
        </LayOut>


    )
}

export default FirstPost;