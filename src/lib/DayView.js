import React from 'react';
import EventCard from './EventCard';
import { HOURS, getHeightPos } from './utils';
import './dayView.css';

class DayView extends React.Component {
  constructor(props) {
    super(props);
    this.height = (HOURS.length - 1) * 60;
    this.state = {
      formatedTimings: []
    }
  }

  formatTimings = () => {
    let { timings } = this.props;
    timings = timings.map((timing, index) => {
      let top = getHeightPos(timing.start);
      let bottom = getHeightPos(timing.end);
      return { ...timing, top, height: bottom - top };
    });
    return timings;
  }

  render() {
    let { height } = this;
    let timings = this.formatTimings();
    return(
      <div className="day-view-container">
        <div className="timings" style={{ height: height}}>
          {
            HOURS.map((hour, index) => {
              return (<div key={index}>
                <span>{hour}</span>
              </div>)
            })
          }
        </div>
        <div className="events">
          {
            timings.map((timing, index) => {
              return <EventCard key={index} {...timing}/>
            })
          }
        </div>
      </div>
    )
  }
}

export default DayView;