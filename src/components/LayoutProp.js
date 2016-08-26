/**
 * 模块管理页面
 * 新增布局或者新增组件操作
 */
import React from 'react';
import {withRouter } from 'react-router';

class LayoutProp extends React.Component{

	cancel(){
		document.getElementsByClassName("newLayout")[0].style.display="none";
		document.getElementsByClassName("newModule")[0].style.display="none";
	}
	save(){
		let name, url, type;
		if(this.props.flag < 1){
			name = this.refs.layoutName;
			url = this.refs.layoutUrl;
			if(this.refs['layoutType-0'].checked ){
				type = this.refs['layoutType-0'];
			}
			else if(this.refs['layoutType-1'].checked ){
				type = this.refs['layoutType-1'];
			}
			else if(this.refs['layoutType-2'].checked ){
				type = this.refs['layoutType-2'];
			}
			
		}
		else{
			name = this.refs.moduleName;
			url = this.refs.moduleUrl;
			if(this.refs['moduleType-1'].checked ){
				type = this.refs['moduleType-1'];
			}
			else if(this.refs['moduleType-2'].checked ){
				type = this.refs['moduleType-2'];
			}
			else if(this.refs['moduleType-0'].checked ){
				type = this.refs['moduleType-0'];
			}
		}

		console.log(name.value + ":" + url.value + ":" + type.value)
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

		return (<div><div className="newLayout" style={layoutDisplay}>
	      <div className="prop-mask">  
	      </div>
	      <div className="prop">
	              <div className="title"><span>创建新布局</span><a href="javascript:void(0)" className="close" onClick={this.cancel.bind(this)}><i className="glyphicon glyphicon-remove"></i></a></div>
	              <div className="content">
	              <form className="form-horizontal">
	                   <div className="control-group">
	                      <label className="control-label">布局名称</label>
	                      <div className="controls">
	                        <input type="text" id="name" ref="layoutName" placeholder="name"/>
	                      </div>
	                    </div>
	                    <div className="control-group">
	                      <label className="control-label"></label>
	                      <div className="controls upload-file">
	                        <input type="file" ref="layoutUrl" placeholder=""/>＋上传缩略图
	                      </div>
	                    </div>
	                    <div className="control-group">
	                      <label className="control-label">布局</label>
	                      <div className="controls">
	                        <input type="radio" name="type" ref="layoutType-0" value="0"/>手机
	                        <input type="radio" name="type" ref="layoutType-1" value="1"/>网页
	                        <input type="radio" name="type" ref="layoutType-2" value="2"/>响应式
	                      </div>
	                    </div>
	                    <div className="control-group">
	                      <label className="control-label"></label>
	                      <div className="controls">
	                        <button className="cancel" type="button" onClick={this.cancel.bind(this)}>取消</button>
	                        <button className="save" type="button" onClick={this.save.bind(this)}>创建</button>
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
	              <div className="title"><span>创建新组件</span><a href="javascript:void(0)" className="close" onClick={this.cancel.bind(this)}><i className="glyphicon glyphicon-remove"></i></a></div>
	              <div className="content">
	              <form className="form-horizontal">
	                   <div className="control-group">
	                      <label className="control-label">组件名称</label>
	                      <div className="controls">
	                        <input type="text" ref="moduleName" placeholder="name"/>
	                      </div>
	                    </div>
	                    <div className="control-group">
	                      <label className="control-label"></label>
	                      <div className="controls upload-file">
	                        <input type="file" ref="moduleUrl" placeholder=""/>＋上传缩略图
	                      </div>
	                    </div>
	                    <div className="control-group">
	                      <label className="control-label">布局</label>
	                      <div className="controls">
	                        <input type="radio" name="type" ref="moduleType-0" value="0"/>手机
	                        <input type="radio" name="type" ref="moduleType-1" value="1"/>网页
	                        <input type="radio" name="type" ref="moduleType-2" value="2"/>响应式
	                      </div>
	                    </div>
	                    <div className="control-group">
	                      <label className="control-label"></label>
	                      <div className="controls">
	                        <button className="cancel" type="button" onClick={this.cancel.bind(this)}>取消</button>
	                        <button className="save" type="button" onClick={this.save.bind(this)}>创建</button>
	                      </div>
	                    </div>
	                  </form>
	              </div>
	              <div className="btn-group"></div>
	      </div>
	    </div></div>);
	}
}

LayoutProp.defaultProps = {};
var DecorateLayoutProp = withRouter(LayoutProp);
LayoutProp.propTypes = {
  router: React.PropTypes.shape({
    push: React.PropTypes.func.isRequired
  }).isRequired
};
export default DecorateLayoutProp;