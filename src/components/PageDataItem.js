/**
 *页面管理
 * 单个页面展示组件
 */
import React from 'react';
import {Link} from 'react-router';
import CopyToClipboard from 'react-copy-to-clipboard';


class PageDataItem extends React.Component{
	constructor(props){
        super(props);
        this.state = {status: props.item.status, value:""};
    }
    editPageInfo(item){
        this.props.editPageInfo(item);
        document.querySelector("#create-page").style.display = "block";
    }
    open(){
        document.querySelector(".prop-template").style.display = "block";
        let item = this.props.item;
        item.isGenerate = true;
        this.props.editPageInfo(item, "Generate Template", true);
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
        let link = this.props.item.id;

		return (
			<li className="container" data-pageId={this.props.item.id} >
                <div className={releaseClass}>
                    {this.props.item.statusDescription}
                </div>
                <div className="top"></div>
                <div className="content">
                    <span>{this.props.item.name}</span>
                    <div>
                        <span><i className="glyphicon glyphicon-tag"></i>{this.props.item.tag}</span>
                        <span className="del">
							<a href="javascript:void(0)" title="设置为模版" onClick={this.open.bind(this)}><i className="glyphicon glyphicon-copy"></i></a>
                            <a href="javascript:void(0)" title="页面设置" onClick={this.editPageInfo.bind(this, this.props.item)}><i className="glyphicon glyphicon-cog"></i></a>
                        </span>
                    <div>
                </div>
                <div className="mask">
                	<div className="display">
                		<div className="icon"><a href="javascript:void(0)"><i className="glyphicon glyphicon-eye-open"></i></a></div>
                		<div>预览</div>
                	</div>
                	<div className="display">
                		<div className="icon"><Link to={`/createPage/${this.props.item.id}`}><i className="glyphicon glyphicon-edit"></i></Link></div>
                		<div>编辑</div>
                	</div>
                    <CopyToClipboard text={link}>
                	<div className="display">
                		<div className="icon"><a href="javascript:void(0)"><i className="glyphicon glyphicon-link"></i></a></div>
                		<div>复制链接</div>
                	</div>
                    </CopyToClipboard>
                </div>
            </div></div></li>);
	}
}

PageDataItem.defaultProps = {item:{status:"0", statusDescription:"发布", name:"0首发 0利率", tag:"官网"}};
export default PageDataItem;