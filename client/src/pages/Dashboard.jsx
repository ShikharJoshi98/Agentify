import { useEffect, useState } from "react"
import { LuPlus } from "react-icons/lu"
import AgentBuilderModal from "../components/AgentBuilderModal";
import { useDispatch, useSelector } from "react-redux";
import { agentGetRequest } from "../modules/features/agent/agentAction";

function Dashboard() {
    const dispatch = useDispatch();
    const { agents } = useSelector(state => state.agent);
    const [selectedTab, setSelectedTab] = useState("My Agents");
    const [isAgentBuilderModal, setAgentBuilderModal] = useState(false);
    console.log(agents);
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
            {
                isAgentBuilderModal && <AgentBuilderModal onClose={() => setAgentBuilderModal(false)} />
            }
        </section>
    )
}

export default Dashboard