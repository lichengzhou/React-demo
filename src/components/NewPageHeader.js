/**
 *新建页面
 * 新建页面头部组件
 */
import React from 'react';
import ModuleProp from './ModuleProp';

class NewPageHeader extends React.Component{
	editData(){
		document.getElementsByClassName("edit")[0].style.display = "block";
	}
	quit(){
		document.getElementsByClassName('quit')[0].style.display = "block";
	}
	render(){
		return (<div><div className="header">
        <div className="center"></div>
        <div className="left">{this.props.pageName}</div>
        <div className="right">
            <button onClick={this.editData.bind(this)}>设置</button>
            <button className="save-btn">存为模版</button>
            <button className="save-btn">保存</button>
            <button className="save-btn">预览</button>
            <button className="save-btn">发布</button>
            <button onClick={this.quit.bind(this)}>退出编辑</button>
        </div>
    </div>
    <ModuleProp /></div>);
	}
}

NewPageHeader.defaultProps = {pageName:'0首付 0利率'};
export default NewPageHeader;