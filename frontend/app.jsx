const React = require("react")
const ReactDOM = require("react-dom")
const {
  BrowserRouter: Router,
  Switch,
  Route,
} = require("react-router-dom")
const PageInfo = require("./components/PageInfo/PageInfo.jsx")
const PageFooter = require("./components/PageFooter/PageFooter.jsx")
const Home = require("./pages/Home/Home.jsx")
const About = require("./pages/About/About.jsx")
const LanguageContext = require("./contexts/LanguageContext.jsx")
require("./style.css")

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lang: "en",
    }
  }

  render() {
    const { lang } = this.state
    return (
      <LanguageContext.Provider value={lang}>
        <Router>
          <PageInfo />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route path="*">
                <div className="not_found">
                  <h1>404 page not found</h1>
                </div>
              </Route>
            </Switch>
          </div>
          <PageFooter />
        </Router>
      </LanguageContext.Provider>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root"),
)
