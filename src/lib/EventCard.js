import React from 'react';

class EventCard extends React.Component {

  tConv24 = (time24) => {
    var ts = time24;
    var H = +ts.substr(0, 2);
    var h = (H % 12) || 12;
    h = (h < 10)?("0"+h):h;  // leading 0 at the left for 1 digit hours
    var ampm = H < 12 ? " AM" : " PM";
    ts = h + ts.substr(2, 3) + ampm;
    return ts;
  };

  render() {
    let { top, height, label, start, end} = this.props;
    return(
      <div className="event-card" style={{top: top, height: height}}>
        <p>{label}</p>
        <p>{this.tConv24(start)} - {this.tConv24(end)}</p>
      </div>
    )
  }
}

export default EventCard;