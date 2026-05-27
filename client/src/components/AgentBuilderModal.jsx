import { LuLoaderCircle, LuX } from "react-icons/lu";
import { useEffect, useState } from "react";
import Input from "./Input";
import { useDispatch, useSelector } from "react-redux";
import { agentCreateRequest, clearAgentState } from "../modules/features/agent/agentAction";
import { useNavigate } from "react-router-dom";

function AgentBuilderModal({ onClose }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading } = useSelector((state) => state.agent.agentCreate);
    const { agent } = useSelector((state) => state.agent);
    const [agentName, setAgentName] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        if (agent?._id) {
            navigate(`/agent-builder/${agent?._id}`);
            onClose();
        }
    }, [agent?._id, navigate, onClose]);

    useEffect(() => {
        return () => {
            dispatch(clearAgentState());
        };
    }, [dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(agentCreateRequest({ agentName, description }));
        setAgentName("");
        setDescription("");
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
            <div className="relative w-full max-w-md rounded-xl bg-white shadow-2xl border border-gray-200">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-black transition">
                    <LuX size={18} />
                </button>
                <div className="p-6">
                    <h2 className="text-lg font-semibold text-black">Enter Agent Name</h2>
                    <form onSubmit={handleSubmit} className="mt-4 space-y-6">
                        <Input placeholder="Agent Name" value={agentName} onChange={(e) => setAgentName(e.target.value)} />
                        <Input placeholder="Agent Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                        <div className="flex items-center justify-end gap-3">
                            <button type="button" onClick={onClose} className="px-4 py-2 text-sm font-medium text-black hover:text-gray-600 transition">Cancel</button>
                            <button type="submit" className="rounded-md bg-black px-5 py-2 text-sm font-medium text-white hover:bg-neutral-800 transition">
                                {
                                    loading ?
                                        <LuLoaderCircle className="animate-spin mx-auto size-6" />
                                        :
                                        "Create"
                                }
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AgentBuilderModal;