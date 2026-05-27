import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEdge, applyEdgeChanges, applyNodeChanges, Background, Controls, MiniMap, Panel, ReactFlow } from '@xyflow/react';
import { useParams } from "react-router-dom";
import { LuChevronLeft, LuCode, LuPlay } from "react-icons/lu";
import { BsThreeDotsVertical } from "react-icons/bs";
import { agentFetchRequest } from "../modules/features/agent/agentAction";
import '@xyflow/react/dist/style.css';
import { agentTools, nodeTypes } from "../constants/agentBuilder";

function AgentBuilder() {
    const dispatch = useDispatch();
    const { agent } = useSelector((state) => state.agent);
    const { agentId } = useParams();
    const [addedNodes, setAddedNodes] = useState([{
        id: 'start',
        position: { x: 0, y: 0 },
        data: { label: 'Start' },
        type: 'StartNode'
    }]);
    const [nodeEdges, setNodeEdges] = useState([]);

    useEffect(() => {
        dispatch(agentFetchRequest(agentId));
    }, [dispatch, agentId]);

    const onAgentToolClick = (tool) => {
        const newNode = {
            id: `${tool.id}-${Date.now()}`,
            position: { x: 0, y: addedNodes.length * 10 },
            data: {
                label: tool.name,
                icon: tool.icon,
                bgColor: tool.bgColor
            },
            type: tool.type
        }
        setAddedNodes((prev) => [...prev, newNode])
    }
    const onNodesChange = useCallback(
        (changes) => setAddedNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
        [],
    );
    const onEdgesChange = useCallback(
        (changes) => setNodeEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
        [],
    );
    const onConnect = useCallback(
        (params) => setNodeEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
        [],
    );

    return (
        <main>
            <nav className="flex items-center justify-between py-5 sm:px-10 px-6 border-b border-gray-400 bg-gray-50">
                <div className="flex items-center gap-4">
                    <LuChevronLeft className="size-5" />
                    <h1 className="text-xl font-medium">{agent?.name}</h1>
                </div>
                <div className="sm:flex hidden items-center gap-3 text-sm">
                    <button className="flex items-center gap-2 border border-gray-500 py-2 px-3 cursor-pointer bg-gray-200 hover:bg-gray-300 rounded-md">
                        <LuCode className="size-4" />
                        <p className="font-medium">Code</p>
                    </button>
                    <button className="flex items-center gap-2 py-2 px-3 cursor-pointer bg-black text-white rounded-md">
                        <LuPlay className="size-4" />
                        <p className="font-medium">Preview</p>
                    </button>
                    <button className="py-2 px-3 cursor-pointer font-medium bg-black text-white rounded-md">
                        Publish
                    </button>
                </div>
                <button className="p-2 sm:hidden block rounded-md bg-gray-200"><BsThreeDotsVertical /></button>
            </nav>
            <div className="w-full h-[calc(100vh-81px)] overflow-hidden">
                <ReactFlow
                    nodes={addedNodes}
                    edges={nodeEdges}
                    nodeTypes={nodeTypes}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    fitView
                >
                    <Controls />
                    <Background variant="dots" gap={12} size={1} />
                    <Panel position="top-left">
                        <div className="bg-white p-3 rounded-2xl shadow">
                            <h2 className="font-medium text-gray-700 mb-4">AI Agent Tools</h2>
                            <div>
                                {
                                    agentTools.map((tool, index) => (
                                        <div onClick={() => onAgentToolClick(tool)} key={index} className="flex items-center gap-3 p-2 cursor-pointer hover:bg-gray-100 rounded-xl">
                                            <tool.icon className={`p-2 rounded-lg size-7 ${tool.bgColor}`}
                                            />
                                            <h2 className="text-sm font-medium text-gray-700">{tool.name}</h2>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </Panel>
                    <Panel position="top-right">
                        Settings
                    </Panel>
                </ReactFlow>
            </div>
        </main>
    )
}

export default AgentBuilder
