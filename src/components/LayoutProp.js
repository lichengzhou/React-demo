/**
 * 模块管理页面
 * 新增布局或者新增组件操作
 */
import React from 'react';
import {withRouter } from 'react-router';

class LayoutProp extends React.Component{
	constructor(props){
		super(props);
		this.state = {initValue:this.props.initValue};
	}

	cancel(){
		document.getElementsByClassName("newLayout")[0].style.display="none";
		document.getElementsByClassName("newModule")[0].style.display="none";
	}
	save(){
		let name, url, type, responsive;
		if(this.props.flag < 1){
			let layoutResp = document.querySelector("#layout-resp");
			let index = layoutResp.selectedIndex;
			responsive = layoutResp.options[index].value;
		}
		else{
			let layoutResp = document.querySelector("#comp-resp");
			let index = layoutResp.selectedIndex;
			responsive = layoutResp.options[index].value;
		}
		name.value = "";
		url.value="";
		type.checked=false;
		document.getElementsByClassName("newLayout")[0].style.display="none";
		document.getElementsByClassName("newModule")[0].style.display="none";
		//browserHistory.push('/#/module/1');
		this.props.router.push('/module/1');
	}
	componentWillReceiveProps(nextProps) {
	    this.setState({
	        children: nextProps.children
	    });
	}
	changeHandler(key, event){
		let tempData = this.props.initValue;
		tempData[key] = event.target.value;
		this.setState({initValue:tempData});
	}
	render(){
		let layoutDisplay , moduleDisplay;
		if(this.props.flag < -1){
			layoutDisplay = {display:'block'};
			moduleDisplay = {display:'none'};
		}
		else if(this.props.flag > 1){
			layoutDisplay = {display:'none'};
			moduleDisplay = {display:'block'};
		}
		else{
			layoutDisplay = {display:'none'};
			moduleDisplay = {display:'none'};
		}		
		let data = this.props.initValue;
		return (<div><div className="newLayout" style={layoutDisplay}>
	      <div className="prop-mask">  
	      </div>
	      <div className="prop">
	              <div className="title"><span>{data.titleInfo}</span><a href="javascript:void(0)" className="close" onClick={this.cancel.bind(this)}><i className="glyphicon glyphicon-remove"></i></a></div>
	              <div className="content">
	              <form className="form-horizontal">
	                   <div className="control-group">
	                      <label className="control-label">name</label>
	                      <div className="controls">
	                        <input type="text" id="name" value={data.name} onChange={this.changeHandler.bind(this, "name")} placeholder="name"/>
	                      </div>
	                    </div>
	                    <div className="control-group">
	                      <label className="control-label"></label>
	                      <div className="controls upload-file">
	                        <input type="file" ref="layoutUrl" value={data.name} placeholder=""/>＋upload Image
	                      </div>
	                    </div>
	                    <div className="control-group">
	                      <label className="control-label">Responsive Style</label>
		                  <div className="responsive">
		                      <select id="layout-resp" onChange={this.changeHandler.bind(this, "responsive")}>
		                          <option value="0">phone</option>
		                          <option value="1">pc</option>
		                          <option value="2">responsive</option>
		                      </select>
		                    </div>
	                    </div>
	                    <div className="control-group">
	                      <label className="control-label"></label>
	                      <div className="controls">
	                        <button className="cancel" type="button" onClick={this.cancel.bind(this)}>Cancel</button>
	                        <button className="save" type="button" onClick={this.save.bind(this)}>save</button>
	                      </div>
	                    </div>
	                  </form>
	              </div>
	              <div className="btn-group"></div>
	      </div>
	    </div>
	    <div className="newModule" style={moduleDisplay}>
	      <div className="prop-mask">  
	      </div>
	      <div className="prop">
	              <div className="title"><span>{data.titleInfo}</span><a href="javascript:void(0)" className="close" onClick={this.cancel.bind(this)}><i className="glyphicon glyphicon-remove"></i></a></div>
	              <div className="content">
	              <form className="form-horizontal">
	                   <div className="control-group">
	                      <label className="control-label">Name</label>
	                      <div className="controls">
	                        <input type="text" value={data.name} onChange={this.changeHandler.bind(this, "name")} placeholder="name"/>
	                      </div>
	                    </div>
	                    <div className="control-group">
	                      <label className="control-label"></label>
	                      <div className="controls upload-file">
	                        <input type="file" value={data.imgUrl} placeholder=""/>Upload Image
	                      </div>
	                    </div>
	                    <div className="control-group">
	                    	<label className="control-label">Responsive Style</label>
		                  	<div className="responsive">
		                      <select id="comp-resp" value={data.responsive} onChange={this.changeHandler.bind(this, "responsive")} >
		                          <option value="0">phone</option>
		                          <option value="1">pc</option>
		                          <option value="2">responsive</option>
		                      </select>
		                    </div>
	                      <label className="control-label" style={{display:'none'}}>布局</label>
	                      <div className="controls" style={{display:'none'}}>
	                        <input type="radio" name="type" ref="moduleType-0" value="0"/>手机
	                        <input type="radio" name="type" ref="moduleType-1" value="1"/>网页
	                        <input type="radio" name="type" ref="moduleType-2" value="2"/>响应式
	                      </div>
	                    </div>
	                    <div className="control-group">
	                      <label className="control-label"></label>
	                      <div className="controls">
	                        <button className="cancel" type="button" onClick={this.cancel.bind(this)}>Cancel</button>
	                        <button className="save" type="button" onClick={this.save.bind(this)}>Save</button>
	                      </div>
	                    </div>
	                  </form>
	              </div>
	              <div className="btn-group"></div>
	      </div>
	    </div></div>);
	}
}

LayoutProp.defaultProps = {initValue:{titleInfo:"Create Layout"}};
var DecorateLayoutProp = withRouter(LayoutProp);
LayoutProp.propTypes = {
  router: React.PropTypes.shape({
    push: React.PropTypes.func.isRequired
  }).isRequired
};
export default DecorateLayoutProp;