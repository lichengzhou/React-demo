/**
 *新建页面
 * 布局，组件，模版选择组件
 */
import React from 'react';
import $ from 'jquery';

import ComponentInstance from './Component';

class NewPageLeft extends React.Component{
	constructor(props){
		super(props);
		this.tabValue = 0;
		this.type = 0;
		this.state = {type:this.type};
	}
	changeTab(event){
		$(".left-div span").removeClass("active");
		$(event.target).addClass("active");
		$("div.create").css("display", "none");
		if($(event.target).hasClass("layout")){
			$("div.layout").css("display", "block");
			this.tabValue = 0;
		}
		else if($(event.target).hasClass("component")){
			$("div.component").css("display", "block");
			this.tabValue = 1;
		}
		else{
			$("div.module").css("display", "block");
			this.tabValue = 2;
		}
	}
	changeType(type){
		this.type = type;
		this.setState({type:type});
	}
	chooseLayout(event){
		let confirm = window.confirm("Are you sure to do this operation which will remove the existed data?");
		if(!confirm){
			return ;
		}
		let target = event.target;
		if(target.nodeName != "LI"){
			target = target.parentElement;
			target.nodeName == "LI" ? target = target : target.parentElement;
		}

		let layoutId = target.getAttribute("data-id");
		//保存数据，更新view
		this.props.changeLayout(layoutId);
	}
	render(){
		let layoutList;
		let that = this;
		layoutList = this.props.layoutList.filter(function(item){return item.type == that.type});
		
		let	componentList = this.props.componentList.filter(function(item){return item.name.indexOf("") > -1});

		let	moduleList = this.props.moduleList.filter(function(item){return item.name.indexOf("") > -1});

		return (<div className="left-div">
         <div className="title" onClick={this.changeTab.bind(this)}>
         <a href="javascript:void(0)"><span className="layout active">Layout</span></a>
         <a href="javascript:void(0)"><span className="component">Component</span></a>
         <a href="javascript:void(0)"><span className="module">Template</span></a>
         </div>
         <div className="create layout"> 
         	<div className="type">
         		<span><input name="type" type="radio" ref="type0" value="0" onChange={this.changeType.bind(this, '0')} defaultChecked/>手机</span>
         		<span><input name="type" type="radio" ref="type1" value="1" onChange={this.changeType.bind(this, '1')}/>网页</span>
         		<span><input name="type" type="radio" ref="type2" value="2" onChange={this.changeType.bind(this, '2')}/>响应式</span>
         	</div>
         	<ul>
         		{layoutList.map(value => <li data-id={value.id} onClick={this.chooseLayout.bind(this)}><img src={value.imgUrl} /> <div>{value.name}</div></li>)}
         	</ul>
         </div>
         <div className="create component" style={{display:'none'}}>
         	<div className="search">
         		<i className="glyphicon glyphicon-search"></i><input type="text"/>
         	</div>
         	<ul>
				{componentList.map((value, index) => <li key={index}><ComponentInstance src={value.imgUrl} name={value.name} key={index} type={value.type}/></li>)}
         	</ul>
         </div>
         <div className="create module" style={{display:'none'}}> 
         	<div className="search">
				<i className="glyphicon glyphicon-search"></i><input type="text"/>
         	</div>
         	<ul>
         		{moduleList.map((value, index)=> <li  key={index}><img src={value.imgUrl} /> <div>{value.name}</div></li>)}
         	</ul>
         </div>
       </div>);
	}
}

NewPageLeft.defaultProps = {layoutList:[{type:'0', name:'layout12', imgUrl:'', id:"1"},{type:'1', name:'layout2', imgUrl:'', id:"2"},
	{type:'2', name:'layout3', imgUrl:'', id:"3"}], componentList:[{type:'0', name:'component1', imgUrl:''}], 
	moduleList:[{type:'0', name:'module1', imgUrl:''}]};
export default NewPageLeft;