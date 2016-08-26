/**
 *页面管理
 * 页面转化为模版组件
 */
import React from 'react';
import $ from 'jquery';


class PageToTemplate extends React.Component{
	constructor(props){
		super(props);
    this.state = {initValue:props.initValue};
	}

  close(){
    document.querySelector(".prop-template").style.display = "none";
  }

  handleChange(key,e) {
    let initValue = this.props.initValue;
    initValue[key] = e.target.value;
    this.setState({initValue: initValue});
  }

	save(){
    let templateValue = this.props.initValue;
    let name = document.querySelector(".prop-template #name").value;
    let imgUrl = document.querySelector(".prop-template #img").value;
    templateValue.name = name;
    templateValue.imageUrl = imgUrl;
    document.querySelector(".prop-template").style.display = "none";
  }
	render(){
    let data = this.state.initValue;
    if(!data.name){
      data = this.props.initValue;
    }
    console.log(data);
		return (<div className="prop-template" style={{display:'none'}}>
      <div className="prop-mask" ></div>
      <div className="prop">
            <div className="title"><span>{this.props.titleInfo}</span><a href="javascript:void(0)" className="close" onClick={this.close.bind(this)}><i className="glyphicon glyphicon-remove"></i></a></div>
            <div className="content">
            <form className="form-horizontal">
                 <div className="control-group">
                    <label className="control-label">Template Name</label>
                    <div className="controls">
                      <input type="text" id="name" placeholder="name" value={data.name} onChange={this.handleChange.bind(this,"name")}/>
                    </div>
                  </div>
                  <div className="control-group">
                    <label className="control-label">Template Image</label>
                    <div className="controls">
                      <input type="text" id="img" placeholder="" value={data.imgUrl} onChange={this.handleChange.bind(this,"imgUrl")}/>
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

PageToTemplate.defaultProps = {
	initValue:{},
  titleInfo:"Generate Template",
};
export default PageToTemplate;