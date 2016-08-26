/**
 *页面管理
 * 模版操作页面设置信息
 */
import React from 'react';

class PageTemplateEdit extends React.Component{
	constructor(props){
		super(props);
    this.state = {initValue:props.initValue};
	}

  close(){
    document.querySelector(".page .template-edit").style.display = "none";
  }

  handleChange(key,e) {
    let initValue = this.props.initValue;
    initValue[key] = e.target.value;
    this.setState({initValue: initValue});
  }

  save(){
    let data = this.props.initValue;
    data.name = document.querySelector(".page .template-edit #name").value;
    data.imgUrl = document.querySelector(".page .template-edit #imgUrl").value;


    document.querySelector(".page .template-edit").style.display = "none";
  }
	render(){
		let data = this.state.initValue;
    if(!data.name){
      data = this.props.initValue;
    }else{

    }
     
		return (<div style={{display:'none'}} className="template-edit">
      <div className="prop-mask" ></div>
      <div className="prop prop-new">
            <div className="title"><span>{data.titleInfo}</span><a href="javascript:void(0)" className="close" onClick={this.props.close}><i className="glyphicon glyphicon-remove"></i></a></div>
            <div className="content">
            <form className="form-horizontal">
                 <div className="control-group">
                    <label className="control-label">Name</label>
                    <div className="controls">
                      <input type="text" id="name" placeholder="name" value={data.name} onChange={this.handleChange.bind(this, "name")}/>
                    </div>
                  </div>
                  <div className="control-group">
                    <label className="control-label">Template Image</label>
                    <div className="controls">
                      <input type="text" id="imgUrl" placeholder="" value={data.imgUrl} onChange={this.handleChange.bind(this, "imgUrl")}/>
                    </div>
                  </div>
                  <div className="control-group">
                    <label className="control-label"></label>
                    <div className="controls">
                      <button className="cancel" type="button" onClick={this.close.bind(this)}>Cancel</button>
                      <button className="save" type="button" onClick={this.save.bind(this)}>Save</button>
                    </div>
                  </div>
                </form>
            </div>
      </div>
    </div>);
	}
}

PageTemplateEdit.defaultProps = {
  titleInfo:"Edit Template Information",
	initValue:{}
};
export default PageTemplateEdit;