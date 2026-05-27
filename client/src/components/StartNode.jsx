import { Handle, Position } from "@xyflow/react";
import { LuPlay } from "react-icons/lu";

function StartNode() {
    return (
        <div className="relative flex items-center gap-2 bg-white border border-gray-300 rounded-xl p-1 shadow-sm">

            <div className="flex items-center justify-center size-6 border border-gray-300 rounded-xl bg-yellow-100">
                <LuPlay className="size-3 text-black" />
            </div>

            <h2 className="text-xs font-medium text-black pr-2">
                Start
            </h2>

            <Handle
                type="source"
                position={Position.Right}
                className="w-1! h-1! bg-black!"
            />
        </div>
    );
}

export default StartNode;