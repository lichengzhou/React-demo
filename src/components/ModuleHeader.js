/**
 *模块管理
 * 模块管理头部组件
 */
import React from 'react';
import ModuleProp from './ModuleProp';

class ModuleHeader extends React.Component{
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
            <button className="save-btn">保存</button>
            <button onClick={this.quit.bind(this)}>退出编辑</button>
        </div>
    </div>
    <ModuleProp /></div>);
	}
}

ModuleHeader.defaultProps = {pageName:'报名云讲堂页面布局'};
export default ModuleHeader;