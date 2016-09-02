/**
 *创建页面
 * 
 */
require('styles/common/bootstrap.min.css');
require('styles/common/common.css');
require('styles/newPage.css');

import React from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend, { NativeTypes } from 'react-dnd-html5-backend';
import Header from './NewPageHeader';
import NewPageLeft from './NewPageLeft';
import NewPageRight from './NewPageRight';

@DragDropContext(HTML5Backend)
class NewPage extends React.Component{
	constructor(props){
		super(props);
		this.state = {pageData:{laoutId:"1"}};
	}

	changeLayout(layoutId){
		let pageData = this.state.pageData;
		pageData.layoutId = layoutId;
		this.setState({pageData:pageData});
	}

	render(){
		return(<div className="newPage">
				<Header></Header>
				<NewPageLeft changeLayout={this.changeLayout.bind(this)}/>
				<NewPageRight  pageData={this.props.pageData}/>
			</div>);
	}
}

NewPage.defaultProps = {};
export default NewPage;