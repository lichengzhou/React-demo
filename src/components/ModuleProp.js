/**
 * 新增模块
 * 模块信息设置
 */
import React from 'react';

class ModuleProp extends React.Component{
	cancel(){
		document.querySelector(".edit").style.display = "none";
	}
	save(){
		document.querySelector(".edit").style.display = "none";
		document.querySelector(".quit").style.display = "none";
	}
	clear(){
		document.querySelector(".quit").style.display = "none";
	}
	render(){
		return (<div><div className="edit" style={{display:'none'}}>
	      <div className="prop-mask">  
	      </div>
	      <div className="prop">
	              <div className="title"><span>修改模块信息</span><a href="javascript:void(0)" className="close" onClick={this.cancel.bind(this)}><i className="glyphicon glyphicon-remove"></i></a></div>
	              <div className="content">
	              <form className="form-horizontal">
	                   <div className="control-group">
	                      <label className="control-label">模块名</label>
	                      <div className="controls">
	                        <input type="text" id="name" placeholder="name"/>
	                      </div>
	                    </div>
	                    <div className="control-group">
	                      <label className="control-label">模块描述</label>
	                      <div className="controls">
	                        <input type="text" id="title" placeholder=""/>
	                      </div>
	                    </div>
	                    <div className="control-group">
	                      <label className="control-label">缩略图Url</label>
	                      <div className="controls">
	                        <input type="text" placeholder=""/>
	                      </div>
	                    </div>
	                    <div className="control-group">
	                      <label className="control-label"></label>
	                      <div className="controls upload-file">
	                        <input type="file" placeholder=""/>＋上传缩略图
	                      </div>
	                    </div>
	                    <div className="control-group">
	                      <label className="control-label">布局</label>
	                      <div className="controls">
	                        <input type="radio" name="type" value="0"/>手机
	                        <input type="radio" name="type" value="1"/>网页
	                        <input type="radio" name="type" value="1"/>响应式
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
	    <div className="quit" style={{display:'none'}}>
	      <div className="prop-mask">  
	      </div>
	      <div className="prop">
	              <div className="title"><a href="javascript:void(0)" className="close" onClick={this.clear.bind(this)}><i className="glyphicon glyphicon-remove"></i></a></div>
	              <div className="content">
	              		<div className="info">是否保存修改，如果不保存将导致已修改的数据丢失？</div>
	              		<div className="btn-group">
							<button className="cancel" type="button" onClick={this.clear.bind(this)}>否</button>
	                        <button className="save" type="button" onClick={this.save.bind(this)}>是</button>
	              		</div>
	              </div>
	              <div className="btn-group"></div>
	      </div>
	    </div></div>);
	}
}
ModuleProp.defaultProps = {};
export default ModuleProp;