/**
 *组件新增页面
 * 组件内容填充部分
 */
import React from 'react';
import $ from 'jquery';

class ModuleLeft extends React.Component{
	changeTab(event){
		$(".left span").removeClass("active");
		$(event.target).addClass("active");
		$("textarea").css("display", "none");
		if($(event.target).hasClass("html")){
			$("textarea.html").css("display", "block");
		}
		else if($(event.target).hasClass("css")){
			$("textarea.css").css("display", "block");
		}
		else{
			$("textarea.js").css("display", "block");
		}
	}
	render(){
		return (<div className="left">
         <div className="title" onClick={this.changeTab.bind(this)}>
         <a href="javascript:void(0)"><span className="html active">HTML</span></a>
         <a href="javascript:void(0)"><span className="css">CSS</span></a>
         <a href="javascript:void(0)"><span className="js">JavaScript</span></a>
         </div>
         <div className="html-value">
            <textarea className="html" style={{display:'block'}}></textarea>
            <textarea className="css"></textarea>
            <textarea className="js"></textarea>
         </div>
       </div>);
	}
}


ModuleLeft.defaultProps = {};
export default ModuleLeft;