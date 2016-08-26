/**
 *模块管理
 * 
 */
require('styles/common/bootstrap.min.css');
require('styles/common/common.css');
require('styles/moduleList.css');

import React from 'react';
import Header from './PageHeader';
import ModuleTitle from './ModuleTitle';
import ModuleItem from './ModuleItem';
// import LayoutItem from './LayoutItem';

class ModuleList extends React.Component{
	render(){
		return(<div className="moduleList">
				<Header></Header>
				<ModuleTitle />
			</div>);
	}
}

ModuleList.defaultProps = {};
export default ModuleList;



