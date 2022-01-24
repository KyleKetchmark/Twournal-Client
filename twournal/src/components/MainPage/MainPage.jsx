import React from 'react'
import Twournals from './Twounrals/Twournals';
import Sidebar from './Sidebar/Sidebar';
import './mainpage.css';
import 'bootstrap';


class MainPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        firstName: '',
      }
    }
    

      

    render() {
        return (
        <>
        <div id='mainpage'>
          <Sidebar clearLocalStorage={this.props.clearLocalStorage} />
          <div id='twournalContainer'>
            <div id='heading'>
              <h3>Welcome {this.state.firstName}, expand your thoughts!</h3>
            </div>
          <div className='indyTwournal'>
            <div className='daTwourn'>
              <Twournals />
            </div>
          </div>
          </div>
        </div>
        </>
        )
    }
}
export default MainPage;