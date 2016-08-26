/**
 *页面管理
 * 搜索条件页面
 */
import React from 'react';

class PageSearchComponent extends React.Component{
	changeKeyWords(){
		let keywords = document.querySelector(".condition .keywords").value;
		let condition = JSON.parse(localStorage.getItem("page.condition")) || {};
		condition.keywords = keywords;
		localStorage.setItem("page.condition", JSON.stringify(condition));
		this.props.updateCondition();
	}
	render(){
		return (<div className="condition">
	        <div className="search"><a href="javascript:void(0)"><i className="glyphicon glyphicon-search"></i></a><input className="keywords" type="text" placeholder="search" defaultValue={this.props.keywords} onKeyUp={this.changeKeyWords.bind(this)}/></div>
	        <div className="right"><button onClick={this.props.addPage}>Create New Page</button></div>
	        <div className="switchTab">
	         <div>
	        <button className="tab tab1 active" data-type="1" onClick={this.props.pageSelected.bind(this, true)}>Page</button><button className="tab tab2" data-type="1" onClick={this.props.pageSelected.bind(this, false)}>Template</button>
	        </div>
	        </div>
    	</div>);
	}
}

PageSearchComponent.defaultProps={
	addPage:function(){
	},
	keywords:""
};
export default PageSearchComponent;