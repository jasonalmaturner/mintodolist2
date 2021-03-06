var React = require('react');

var AddItem = React.createClass({
  getInitialState: function(){
    return {
      newItem: ''
    }
  },
  handleChange: function(e){
    this.setState({
      newItem: e.target.value
    })
  },
  handleSubmit: function(e){
    if(e.keyCode === 13){
      this.props.add(this.state.newItem);
      this.setState({
        newItem: ''
      });
    };
  },
  render: function(){
    return (
      <div>
        <input
          type="input"
          className="form-control"
          value={this.state.newItem}
          onChange={this.handleChange}
          onKeyDown={this.handleSubmit}
        />
      </div>
    )
  }
})

module.exports = AddItem;
