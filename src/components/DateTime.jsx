import React from "react";


class DateTime extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        dateTime: new Date()
      };
    }
  
    componentDidMount() {
    
      this.interval = setInterval(() => {
        this.setState({
          dateTime: new Date()
        });
      }, 1000); 
    }
  
    componentWillUnmount() {
 
      clearInterval(this.interval);
    }
  
    render() {
      const { dateTime } = this.state;
  
      return (
        <div>
          <h4>{dateTime.toLocaleString()}</h4>
        </div>
      );
    }
}
  
  export default DateTime;
  