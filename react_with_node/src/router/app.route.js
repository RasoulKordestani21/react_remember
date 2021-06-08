import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import TodoHomePage from '../pages/TodoHome/TodoHome.page';
import { TodoListPage } from '../pages/TodoList/TodoList.page';

export class RouteApp extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Redirect push m   from="/" to="/home" exact />
                        <Route path="/home" exact>
                            <TodoHomePage />
                        </Route>
                        <Route path="/home/:id">
                            <h1>Home Detail Page</h1>
                        </Route>
                        <Route path="/about">
                            <h1>About</h1>
                        </Route>
                        <Route path="/lists">
                            <TodoListPage />
                        </Route>
                        <Route >
                            <h1>not found</h1>
                        </Route>
                    </Switch>
                </BrowserRouter>

            </div>
        )
    }
}

export default RouteApp
