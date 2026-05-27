import { useEffect, useState } from "react"
import { LuPlus, LuSparkles } from "react-icons/lu"
import AgentBuilderModal from "../components/AgentBuilderModal";
import { useDispatch, useSelector } from "react-redux";
import { agentGetRequest } from "../modules/features/agent/agentAction";
import { colors } from "../constants/dashboard";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading } = useSelector(state => state.agent.agentGet);
    const { agents } = useSelector(state => state.agent);
    const [selectedTab, setSelectedTab] = useState("My Agents");
    const [isAgentBuilderModal, setAgentBuilderModal] = useState(false);

    useEffect(() => {
        dispatch(agentGetRequest());
    }, [dispatch]);

    return (
        <section className="max-w-7xl w-full mx-auto  p-10">
            <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                    <div>
                        <div className="flex items-center gap-3">
                            <div>
                                <h1 className="text-xl font-semibold tracking-tight text-gray-900">
                                    Create an AI Agent
                                </h1>
                                <p className="mt-1 text-sm text-gray-500">
                                    Build custom workflows, tools and automation.
                                </p>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={() => setAgentBuilderModal(true)}
                        className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-black px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-neutral-800 active:scale-95"
                    >
                        <LuPlus className="w-4 h-4 transition-transform duration-300 group-hover:rotate-90" />
                        <span>Create Agent</span>
                    </button>
                </div>
            </div>
            <div className="w-fit flex space-x-2 bg-white p-1 border border-gray-500/50 rounded-full mt-20 mx-auto text-sm">
                {
                    ["My Agents", "Template"].map(((tab, index) =>
                        <div key={index} className="flex items-center">
                            <input type="radio" name="options" id={tab} className="hidden peer" checked={tab === selectedTab} onChange={() => setSelectedTab(tab)} />
                            <label htmlFor={tab} className={`cursor-pointer font-medium rounded-full py-2 px-9 text-gray-500 transition-colors duration-300 peer-checked:bg-black peer-checked:text-white`}>{tab}</label>
                        </div>
                    ))
                }
            </div>
            <div className={`mt-10 gap-4 ${(loading || agents.length > 0) ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "flex flex-col items-center justify-center"}`}>
                {selectedTab === "My Agents" &&
                    (loading ?
                        Array.from({ length: 3 }).map((_, index) => (
                            <div
                                key={index}
                                className="group rounded-3xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >
                                <div className="flex items-center justify-center animate-pulse w-12 h-12 rounded-2xl bg-gray-100 text-black">
                                </div>
                                <div className="mt-5">
                                    <div className="h-5 w-[50%] rounded-full bg-gray-100 animate-pulse font-semibold tracking-tight text-gray-900">
                                    </div>
                                    <div className="mt-2 w-full h-4 animate-pulse rounded-full bg-gray-200 text-gray-500">
                                    </div>
                                    <button className="rounded-xl mt-5 ml-auto h-4 w-8 animate-pulse border border-gray-200 px-3 py-1 bg-gray-100">
                                    </button>
                                </div>
                            </div>
                        ))
                        :
                        (agents.length > 0 ?
                            agents.map((agent, index) => (
                                <div
                                    key={index}
                                    className="group rounded-3xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                                >
                                    <div className={`flex items-center justify-center w-12 h-12 rounded-2xl ${colors[Math.floor(Math.random() * colors.length)]} border border-gray-400 text-black`}>
                                        <LuSparkles className="w-5 h-5" />
                                    </div>
                                    <div className="mt-5">
                                        <h2 className="text-lg font-semibold tracking-tight text-gray-900">
                                            {agent.name}
                                        </h2>
                                        <p className="mt-2 text-sm text-gray-500">
                                            {agent.description || "No Description"}
                                        </p>
                                        <button onClick={() => navigate(`/agent-builder/${agent?._id}`)} className="rounded-xl mt-5 place-self-end block border border-gray-200 px-3 py-1 text-xs font-medium text-gray-600 hover:bg-gray-100">
                                            Open
                                        </button>
                                    </div>
                                </div>
                            )) :
                            <p className="mt-20 py-2 px-4 bg-gray-100 text-neutral-500 border border-gray-500 rounded-full text-xs">No Agents Present</p>))
                }
            </div>
            {
                isAgentBuilderModal && <AgentBuilderModal onClose={() => setAgentBuilderModal(false)} />
            }
        </section >
    )
}

export default Dashboard