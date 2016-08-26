/**
 *页面管理
 * 页面设置信息弹出组件
 */
import React from 'react';
import $ from 'jquery';

class CreatePageComponent extends React.Component{
	constructor(props){
		super(props);
    this.state = {initValue:props.initValue};
	}

	initDefaultValue(data){
		//根据是否有页面id判断是否是编辑
		if(data && data.pageId){
			$(".prop-mask .title span").text("编辑页面");
		}
	}

  // componentDidMount() {
  //   // this.setState({initValue:this.props.initValue});
  //   // console.log("1:" + this.state.initValue);
  //   // console.log("2:" + this.props.initValue);
  // }
  handleChange(key,e) {
    let initValue = this.props.initValue;
    initValue[key] = e.target.value;
    this.setState({initValue: initValue});
  }
	render(){
    let data;
    if(this.state.initValue.isEidt){
      data = this.props.initValue;
    }
    else{
      data = this.props.initValue;
    }
    
    let flag = {display:'none'};
    if(data.edit){
      flag = {display:'block'};
    }
    
		return (<div style={{display:'none'}} id="create-page">
      <div className="prop-mask" ></div>
      <div className="prop prop-new">
            <div className="title"><span>{data.titleInfo}</span><a href="javascript:void(0)" className="close" onClick={this.props.close}><i className="glyphicon glyphicon-remove"></i></a></div>
            <div className="content">
            <form className="form-horizontal">
                 <div className="control-group">
                    <label className="control-label">Name</label>
                    <div className="controls">
                      <input type="text" id="name" value={data.name} onChange={this.handleChange.bind(this, "name")}/>
                    </div>
                  </div>
                  <div style={flag}>
                    <div className="control-group">
                      <label className="control-label">Share Image</label>
                      <div className="controls">
                        <input type="text" id="shareImg" placeholder="" value={data.shareImg} onChange={this.handleChange.bind(this, "shareImg")}/>
                      </div>
                    </div>
                    <div className="control-group">
                      <label className="control-label">Share Title</label>
                      <div className="controls">
                        <input type="text" id="shareTitle" placeholder="" value={data.shareTitle} onChange={this.handleChange.bind(this, "shareTitle")}/>
                      </div>
                    </div>
                    <div className="control-group">
                      <label className="control-label">Share Description</label>
                      <div className="controls">
                        <input type="text" id="shareDescription" placeholder="" value={data.shareDescription} onChange={this.handleChange.bind(this, "shareTitle")}/>
                      </div>
                    </div>
                  </div>
                  <div className="control-group">
                    <label className="control-label">LP Title</label>
                    <div className="controls">
                      <input type="text" id="title" placeholder="" value={data.title} onChange={this.handleChange.bind(this, "title")}/>
                    </div>
                  </div>
                  <div className="control-group">
                    <label className="control-label">LP Link</label>
                    <div className="controls">
                      <input type="text" id="netName" placeholder="" onKeyUp={data.link} onChange={this.handleChange.bind(this, "link")}/>
                    </div>
                  </div>
                  <div className="control-group">
                    <label className="control-label"></label>
                    <div className="controls">
                      <label className="control-label" id="netValue">{data.link}</label>
                    </div>
                  </div>
                  <div className="control-group">
                    <label className="control-label">LP Catagory</label>
                    <div className="catagory">
                      <select id="catagory" value={data.catagory} onChange={this.handleChange.bind(this, "catagory")}>
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
                    <label className="control-label">Responsive Style</label>
                    <div className="responsive">
                      <select id="responsive" value={data.responsive} onChange={this.handleChange.bind(this, "responsive")}>
                          <option value="0">phone</option>
                          <option value="1">pc</option>
                          <option value="2">responsive</option>
                      </select>
                    </div>
                  </div>
                  <div className="control-group">
                    <label className="control-label"></label>
                    <div className="controls">
                      <button className="cancel" type="button" onClick={this.props.close}>Cancel</button>
                      <button className="save" type="button" onClick={this.props.save}>Save</button>
                    </div>
                  </div>
                </form>
            </div>
      </div>
    </div>);
	}
}

function keyUpName(){
	$("#netValue").text($("#netName").val());
}
CreatePageComponent.defaultProps = {
	displayStyle:{display:'none'},
	keyUpName:keyUpName
};
export default CreatePageComponent;