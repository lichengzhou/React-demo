/**
 *页面管理
 * 页面管理头部
 */
import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';

class HeaderComponent extends React.Component{
	changeTheme(){
		let themeDom = document.querySelector(".left Select");
		let selectedIndex = themeDom.selectedIndex;
		let condition = JSON.parse(localStorage.getItem("page.condition")) || {};
		condition.theme = themeDom.options[selectedIndex].value;
		localStorage.setItem("page.condition", JSON.stringify(condition));
		this.props.updateCondition();
	}
	render(){
		let brandsList;
		if(this.props.brands && this.props.brands.length > 0){
			brandsList = this.props.brands.map(item => (<option value={item.value}>{item.name}</option>));
		}
		return (
			<div className="header">
		        <div className="center">LP Generation System</div>
		        <div className="left">
		            <select onChange={this.changeTheme.bind(this)} defaultValue={this.props.defaultValue}>
		            	{brandsList}
		            </select>
		        </div>
		        <div className="right">
		            <span className="user"><i className="glyphicon glyphicon-user"></i>{this.props.userName}</span>
		            <span className="split"></span>
		            <span className="menu" onClick={this.props.showMenu}><i className="glyphicon glyphicon-align-justify"></i></span>
		            <ul onClick={this.props.goUrl}>
		                <li><i className="glyphicon glyphicon-picture"></i>图片管理</li>
		                <li><Link to={`/moduleList`}><i className="glyphicon glyphicon-book"></i>模块管理</Link></li>
		                <li><i className="glyphicon glyphicon-user"></i>用户管理</li>
		                <li><i className="glyphicon glyphicon-question-sign"></i>新手帮助</li>
		                <li><i className="glyphicon glyphicon-log-out"></i>退出登录</li>
		            </ul>
		        </div>
		    </div>
		);
	}
}
HeaderComponent.defaultProps = {
			brands: [{value:0, name:"vipabc"}, {value:1, name:"vipabc junior"}, {value:2, name:"TutorABC"}, {value:3, name:"TutorABC Jr"}],
			userName: "Josh",
			showMenu: function(){
				$(".header ul").toggle();
			},
			goUrl: function(event){
				if(event.target){

				}
				$(".header ul").toggle();
			},
			defaultValue:0
		};
export default HeaderComponent;
