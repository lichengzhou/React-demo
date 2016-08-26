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
		this.state = {title:"布局管理", tab1:"tab1 active", tab2:"tab2"};
		this.flagValue = 0;
	}
	moduleSelected(flag){
		let title = "布局管理";
		let tab1 = "", tab2 = "";
		if(flag){
			document.getElementsByClassName("module")[0].style.display="none";
			document.getElementsByClassName("layout")[0].style.display="block";
			document.getElementsByClassName("componentList")[0].style.display="none";
			document.getElementsByClassName("layoutList")[0].style.display="block";
			title = "布局管理";
			tab1 = "tab1 active";
			tab2 = "tab2";
			this.flagValue = -1;
		}
		else{
			document.getElementsByClassName("module")[0].style.display="block";
			document.getElementsByClassName("layout")[0].style.display="none";
			document.getElementsByClassName("componentList")[0].style.display="block";
			document.getElementsByClassName("layoutList")[0].style.display="none";
			title = "组件管理";
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
		}
		else {
			document.getElementsByClassName("newLayout")[0].style.display="block";
			document.getElementsByClassName("newModule")[0].style.display="none";
		}
	}

	render(){
		var componentList = [{status:0, description:"liubuju", name:"module1", statusDescription:"未发布"}];
		var layoutList = [{status:1, description:"liubuju", name:"layout1", statusDescription:"发布"}];
		return (<div><div className="condition">
	        <div className="title">{this.state.title}</div>
	        <div className="right"><button className='layout' onClick={this.addModule.bind(this)}>创建新布局</button><button className="module" style={{display:'none'}} onClick={this.addModule.bind(this)}>创建新组件</button></div>
	        <div className="switchTab">
	         <div>
	        <button className={this.state.tab1} onClick={this.moduleSelected.bind(this, true)}>布局</button><button className={this.state.tab2} onClick={this.moduleSelected.bind(this, false)}>组件</button>
	        </div>
	        </div>
    	</div>
		<div className="wrap">
			<ul className="layoutList">
				{layoutList.map(data => <LayoutItem item={data} />)}
			</ul>
			<ul className="componentList" style={{display:'none'}}>
				{componentList.map(data => <ModuleItem item={data} />)}
			</ul>
		</div>
		<LayoutProp flag={this.flagValue}/>
    	</div>);
	}
}

ModuleTitle.defaultProps = {};
export default ModuleTitle;



