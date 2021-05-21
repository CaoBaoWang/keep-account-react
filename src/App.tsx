import React from 'react'
import './index.scss'
import Tags from "./views/Tags";
import {Tag} from './views/Tag'
import Money from "./views/Money";
import Statistics from "./views/Statistics";
import NoMatch from "./views/NoMatch";
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";


function App() {
    return (
        <Router>
                <Switch>
                    <Redirect exact from="/" to="/money"/>
                    <Route exact path="/tags">
                        <Tags/>
                    </Route>
                    {/*exact 精确匹配*/}
                    <Route exact path="/tags:tag">
                        <Tag/>
                    </Route>
                    <Route exact path="/money">
                        <Money/>
                    </Route>
                    <Route exact path="/statistics">
                        <Statistics/>
                    </Route>
                    <Route path="*">
                        <NoMatch/>
                    </Route>
                </Switch>
        </Router>
    );
}


export default App
