import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import CoursesPage from "./courses/CoursesPage";
import BookPage from "./books/BookPage";
import ManageCoursePage from "./courses/ManageCoursePage";

//Routes should go from specific to general.
function App() {
    return (       
        <div className="container">
            <Header />
            <br></br>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/about" component={AboutPage} />
                <Route exact path="/courses" component={CoursesPage} />
                <Route exact path="/books" component={BookPage} />
                <Route path="/course/:slug" component={ManageCoursePage} />
                <Route path="/course" component={ManageCoursePage} />
                <Route component={PageNotFound} />
            </Switch>            
        </div>
    )
}

export default App;