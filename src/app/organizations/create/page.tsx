"use client";

import Dropdown from "@components/Dropdown";
import FormControl from "@components/FormControl";
import Textbox from "@components/Textbox";
import { useState, type JSX } from "react";

export default function CreateOrganizationView(): JSX.Element {
    const [orgName, setOrgName] = useState("");
    const [description, setDescription] = useState("");
    const [industry, setIndustry] = useState("");
    const [teamSize, setTeamSize] = useState("");
    const [website, setWebsite] = useState("");
    return (
        <main className="w-full min-h-screen flex flex-col items-center py-12 px-4 bg-blue-500/10 space-y-10">
            <div className="w-full max-w-xl mx-auto space-y-10">
                <div className="space-y-4">
                    <div className="flex flex-col items-center gap-4">
                        <div className="rounded-full flex justify-center items-center bg-indigo-200">
                            <i className="bi bi-plus-lg text-6xl text-indigo-700 p-4"></i>
                        </div>
                        <h1 className="text-3xl font-bold">Create Organization</h1>
                    </div>
                    <div className="text-center space-y-2">
                        <p className="text-lg opacity-70">Set up your workspace and start managing projects with your team.</p>
                    </div>
                </div>
                <form className="rounded-lg shadow-lg shadow-neutral-400 bg-white p-6 space-y-6">
                    <div className="w-full text-left space-y-2">
                        <h2 className="text-2xl font-semibold">Organization Details</h2>
                        <p className="opacity-80">
                            Tell us about your organization to customize your ProjectFlow experience.
                        </p>
                    </div>
                    <FormControl type="text" legend="Organization Name" bi="bi-building" name="orgName" placeholder="Enter your organization name" state={orgName} setState={setOrgName} required />
                    <Textbox legend="Description (Optional)" name="description" placeholder="Brief description of your organization or team" state={description} setState={setDescription} />
                    <div className="grid grid-cols-2">
                        <Dropdown
                            legend="Industry"
                            name="industry"
                            placeholder="Choose your industry"
                            options={[
                                { value: "Technology" },
                                { value: "Healthcare" },
                                { value: "Finance" },
                                { value: "Education" },
                                { value: "Retail" },
                                { value: "Manufacturing" },
                                { value: "Consulting" },
                                { value: "Non-profit" },
                                { value: "Other" }
                            ]}
                            state={industry}
                            setState={setIndustry}
                            required
                        />
                    </div>
                    <div className="grid grid-cols-2">
                        <Dropdown
                            legend="Expected Team Size"
                            bi="bi-people"
                            name="teamSize"
                            placeholder="Select team size"
                            options={[
                                { text: "1-5 members", value: "1-5" },
                                { text: "6-15 members", value: "6-15" },
                                { text: "16-50 members", value: "16-50" },
                                { text: "51-100 members", value: "51-100" },
                                { text: "100+ members", value: "100+" },
                            ]}
                            state={teamSize}
                            setState={setTeamSize}
                            required
                        />
                    </div>
                    <FormControl
                        type="text"
                        legend="Website (Optional)"
                        bi="bi-globe"
                        name="orgWebsite"
                        placeholder="https://yourcompany.com"
                        state={website}
                        setState={setWebsite}
                    />
                    <div className="w-full rounded p-2 bg-blue-200 text-blue-700 space-y-2">
                        <h3 className="font-semibold">Your organization will include:</h3>
                        <ul className="opacity-80 list-disc list-inside ml-2">
                            <li>Unlimited projects and tasks</li>
                            <li>Team collaboration tools</li>
                            <li>Advanced analytics and reporting</li>
                            <li>14-day free trial with all features</li>
                        </ul>
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Create organization"
                            className="rounded-lg text-white font-semibold bg-blue-500 w-full text-center hover:bg-blue-600 cursor-pointer duration-200 py-1.5"
                        />
                    </div>
                    <p className="text-center">
                        <span>Already have an invitation code?</span>
                        &nbsp;
                        <a href="/organizations/join" className="text-blue-400 hover:underline">Join existing organization</a>
                    </p>
                </form>
            </div>
        </main>
    );
}