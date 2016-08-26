/**
 * 新增组件
 * 模块信息参数组件
 */
import React from 'react';
import TableRow from './TableRow';

class ModuleRight extends React.Component{
	constructor(props){
		super(props);
		this.state={rowList: this.props.rowList, itemList:[], dataList:{}}
	}
	checkApi(){
		console.log(event.target);
		if(document.querySelector(".right .apiValue").checked){
			document.querySelector(".right select").disabled = false;
		}
	}
	delRowData(index){
		let i;
		let list = this.state.rowList;
		for(i = 0; i < list.length; i++){
			if(list[i].index == index){
				list.splice(i, 1);
				break;
			}
		}
		this.setState({rowList: list});

	}
	editRowData(index){

	}
	addRow(){
		let len = this.props.rowList && this.props.rowList.length > 0 ? this.props.rowList.length : 0;
		if(len == 0 && typeof this.props.rowList != "object"){
			this.props.rowList = [];
		}
		let max = 0;
		var list = this.state.rowList;
		var temp;

		for(temp = 0; temp < list.length; temp++){
			if(list[temp].index > max){
				max = list[temp].index;
			}
		}
		max = max == 0 && list.length == 0 ? 0 : max + 1;
		temp = {name:"5",type:"Boolean", index:max};
		list.push(temp);
		this.setState({rowList:list});
	}
	
	// updateItem(index, itemValue){
	// 	let temp = this.state.dataList;
	// 	temp[index] = itemValue;
	// 	this.setState({dataList:temp});
	// }

	render(){
		return (<div className="right">
         <div className="title">模块参数设置</div>
         <div className="api">
           有API<input type="checkbox" className="apiValue" value="1" onClick={this.checkApi.bind(this)}/>
           选择API：
           <select disabled="disabled">
             <option value="1" selected>云讲堂</option>
             <option value="2">LP</option>
           </select>
         </div>
         <div className="table">
           <table>
             <thead>
               <tr>
                 <td>参数名</td>
                 <td>类型</td>
                 <td>操作</td>
               </tr>
             </thead>
             <tbody>
               {this.state.rowList.map((data)=>{
               	 return <TableRow key={data.index} delRowData={this.delRowData.bind(this, data.index)} editRowData={this.editRowData.bind(this, data.index)} 
			 item={data}/>;
               })}
             </tbody>
           </table>
         </div>
         <div>
            <button onClick={this.addRow.bind(this)}>+增加一行</button>
         </div>
       </div>);
	}	
};

ModuleRight.defaultProps = {rowList:[]};
export default ModuleRight;