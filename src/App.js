import './App.css';
import {Routes, Route, NavLink} from 'react-router-dom';
import Home from './pages/home/Home';
import Subreddit from './pages/subreddit/Subreddit';

// import { Link } from 'react-router-dom';

function App() {

    return (
        <>
        <h1>Reddit</h1>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/subreddit/:subredditId" element={<Subreddit/>}/>
            </Routes>
        </>

    );
}

export default App;
