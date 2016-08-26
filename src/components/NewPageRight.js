/**
 *新建页面
 * 模块数据页面
 */
import React from 'react';
import $ from 'jquery';

import Layout from './Layout';

class NewPageRight extends React.Component{
	constructor(props){
		super(props);
		this.state = {
	      layoutList: [
	        { accepts: ["0", "1", "2"], lastDroppedItem: null}
	      ],
	      componentList:{
	      	"0":[{name:"we", type:"1", imgUrl:"w", id:"12"}, {name:"qe", type:"1", imgUrl:"wqw", id:"1wq2"}]
	      }
	    };
	}
	
	changeView(event){
		event.stopPropagation();
		if(event.target.nodeName.toUpperCase() == "SPAN"){
			let spanList = document.querySelectorAll(".btn-group span");
			Array.from(spanList).map(function(item){item.className = item.className.replace("active", "");});
			let temp = event.target.className;
			event.target.className = temp + " active";
			if(temp == "pad"){
				document.querySelector(".right-div .wrap").style.width = "768px"
			}
			else if(temp == "phone"){
				document.querySelector(".right-div .wrap").style.width = "414px"
			}
			else{
				document.querySelector(".right-div .wrap").style.width = "980px"
			}
		}
	}

	handleDrop(index, item) {
	    
	    let temp = this.state.componentList;
	    if(!temp){
	    	temp = {};
	    }
	    var name = index;
	    if(!(temp[name] && temp[name].length > 0)){
	    	temp[name] = [];
	    }
	    (temp[name]).push(item);
	    //console.log(temp);
	    this.setState({
	     componentList: temp
	    });
	 }

	render(){
		return (<div className="right-div">
         <div className="btn-group" onClick={this.changeView.bind(this)}>
         	<span className="pc active" >网页视图</span>
         	<span className="pad">平板视图</span>
         	<span className="phone">手机视图</span>
         </div>
         <div className="wrap">
         	{this.state.layoutList.map((value, index) => <Layout accepts={value.accepts}
                     lastDroppedItem={value.lastDroppedItem}
                     onDrop={(item) => this.handleDrop(index, item)}
                     componentList={this.state.componentList[index]}
                     key={index}/>)}
         	
         </div>
       </div>);
	}
}
NewPageRight.defaultProps = {};
export default NewPageRight;