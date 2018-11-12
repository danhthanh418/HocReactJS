import React, { Component } from 'react';
import {BrowserRouter as Route} from 'react-router-dom'
import Tour from './Tour'
import TravelHandBook from './TravelHandBook'
import AboutUs from './AboutUs'
import Answer from './Answer'
import Support from './Support'
class CustomRouter extends Component {
    render() {
        return (
            <div>
                <Route exact path="/trang-chu" component={Tour}></Route>
                <Route exact path="/cam-nang" component={TravelHandBook}></Route>
                <Route exact path="/gioi-thieu" component={AboutUs}></Route>
                <Route exact path="/giai-dap" component={Answer}></Route>
                <Route exact path="/ho-tro" component={Support}></Route>
            </div>
        );
    }
}

export default CustomRouter;