/**
 * 创建页面
 * 页面数据布局组件，用来管理页面组件列表
 */
import React, { PropTypes, Component } from 'react';
import { DropTarget } from 'react-dnd';
import update from 'react/lib/update';
import ComponentInstance from './Component';
import ComponentEdit from './ComponentEdit';

const style = {
};

const layoutTarget = {
  drop(props, monitor) {
    props.onDrop(monitor.getItem());
  }
};

@DropTarget(props => props.accepts, layoutTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop()
}))
export default class Layout extends Component {
  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired,
    accepts: PropTypes.arrayOf(PropTypes.string).isRequired,
    lastDroppedItem: PropTypes.object,
    onDrop: PropTypes.func.isRequired
  };

  constructor(props){
    super(props);
    this.state = {componentList:props.componentList};
  }
  moveComponent(dragIndex, hoverIndex) {
    let { componentList } = this.state;
    const dragComponent = componentList[dragIndex];
    componentList.splice(dragIndex, 1);
    componentList.splice(hoverIndex, 0, dragComponent);
    this.setState({componentList: componentList});
  }
  deleteItem(index){
    let confirm = window.confirm("Are you sure to delete this component?");
    if(confirm){
      let { componentList } = this.state;
      componentList.splice(index, 1);
      this.setState({componentList: componentList});
    }
  }
  render() {
    const { accepts, isOver, canDrop, connectDropTarget, lastDroppedItem } = this.props;
    const isActive = isOver && canDrop;
    let componentList = this.props.componentList && this.props.componentList.length>0?this.props.componentList:[];
    let border = '1px solid';
    let backgroundColor = '#fff';
    if (isActive) {
      backgroundColor = 'darkgreen';
    } else if (canDrop) {
      backgroundColor = 'darkkhaki';
    }
    let width = '100%';
    let height = '500px';
    componentList.map(function(value, index){
       value.name = value.name ? value.name : "";
       value.type = value.type ? value.type : "";
       value.imgUrl = value.imgUrl ? value.imgUrl : "";
    });
    return connectDropTarget(
      <div style={{ ...style, backgroundColor, width, height, border }}>
          {componentList.map((value, index) => <ComponentEdit src={value.imgUrl} name={value.name} key={index} index={index} deleteItem={this.deleteItem.bind(this, index)} id={value.id} moveComponent={this.moveComponent.bind(this)}/>) }            
      </div>
    );
  }
}