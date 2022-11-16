import * as React from 'react';
import { Component } from 'react';
import { SortableContainer, SortableElement, arrayMove, SortOverHandler } from '@visualbi/react-sortable-hoc';

interface IDraggableProps {
  items: any[];
  onChange: Function;
  itemRenderer: any;
  shouldCancelStart: Function;
  axis?: string;
  onDelete?: SortOverHandler;
  dragContainer?: any;
}

const SortableList = SortableContainer((props: any) => {
  const { items, itemRenderer } = props;
  return (
    <div className="bf-ui-draggable-list">
      {items.map((item, index) => {
        return <SortableItem key={`item-${index}`} index={index} value={{ item, itemRenderer, index }} />
      })}
    </div>
  );
});

const SortableItem: any = SortableElement(({ value }) => {
  return <div>{value.itemRenderer(value.item, value.index)}</div>
})

export default class Draggable extends Component<IDraggableProps> {
  constructor(props) {
    super(props);
    this.state = {
      container: null
    }
    this.onSortEnd = this.onSortEnd.bind(this);
    this.shouldCancelStart = this.shouldCancelStart.bind(this);
  }

  static defaultProps = {
    items: [],
    itemRenderer: () => { },
    onChange: () => { },
    shouldCancelStart: () => { }
  };

  onSortEnd({ oldIndex, newIndex }, e) {
    const { items, onChange } = this.props;
    onChange(arrayMove(items, oldIndex, newIndex), oldIndex, newIndex, e);
  }

  shouldCancelStart(e) {
    const { shouldCancelStart } = this.props;
    // call external shouldCancelStart also
    return shouldCancelStart(e);
  }

  render() {
    const { items, itemRenderer, axis, onDelete, dragContainer } = this.props;
    return (
      <div>
        <SortableList
          items={items}
          itemRenderer={itemRenderer}
          onSortEnd={this.onSortEnd}
          onSortOver={onDelete}
          shouldCancelStart={this.shouldCancelStart}
          axis={axis}
          helperContainer={dragContainer}
        />
      </div>
    );
  }
}
