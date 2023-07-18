import React from "react";
class Checked extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
        checked: "",
     };
  }
  render() {
     const onCheckbox = (event) => {
        this.setState({checked: `${event.target.checked}`})
     }
     return (
        <>
           <h1>Checked: {this.state.checked}</h1>
           <input onChange={onCheckbox} type="checkbox" name="" id="" />
        </>
     );
  }
}
export default Checked;