import React, { FC, useEffect, useMemo } from "react";

import { Node, NodeChange, PanOnScrollMode, ProOptions, ReactFlow, ReactFlowProvider, useNodesState } from "reactflow";
import { WidgetCardNode } from "./widget-card";
import 'reactflow/dist/style.css';

const proOptions: ProOptions = { account: 'paid-pro', hideAttribution: true };

let idIndex = 0;
const getId = () => {
    idIndex += 1;
    return `node_${idIndex}`;
};

type Props = {
    Component: JSX.Element;
    args: Record<string, any>
}

// Created different wrapper because on moving widgets it was changing the args
// because of that the component was going to inifinty loop
const ReactFlowWrapper: FC<Props> = ({Component, args}) => {
    const gap = 12;

    const dashboardWidth = 960;
    const canvasHeight = 1080;

    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const handleNodesChange = (changes: NodeChange[]) => {
        onNodesChange(changes);
    }

    const snapGrid = useMemo<[number, number]>(() => [gap, gap], [gap]);

    useEffect(() => {
        let node: Node = {
            id: getId(),
            type: "WidgetCardNode",
            position: {
                x: 0,
                y: 0
            },
            data: {
                args,
                Component,
            },
            deletable: true,
            selected: false,
        };
        if (nodes.length) {
            node = nodes.slice(0, 1)[0];
            node.data = {
                args,
                Component,
            }
        }
        setNodes([node]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [args])

    const nodeTypes = useMemo(
        () => ({
            WidgetCardNode: WidgetCardNode as any,
        }),
        []
    );

    return (
        <div style={{height: canvasHeight, width: `100%`}}>
            <ReactFlowProvider>
                <ReactFlow
                    nodes={nodes}
                    onNodesChange={handleNodesChange}
                    nodeTypes={nodeTypes}
                    minZoom={1}
                    maxZoom={2}
                    defaultViewport={{
                        x: 0,
                        y: 0,
                        zoom: 1,
                    }}
                    panOnDrag={true}
                    panOnScroll={true}
                    zoomOnScroll={true}
                    nodesDraggable={true}
                    panOnScrollMode={PanOnScrollMode.Vertical}
                    panActivationKeyCode={null}
                    zoomActivationKeyCode={null}
                    autoPanOnNodeDrag
                    zoomOnPinch={false}
                    zoomOnDoubleClick={false}
                    nodeExtent={[
                        [0, 0],
                        [dashboardWidth, Infinity],
                    ]}
                    snapGrid={snapGrid}
                    snapToGrid
                    translateExtent={[
                        [0, 0],
                        [dashboardWidth, canvasHeight],
                    ]}
                    proOptions={proOptions}
                >
                </ReactFlow>
            </ReactFlowProvider>
        </div>
    );
}

const WidgetWrapper = (Component: any, args: Record<string, any>) => {
    return <ReactFlowWrapper
        Component={Component}
        args={args}
    />
};

export default WidgetWrapper;
