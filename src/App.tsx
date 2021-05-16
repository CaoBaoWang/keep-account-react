import React from 'react'
import './index.scss'
import Tags from "./views/Tags";
import Money from "./views/Money";
import Statistics from "./views/Statistics";
import NoMatch from "./views/NoMatch";
import Nav from './components/Nav.tsx'

import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";
import styled from "styled-components";
import {isPrimitive} from "util";


const Wrapper = styled.div`
  border: 1px solid red;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Main = styled.div`
    flex-grow: 1;
`



function App() {
    return (
        <Router>
            <Wrapper>
                <Main>
                <Switch>
                    <Redirect exact from="/" to="/money"/>
                    <Route path="/tags">
                        <Tags/>
                    </Route>
                    <Route path="/money">
                        <Money/>
                    </Route>
                    <Route path="/statistics">
                        <Statistics/>
                    </Route>
                    <Route path="*">
                        <NoMatch/>
                    </Route>
                </Switch>
                </Main>
                <Nav />
            </Wrapper>
        </Router>
    );
}


export default App
