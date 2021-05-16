import React from 'react'
import Tags from "./views/Tags";
import Money from "./views/Money";
import Statistics from "./views/Statistics";
import NoMatch from "./views/NoMatch";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>

                        <li>
                            <Link to="/tags">tags</Link>
                        </li>
                        <li>
                            <Link to="/money">money</Link>
                        </li>
                        <li>
                            <Link to="/statistics">Statistics</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Redirect exact from="/" to="/money" />
                    <Route path="/tags">
                        <Tags />
                    </Route>
                    <Route path="/money">
                        <Money />
                    </Route>
                    <Route path="/statistics">
                        <Statistics />
                    </Route>
                    <Route path="*">
                        <NoMatch/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}









export default App
