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
	render(){
		return(<div className="newPage">
				<Header></Header>
				<NewPageLeft />
				<NewPageRight />
			</div>);
	}
}

NewPage.defaultProps = {};
export default NewPage;