import React from 'react'

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {Twournal: new Twournal()}
    }

    render() {
        return (
        <div id='twounralContainer'>
          <div className='indyTwournal'>
            <div className='daTwourn'>

            </div>
            <div className='daTweets'>

            </div>
          </div>
          <div className='indyTwournal'>
            <div className='daTwourn'>
              
            </div>
            <div className='daTweets'>

            </div>
          </div>
        </div>
        )
    }
}
export default MainPage;