// import Layout from './components/MyLayout.js'
// import Link from 'next/link'
// import fetch from 'isomorphic-unfetch'
// const Index = (props) => (
//     <Layout>
//         <h1>Batman TV Shows</h1>
//         <ul>
//             {props.shows.map(({show}) => (
//                 <li key={show.id}>
//                     <Link href={`/post?id=${show.id}`}>
//                         <a>{show.name}</a>
//                     </Link>
//                 </li>
//             ))}
//         </ul>
//     </Layout>
// )
//
// Index.getInitialProps = async function() {
//     const res = await fetch('http://api.tvmaze.com/search/shows?q=batman')
//     const data = await res.json()
//
//     console.log(`Show data fetched. Count: ${data.length}`)
//
//     return {
//         shows: data
//     }
// }
//
// export default Index

import React from 'react'
import Head from 'next/head'
import Todos from './components/Todos'
import Home from './components/Home'
import stylesheet from './index.less'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        // this.store = props.store.dispatch ? props.store : initStore(props.initialState)
    }

    render() {
        return (
            <div>
                <section className='todoapp'>
                    <Head>
                        <title>Todos</title>
                        <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
                    </Head>
                    <Home/>
                    {/*<Todos/>*/}
                </section>
                <style jsx global>{stylesheet}</style>
            </div>
        )
    }
}