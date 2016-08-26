/**
 *组件新建
 * 组件参数每行组件
 */
import React from 'react';

class TableRow extends React.Component{
	constructor(props){
		super(props);
		this.state={item:this.props.item};
	}
	changeValue(event){
		console.log("input:" + event.target.value);
		var temp = this.props.item;
		temp.name = event.target.value;
		this.setState({item:temp});
	}

	changeSelectValue(event){
		console.log("select:" + event.target.value);
		var temp = this.props.item;
		temp.type = event.target.value;
		this.setState({item:temp});
	}
	render(){
		return (<tr>
                <td><input type="text" defaultValue={this.state.item.name} onChange={this.changeValue.bind(this)}/></td>
                 <td>
                  <select defaultValue={this.state.item.type} onChange={this.changeSelectValue.bind(this)}>
                    <option value="String">String</option>
                    <option value="Number">Number</option>
                    <option value="Boolean">Boolean</option> 
                  </select>
                </td>
                <td>
                   <a href="javascript:void(0)" onClick={this.props.editRowData.bind(this, this.state.item.index)}><i className="glyphicon glyphicon-edit"></i></a>
                   <a href="javascript:void(0)" onClick={this.props.delRowData.bind(this, this.state.item.index)}><i className="glyphicon glyphicon-trash"></i></a>
                </td>
              </tr>);
	}
}

TableRow.defaultProps = {};

export default TableRow;