import { useEffect, useState, createContext } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'
export const TestContext = createContext('');
export const ThemeContext = createContext('');

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState(localStorage.getItem("theme") || 'light');

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
      <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
        <TestContext.Provider value={{ user: user, tweets: tweets, setTweets: setTweets }} >
          <div className="container">
            <Header />
            <Tweets />
            <RightSide />
          </div>
        </TestContext.Provider>
      </ThemeContext.Provider>
    );
}

// NOTE! Instead of `export default App` we use `export { App }` here because we have
// more than one thing to export from this file.
export { App };
