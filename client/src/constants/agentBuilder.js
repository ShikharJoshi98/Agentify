import { LuMerge, LuMousePointer, LuRepeat, LuSquare, LuThumbsUp, LuWebhook } from "react-icons/lu";
import StartNode from "../components/StartNode";
import WorkflowNode from "../components/WorkflowNode";

export const agentTools = [
    {
        name: "Agent",
        icon: LuMousePointer,
        bgColor: "bg-green-200",
        id: "agent",
        type: "workflowNode"
    },
    {
        name: "End",
        icon: LuSquare,
        bgColor: "bg-red-200",
        id: "end",
        type: "workflowNode"
    },
    {
        name: "If/Else",
        icon: LuMerge,
        bgColor: "bg-yellow-200",
        id: "IfElse",
        type: "workflowNode"
    },
    {
        name: "While",
        icon: LuRepeat,
        bgColor: "bg-blue-200",
        id: "while",
        type: "workflowNode"
    },
    {
        name: "User Approval",
        icon: LuThumbsUp,
        bgColor: "bg-violet-200",
        id: "approval",
        type: "workflowNode"
    },
    {
        name: "API",
        icon: LuWebhook,
        bgColor: "bg-cyan-200",
        id: "api",
        type: "workflowNode"
    }
]

export const nodeTypes = {
    workflowNode: WorkflowNode,
    StartNode
}