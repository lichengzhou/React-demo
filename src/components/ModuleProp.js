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
	              <div className="title"><span>Basic Information</span><a href="javascript:void(0)" className="close" onClick={this.cancel.bind(this)}><i className="glyphicon glyphicon-remove"></i></a></div>
	              <div className="content">
	              <form className="form-horizontal">
	                   <div className="control-group">
	                      <label className="control-label">name</label>
	                      <div className="controls">
	                        <input type="text" id="name" placeholder="name"/>
	                      </div>
	                    </div>
	                    <div className="control-group">
	                      <label className="control-label">title</label>
	                      <div className="controls">
	                        <input type="text" id="title" placeholder=""/>
	                      </div>
	                    </div>
	                    <div className="control-group">
	                      <label className="control-label">Url</label>
	                      <div className="controls">
	                        <input type="text" id="title" placeholder=""/>
	                      </div>
	                    </div>
	                    <div className="control-group">
	                      <label className="control-label"></label>
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
	                    	<label className="control-label">Type</label>
	                    	<div className="controls">
	                    		<select className="type">
								  <option value="0">常规</option>
					              <option value="1">报名云讲堂</option>
					              <option value="2">抽奖</option>
					              <option value="3">兑换序列号</option>
					              <option value="4">答题类</option>
					              <option value="5">短信验证码</option>
					              <option value="6">上传图片证书</option>
					              <option value="7">直播LP</option>
						        </select>
	                    	</div>
	                    </div>
	                    <div className="control-group">
	                      <label className="control-label">Responsive</label>
	                      <div className="controls responsive">
		                      <select id="comp-resp" >
		                          <option value="0">phone</option>
		                          <option value="1">pc</option>
		                          <option value="2">responsive</option>
		                      </select>
		                  </div>
	                    </div>
	                    <div className="title"><span>Share Information</span></div>
	                    <div className="share">
							<div className="share-left">
							<span>Image Size:300*300</span>
								<div className="img" >
										<div className="upload">
										<a href="javascript:void(0)"><input type="file" />Upload</a>
										</div>
								</div>
							</div>
							<div className="share-right">
								<p>title：</p>
								<div><input type="text" /></div>
								<p>description:</p>
								<div>
									<textarea></textarea>
								</div>
							</div>
	                    </div>
	                    <div className="title"><span>Activity Information</span></div>
	                    <div className="control-group">
	                    	<label className="control-label">Type</label>
	                    	<div className="controls">
	                    		<input type="date" />
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