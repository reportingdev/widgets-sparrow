import React, { memo } from 'react';
import { NodeResizer } from 'reactflow';

interface Props {
  id: string;
  data: {
    args: any;
    Component: any;
  }
  isLocked: boolean;
  widget: any;
  minHeight?: number;
  minWidth?: number;
}

export const WidgetCardNode = memo((props: Props) => {
  const { Component, args } = props.data
  const { minHeight, minWidth } = props;
  return (
    <>
      <NodeResizer
        minHeight={minHeight}
        minWidth={minWidth}
        isVisible={true}
      />
    <div>
     <Component {...args} />
    </div>
    </>
  );
});
