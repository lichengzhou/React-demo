/**
 * 创建页面
 * 组件缩略图展示
 */
import React, { PropTypes, Component } from 'react';
import { DragSource } from 'react-dnd';

const style = {
  cursor: 'move'
};

const boxSource = {
  beginDrag(props) {
    return {
      name: props.name
    };
  }
};

@DragSource(props => props.type, boxSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))
class ComponentInstance extends Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    isDropped: PropTypes.bool.isRequired
  };

  render() {
    const { name, isDropped, isDragging, connectDragSource, imgUrl } = this.props;
    const opacity = isDragging ? '0.4' : '1';

    return connectDragSource(<div style={{ ...style, opacity }}>
      <img src={imgUrl} /> <div>{name}</div>
    </div>);
  }
}

ComponentInstance.defaultProps = {name:"", imgUrl:""};
export default ComponentInstance;