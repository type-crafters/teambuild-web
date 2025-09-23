"use client"; 
import { useState, type JSX } from "react";

export default function JoinOrganizationView(): JSX.Element {
    const [code, setCode] = useState<string>("");
    return (
        <main className="w-full min-h-screen flex flex-col items-center py-12 px-4 bg-blue-500/10 space-y-10">
            <div className="w-full max-w-lg mx-auto space-y-10">
                <div className="space-y-4">
                    <div className="flex flex-col items-center gap-4">
                        <i className="bi bi-bar-chart-line-fill text-6xl text-blue-500 p-4"></i>
                        <h1 className="text-3xl font-bold">Join Organization</h1>
                    </div>
                    <div className="text-center space-y-2">
                        <p className="text-lg opacity-70">Enter the invitation code you received to join your team&apos;s workspace.</p>
                    </div>
                </div>
                <form className="rounded-lg shadow-lg shadow-neutral-400 bg-white p-6 space-y-6">
                    <div className="w-full text-center space-y-4">
                        <h2 className="text-2xl font-semibold">Enter Invitation Code</h2>
                        <p className="opacity-80">
                            Your team admin should have provided you with a unique invitation code
                        </p>
                    </div>
                    <fieldset className="space-y-2">
                        <legend className="font-semibold">Invitation Code</legend>
                        <input
                            type="text"
                            name="invitationCode"
                            id="invitationCode"
                            value={code}
                            onChange={(event) => setCode(event.currentTarget.value)}
                            placeholder="Enter your invitation code"
                            className="w-full rounded-lg border border-neutral-300 px-2 py-1 outline-2 outline-transparent focus:outline-gray-400 duration-100 placeholder:text-center text-center placeholder:font-mono font-mono"
                        />
                    </fieldset>

                    <div>
                        <input
                            type="submit"
                            value="Join organization"
                            className="rounded-lg text-white font-semibold bg-blue-500 w-full text-center hover:bg-blue-600 cursor-pointer duration-200 py-1.5"
                        />
                    </div>
                    <div className="w-full rounded p-2 bg-blue-200 text-blue-700 space-y-2">
                        <h3 className="font-semibold">Need help?</h3>
                        <ul className="opacity-80 list-disc list-inside ml-2">
                            <li>Check your email for the invitation code</li>
                            <li>Ask your team admin to resend the invitation</li>
                            <li>Make sure you&apos;re using the correct code</li>
                        </ul>
                    </div>
                    <p className="text-center">
                        <span>Don&apos;t have an invitation code?</span>
                        &nbsp;
                        <a href="/organizations/create" className="text-blue-400 hover:underline">Create your own organization</a>
                    </p>
                </form>
            </div>
        </main>
    );
}