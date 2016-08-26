/**
 *组件新增
 * 
 */
require('styles/common/bootstrap.min.css');
require('styles/common/common.css');
require('styles/module.css');

import React from 'react';
import Header from './ModuleHeader';
import ModuleLeft from './ModuleLeft';
import ModuleRight from './ModuleRight';


class ModuleManage extends React.Component{
	render(){
		return(<div className="module">
				<Header></Header>
				<div className="wrap">
					<ModuleLeft />
					<ModuleRight />
				</div>
				<div className="preview"></div>
				
			</div>);
	}
}

ModuleManage.defaultProps = {};
export default ModuleManage;