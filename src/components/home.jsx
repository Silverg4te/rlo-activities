import React, {Component} from 'react';
import * as constant from '../constant';

class Home extends Component {

    render() {
        return (
            <div>
                <h1>List of Activities</h1>
                <a href="https://www.nottingham.ac.uk/~ntzalf/rlo-specs/index.php/activities/activities">Link to all activities</a>
                {constant.activities.map(({title}, index) => <div>{index + 1}. {title}</div>)}
            </div>
        )
    }
}

export default Home;
