/**
 *组件管理
 * 组件管理头部
 */
import React from 'react';
import ModuleItem from './ModuleItem';
import LayoutItem from './LayoutItem';
import LayoutProp from './LayoutProp';

class ModuleTitle extends React.Component{
	constructor(props){
		super(props);
		this.state = {title:"Layout Management", tab1:"tab1 active", tab2:"tab2"};
		this.flagValue = 0;
	}
	moduleSelected(flag){
		let title = "Layout Management";
		let tab1 = "", tab2 = "";
		if(flag){
			document.getElementsByClassName("componentList")[0].style.display="none";
			document.getElementsByClassName("layoutList")[0].style.display="block";
			title = "Layout Management";
			tab1 = "tab1 active";
			tab2 = "tab2";
			this.flagValue = -1;
		}
		else{
			document.getElementsByClassName("componentList")[0].style.display="block";
			document.getElementsByClassName("layoutList")[0].style.display="none";
			title = "Component Management";
			tab1 = "tab1";
			tab2 = "tab2 active";
			this.flagValue= 1;
		}
		this.setState({title:title, tab1:tab1, tab2:tab2});
	}
	addModule(){
		if(this.flagValue == 1){
			document.getElementsByClassName("newLayout")[0].style.display="none";
			document.getElementsByClassName("newModule")[0].style.display="block";
			let initValue = {titleInfo:"Create Component", name:""};
			this.setState({initValue:initValue});
		}
		else {
			document.getElementsByClassName("newLayout")[0].style.display="block";
			document.getElementsByClassName("newModule")[0].style.display="none";
			let initValue = {titleInfo:"Create Layout", name:""};
			this.setState({initValue:initValue});
		}
	}

	editInfo(itemInfo, flag){
		if(flag == "1"){
			itemInfo.titleInfo = "Edit Layout Infomation";
			this.setState({initValue:itemInfo});
		}else if(flag == "2"){
			itemInfo.titleInfo = "Edit Component Infomation";
			this.setState({initValue:itemInfo});
		}

	}

	render(){
		var componentList = [{status:0, description:"liubuju", name:"module1", statusDescription:"未发布"}];
		var layoutList = [{status:1, description:"liubuju", name:"layout1", statusDescription:"发布"}];
		return (<div><div className="condition">
	        <div className="title">{this.state.title}</div>
	        <div className="right"><button className='layout' onClick={this.addModule.bind(this)}>Create</button></div>
	        <div className="switchTab">
	         <div>
	        <button className={this.state.tab1} onClick={this.moduleSelected.bind(this, true)}>Layout</button><button className={this.state.tab2} onClick={this.moduleSelected.bind(this, false)}>Component</button>
	        </div>
	        </div>
    	</div>
		<div className="wrap">
			<ul className="layoutList">
				{layoutList.map(data => <LayoutItem item={data} editInfo={this.editInfo.bind(this, data, "1")}/>)}
			</ul>
			<ul className="componentList" style={{display:'none'}}>
				{componentList.map(data => <ModuleItem item={data} editInfo={this.editInfo.bind(this, data, "2")}/>)}
			</ul>
		</div>
		<LayoutProp flag={this.flagValue} initValue={this.state.initValue}/>
    	</div>);
	}
}

ModuleTitle.defaultProps = {};
export default ModuleTitle;



