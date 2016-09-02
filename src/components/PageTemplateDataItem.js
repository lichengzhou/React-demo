/**
 *页面管理
 * 页面模版单个展示组件
 */
import React from 'react';
import {Link} from 'react-router';

class ModuleDataItem extends React.Component{
	constructor(props){
        super(props);
        this.state = {status: props.item.status};
    }
    editPageInfo(item){
        if(item == "2"){
            document.querySelector(".page .template-edit").style.display = "block";
            this.props.editPageInfo(item, "Edit Template Infomation");
        }
        else if(item == "1"){
            document.querySelector(".page #create-page").style.display = "block";
            this.props.editPageInfo(item, "Create Page By Template");
        }
        
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
							<a href="javascript:void(0)" title="根据模版创建页面" onClick={this.editPageInfo.bind(this, "1")}><i className="glyphicon glyphicon-copy"></i></a>
                            <Link to={`/createPage/${this.props.item.id}`}><i className="glyphicon glyphicon-edit"></i></Link>
                            <a href="javascript:void(0)" title="页面设置" onClick={this.editPageInfo.bind(this, "2")}><i className="glyphicon glyphicon-cog"></i></a>
                            <a style={{display:'none'}} href="javascript:void(0)" title="页面下架"><i className="glyphicon glyphicon-trash"></i></a>
                        </span>
                    <div>
                </div>
            </div></div></li>);
	}
}


ModuleDataItem.defaultProps = {item:{status:"0", statusDescription:"发布", name:"0首发 0利率", tag:"官网"}};
export default ModuleDataItem;