/**
 *页面管理
 * 页面管理页面
 */
require('styles/common/bootstrap.min.css');
require('styles/common/common.css');
require('styles/page.css');

import React from 'react';
import {withRouter } from 'react-router';
import $ from 'jquery';
import Header from './PageHeader';
import PageSearch from './PageSearch';
import TopTitle from './PageTopTitle';
import PageDataItem from './PageDataItem';
import ModuleDataItem from './PageTemplateDataItem';
import CreatePage from './PageCreate';
import PageToTemplate from './PageToTemplate';
import PageTemplateProp from './PageTemplateProp';


//页面管理页面
class PageContainer extends React.Component{
	constructor(props){
		super(props);
		this.state={displayStyle:{display:'none'}, pageStyle:{display:'block'},
			moduleStyle:{display:'none'}, pageDataList:this.props.pageList,
			initValue:{titleInfo:'Create Page',name:"", title:"", linke:"",catagory:"0",responsive:"0"}
		};
		this.addPage = this.addPage.bind(this);
		this.close = this.close.bind(this);
		this.save = this.save.bind(this);
		this.pageSelected = this.pageSelected.bind(this);
		this.dealPageDataItem.bind(this);
		this.updateCondition.bind(this);
		this.getPageDataList.bind(this);
	}
	
	pageSelected(isTrue){
		if(isTrue){
			$(".condition .tab1").addClass("active").siblings().removeClass("active");
			this.setState({pageStyle:{display:'block'},moduleStyle:{display:'none'}});
		}
		else{
			$(".condition .tab2").addClass("active").siblings().removeClass("active");
			this.setState({pageStyle:{display:'none'},moduleStyle:{display:'block'}});
		}
		
	}
	addPage(){
		let initValue={titleInfo:'Create Page',name:"", title:"", linke:"",catagory:"0",responsive:"0", edit:false};
		document.querySelector("#create-page").style.display = "block";
		this.setState({initValue: initValue});
	}
	editPageInfo(itemValue, titleInfo){
		let initValue = {};
		initValue.titleInfo = titleInfo || "Edit Page Information";
		initValue.name = itemValue.name;
		initValue.title = typeof itemValue.headerParam == 'Object' ? itemValue.headerParam.title : "";
		initValue.link = itemValue.link;
		initValue.catagory = itemValue.catagory;
		initValue.responsive = itemValue.responsive;
		initValue.type = itemValue.type;
		initValue.edit = true;
		this.setState({initValue: initValue});
	}
	close(){
		document.querySelector("#create-page").style.display = "none";
	}
	save(){
		let name = document.querySelector(".prop-new #name").value;
		let title = document.querySelector(".prop-new #title").value;
		let link = document.querySelector(".prop-new #netValue").innerText;
		let catagoryDom = document.querySelector(".prop-new #catagory");
		let selectedIndex = catagoryDom.selectedIndex;
		let catagory = catagoryDom.options[selectedIndex].value;
		// let reaponsiveDom = document.querySelectorAll(".prop-new [name='type']");
		// let responsive;
		// for(let i = 0; i < reaponsiveDom.length; i++){
		// 	if(reaponsiveDom[i].checked){
		// 		responsive = reaponsiveDom[i].value;
		// 	}
		// }
		let responsiveDom = document.querySelector(".prop-new #catagory");
		let selectedresponsive = responsiveDom.selectedIndex;
		let responsive = responsiveDom.options[selectedresponsive].value;

		let shareImg = document.querySelector(".prop-new #shareImg").value;
		let shareTitle = document.querySelector(".prop-new #shareTitle").value;
		let shareDescription = document.querySelector(".prop-new #shareDescription").value;
		document.querySelector("#create-page").style.display = "none";
		this.props.router.push("/createPage/1");
	}
	//过滤数据
	dealPageDataItem(pageDataList, itemValue, theme, catagory, keywords, status){
		pageDataList = pageDataList || [];
		let flag = true;
		if(theme && itemValue.theme != theme){
			flag = false;
		}

		if(flag && catagory && itemValue.catagory != catagory){
			flag = false;
		}

		if(flag && keywords && itemValue.name.indexOf(keywords) == -1){
			flag = false;
		}

		if(flag && status && status.indexOf(itemValue.status) > -1){
			flag = true;
		}
		else if(flag && itemValue.status == "1"){
			flag = true;
		}
		else{
			flag = false;
		}

		let statusValue = itemValue.status;
		let themeValue = itemValue.catagory;
		if(statusValue == "0"){
			itemValue.statusDescription = "draft";
		}
		else if(statusValue == "1"){
			itemValue.statusDescription = "release";
		}
		else if(statusValue == "2"){
			itemValue.statusDescription = "expired";
		}

		if(themeValue == "0"){
			itemValue.tag = "vipabc";
		}
		else if(themeValue == "1"){
			itemValue.tag = "vipabc junior";
		}
		else if(themeValue == "2"){
			itemValue.tag = "TotorABC";
		}
		else if(themeValue == "3"){
			itemValue.tag = "TotorABC jr";
		}
		if(flag){
			pageDataList.push(itemValue);
		}
		return itemValue;
	}

	//获取页面主题，vipabc，vipabc junior等
	updateCondition(){
		let {pageDataList} = this.getPageDataList();
		this.setState({pageDataList:pageDataList});
	}
	page2Template(itemValue){
		let initValue = itemValue;
		initValue.titleInfo = "Edit Template Information";
		this.setState({initValue:initValue});
	}
	getPageDataList(){
		let that = this;
		let conditionValue = JSON.parse(localStorage.getItem("page.condition"));
		let defaultCondition = {theme:"0", catagory:"0", keywords:"", status:""};
		conditionValue = conditionValue || defaultCondition; 
		Object.assign(defaultCondition, conditionValue);
		let theme = defaultCondition.theme;
		let catagory = defaultCondition.catagory;
		let keywords = defaultCondition.keywords;
		let status = defaultCondition.status;
		//处理页面单个数据数据
		let pageDataList = [];
		this.props.dataList.forEach(function(itemValue){
			that.dealPageDataItem(pageDataList, itemValue, theme, catagory, keywords, status);
		});
		pageDataList = pageDataList.map(itemValue => (<PageDataItem item={itemValue} key={itemValue.id} editPageInfo={this.editPageInfo.bind(this, itemValue, 'Edit Page Information')}/>));
		return {pageDataList, theme, catagory, keywords, status};
	}
	render(){
		let templateInfo = "Edit Template";
		let {pageDataList, theme, catagory, keywords, status} = this.getPageDataList();
		let moduleDataList = this.props.dataList.map(itemValue => (<ModuleDataItem item={itemValue} key={itemValue.id} editPageInfo={this.editPageInfo.bind(this, itemValue, templateInfo)} />));
		return (
			<div className="page">
				<Header updateCondition={this.updateCondition.bind(this)} defaultValue={theme} />
				<PageSearch addPage={this.addPage} pageSelected={this.pageSelected} updateCondition={this.updateCondition.bind(this)} keywors={keywords}/>
				<div className="wrap page" style={this.state.pageStyle}>
					<TopTitle updateCondition={this.updateCondition.bind(this)} catagroy={catagory} status={status}/>
					<ul>
						{pageDataList}
					</ul>
				</div>
				<div className="wrap module" style={this.state.moduleStyle}>
					<ul>
						{moduleDataList}
					</ul>
				</div>
				<CreatePage close={this.close} save={this.save} initValue={this.state.initValue}/>
				<PageToTemplate initValue={this.state.initValue}/>
				<PageTemplateProp initValue={this.state.initValue}/>
			</div>
		);
	}
}

var pageList = {dataList:[{id:1,name:"0首发 0利率1", theme:"0", headerParam:{}, templateId:"1", status:1, catagory:"0", layoutData:{}, 
							type:"0", layoutId:"",pageJs:"", pageCss:"", tag:"官网"},
			{id:2,name:"0首发 0利率2", theme:"1", headerParam:{}, templateId:"1", status:0, catagory:"1", layoutData:{}, 
							type:"0", layoutId:"",pageJs:"", pageCss:"", tag:"官网"},
			{id:3,name:"0首发 0利率3", theme:"1", headerParam:{}, templateId:"1", status:1, catagory:"0", layoutData:{}, 
							type:"0", layoutId:"",pageJs:"", pageCss:"", tag:"官网"},
			{id:4,name:"0首发4", theme:"0", headerParam:{}, templateId:"1", status:1, catagory:"2", layoutData:{}, 
							type:"0", layoutId:"",pageJs:"", pageCss:"", tag:"官网"},
			{id:5,name:"0首发5", theme:"0", headerParam:{}, templateId:"1", status:0, catagory:"2", layoutData:{}, 
							type:"0", layoutId:"",pageJs:"", pageCss:"", tag:"官网"},]};
localStorage.setItem("pageList", JSON.stringify(pageList));

PageContainer.defaultProps = pageList;
PageContainer.propTypes = {
  router: React.PropTypes.shape({
    push: React.PropTypes.func.isRequired
  }).isRequired
};
var DecoratePageContainer = withRouter(PageContainer);
export default DecoratePageContainer;