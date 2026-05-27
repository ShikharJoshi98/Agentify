import { Handle, Position } from "@xyflow/react";

function WorkflowNode({ data }) {
    const Icon = data.icon;

    return (
        <div className="relative flex items-center gap-2 bg-white border border-gray-200 rounded-2xl p-1 shadow-sm hover:shadow-md transition-all duration-200">
            <Handle
                type="target"
                position={Position.Left}
                className="w-1! h-1! bg-gray-400!"
            />
            <div
                className={`flex items-center justify-center size-6 rounded-xl ${data.bgColor}`}
            >
                <Icon className="size-3 text-gray-800" />
            </div>
            <div className="flex flex-col">
                <h2 className="text-xs pr-2 font-semibold text-gray-800">
                    {data.label}
                </h2>
            </div>
            <Handle
                type="source"
                position={Position.Right}
                className="w-1! h-1! bg-black!"
            />
        </div>
    );
}

export default WorkflowNode;