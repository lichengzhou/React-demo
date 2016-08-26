/**
 *页面管理
 * 页面列表过滤条件
 */
import React from 'react';

class TopTitleComponent extends React.Component{
	changeCatalog(){
		let catalogDom = document.querySelector(".toptitle .type");
		let selected = catalogDom.selectedIndex;
		let condition = JSON.parse(localStorage.getItem("page.condition")) || {};
		condition.catagory = catalogDom.options[selected].value;
		localStorage.setItem("page.condition", JSON.stringify(condition));
		this.props.updateCondition();
	}
	changeStatus(){
		let status = "";
		let temp = document.querySelector(".toptitle .unrelease");
		if(temp.checked){
			status = temp.value;
		}

	    temp = document.querySelector(".toptitle .expired");
		if(temp.checked){
			status.length > 0 ? status + "," + temp.value : temp.value
		}

		let condition = JSON.parse(localStorage.getItem("page.condition")) || {};
		condition.status = status;
		localStorage.setItem("page.condition", JSON.stringify(condition));
		this.props.updateCondition();
	}

	render(){
		let unrelease = false, expired = false;
		if(this.props.status.indexOf("0") > -1){
			unrelease = true;
		}
		if(this.props.status.indexOf("2") > -1){
			expired = true;
		}
		return (
			<div className="toptitle">
	        <select className="type" onChange={this.changeCatalog.bind(this)} defaultValue={this.props.catagroy}>
			  <option value="0">常规</option>
              <option value="1">报名云讲堂</option>
              <option value="2">抽奖</option>
              <option value="3">兑换序列号</option>
              <option value="4">答题类</option>
              <option value="5">短信验证码</option>
              <option value="6">上传图片证书</option>
              <option value="7">直播LP</option>
	        </select>
	        <span className="right"><i className="glyphicon glyphicon-th-large"></i></span>
	        <span className="right"><i className="glyphicon glyphicon-list"></i></span>
	        <span className="right line"></span>
	        <span className="right"><input className="unrelease" type="checkbox" value="0" defaultChecked={unrelease} onChange={this.changeStatus.bind(this)}/>未发布</span>
	        <span className="right"><input className="expired" type="checkbox" value="2" defaultChecked={expired} onChange={this.changeStatus.bind(this)}/>已下架</span>     
	        </div>);
	}
}

TopTitleComponent.defaultProps = {
	catagroy:0
};
export default TopTitleComponent;