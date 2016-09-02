/**
 * 模块管理
 * 单个布局展示组件，主要为了展示布局组件的样子以及一些关键信息
 */
import React from 'react';
import {Link} from 'react-router';

class LayoutItem extends React.Component{
	constructor(props){
        super(props);
        this.state = {status: this.props.item.status};
    }
    editInfo(){
        document.querySelector(".moduleList .newLayout").style.display = "block";
        document.querySelector(".moduleList .newModule").style.display = "none";
        this.props.editInfo(this.props.item, "2");
    }
	render(){
		var releaseClass;
		//未发布		
		if(this.state.status == 0){
			releaseClass = "unrelease";
		}
		else if(this.state.status == 1){
			releaseClass = "unrelease release";
		}
		return (
			<li className="container">
                <div className={releaseClass}>
                    {this.props.item.statusDescription}
                </div>
                <div className="top"></div>
                <div className="content">
                    <span>{this.props.item.name}</span>
                    <div>
                        <span className="del">
                            <a href="javascript:void(0)" onClick={this.editInfo.bind(this)}><i className="glyphicon glyphicon-edit"></i></a>
                        </span>
                    <div>
                </div>
            </div></div></li>);
	}
}

LayoutItem.defaultProps = {};
export default LayoutItem;



