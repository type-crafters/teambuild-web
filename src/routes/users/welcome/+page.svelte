        <main class="w-full min-h-screen flex flex-col items-center py-12 px-4 bg-blue-500/10 space-y-10 text-lg">
            <div class="space-y-6">
                <div class="flex flex-col items-center gap-6">
                    <div class="aspect-square rounded-full bg-blue-100 flex justify-center items-center">
                        <i class="bi bi-bar-chart-line-fill text-7xl text-blue-500 p-4"></i>
                    </div>
                    <h1 class="text-3xl font-bold">Welcome to TeamBuild!</h1>
                </div>
                <div class="text-center space-y-2">
                    <p class="text-xl">You&apos;re all set up and ready to start managing projects.</p>
                    <p class="text-lg opacity-70">To get started, you can either join an existing organization or create a new one.</p>
                </div>
            </div>
            <div class="flex w-full max-w-3xl gap-8">
                <div class="flex-1 rounded-lg bg-white shadow-lg shadow-neutral-400 p-6 flex flex-col items-center space-y-4 hover:scale-101 duration-200">
                    <div class="bg-blue-500/20 rounded-full flex justify-center items-center aspect-square">
                        <i class="bi bi-people text-4xl text-blue-700 p-2"></i>
                    </div>
                    <h2 class="text-2xl font-bold">Join Organization</h2>
                    <p class="text-center opacity-70">
                        Already have an invitation code? Join your team&apos;s
                        existing workspace and start collaborating immediately.
                    </p>
                    <div class="w-full rounded p-2 text-base bg-white/80 space-y-2">
                        <h3 class="font-semibold">Perfect if you:</h3>
                        <ul class="opacity-80 list-disc list-inside ml-2">
                            <li>Have received an invitation code</li>
                            <li>Want to join an existing team</li>
                            <li>Need access to ongoing projects</li>
                        </ul>
                    </div>
                    <a href="/organizations/join" class="w-full py-1 flex justify-center items-center gap-2 rounded bg-blue-500 hover:bg-blue-600 text-white duration-200">
                        <span>Join with code</span>
                        <i class="bi bi-box-arrow-up-right text-sm"></i>
                    </a>
                </div>
                <div class="flex-1 rounded-lg bg-white shadow-lg shadow-neutral-400 p-6 flex flex-col items-center space-y-4 hover:scale-101 duration-200">
                    <div class="bg-green-500/20 rounded-full flex justify-center items-center aspect-square">
                        <i class="bi bi-plus-lg text-4xl text-green-700 p-2"></i>
                    </div>
                    <h2 class="text-2xl font-bold">Create Organization</h2>
                    <p class="text-center opacity-70">
                        Start fresh with your own workspace. Set up your team,
                        invite members, and begin your first project.
                    </p>
                    <div class="w-full rounded p-2 text-base space-y-2">
                        <h3 class="font-semibold">Perfect if you:</h3>
                        <ul class="opacity-80 list-disc list-inside ml-2">
                            <li>Are starting a new team</li>
                            <li>Want to be the organization admin</li>
                            <li>Need to set up from scratch</li>
                        </ul>
                    </div>
                    <a href="/organizations/create" class="w-full py-1 flex justify-center items-center gap-2 rounded bg-green-500 hover:bg-green-600 text-white duration-200">
                        <span>Create new organization</span>
                        <i class="bi bi-box-arrow-up-right text-sm"></i>
                    </a>
                </div>
            </div>
        </main>

<!-- 
import type { JSX } from "react";

export default function NewUserView(): JSX.Element {
    return (
        <main class="w-full min-h-screen flex flex-col items-center py-12 px-4 bg-gray-50 space-y-10 text-lg">
            <div class="space-y-6">
                <div class="flex flex-col items-center gap-6">
                    <div class="aspect-square rounded-full bg-blue-100 flex justify-center items-center">
                        <i class="bi bi-bar-chart-line-fill text-7xl text-blue-500 p-4"></i>
                    </div>
                    <h1 class="text-3xl font-bold">Welcome to TeamBuild!</h1>
                </div>
                <div class="text-center space-y-2">
                    <p class="text-xl">You&apos;re all set up and ready to start managing projects.</p>
                    <p class="text-lg opacity-70">To get started, you can either join an existing organization or create a new one.</p>
                </div>
            </div>
            <div class="flex w-full max-w-3xl gap-8">
                <div class="flex-1 rounded-lg bg-white shadow-lg shadow-neutral-400 p-6 flex flex-col items-center space-y-4 hover:scale-101 duration-200">
                    <div class="bg-blue-500/20 rounded-full flex justify-center items-center aspect-square">
                        <i class="bi bi-people text-4xl text-blue-700 p-2"></i>
                    </div>
                    <h2 class="text-2xl font-bold">Join Organization</h2>
                    <p class="text-center opacity-70">
                        Already have an invitation code? Join your team&apos;s
                        existing workspace and start collaborating immediately.
                    </p>
                    <div class="w-full rounded p-2 text-base bg-white/80 space-y-2">
                        <h3 class="font-semibold">Perfect if you:</h3>
                        <ul class="opacity-80 list-disc list-inside ml-2">
                            <li>Have received an invitation code</li>
                            <li>Want to join an existing team</li>
                            <li>Need access to ongoing projects</li>
                        </ul>
                    </div>
                    <a href="/organizations/join" class="w-full py-1 flex justify-center items-center gap-2 rounded bg-blue-500 hover:bg-blue-600 text-white duration-200">
                        <span>Join with code</span>
                        <i class="bi bi-box-arrow-up-right text-sm"></i>
                    </a>
                </div>
                <div class="flex-1 rounded-lg bg-white shadow-lg shadow-neutral-400 p-6 flex flex-col items-center space-y-4 hover:scale-101 duration-200">
                    <div class="bg-green-500/20 rounded-full flex justify-center items-center aspect-square">
                        <i class="bi bi-plus-lg text-4xl text-green-700 p-2"></i>
                    </div>
                    <h2 class="text-2xl font-bold">Create Organization</h2>
                    <p class="text-center opacity-70">
                        Start fresh with your own workspace. Set up your team,
                        invite members, and begin your first project.
                    </p>
                    <div class="w-full rounded p-2 text-base space-y-2">
                        <h3 class="font-semibold">Perfect if you:</h3>
                        <ul class="opacity-80 list-disc list-inside ml-2">
                            <li>Are starting a new team</li>
                            <li>Want to be the organization admin</li>
                            <li>Need to set up from scratch</li>
                        </ul>
                    </div>
                    <a href="/organizations/create" class="w-full py-1 flex justify-center items-center gap-2 rounded bg-green-500 hover:bg-green-600 text-white duration-200">
                        <span>Create new organization</span>
                        <i class="bi bi-box-arrow-up-right text-sm"></i>
                    </a>
                </div>
            </div>
        </main>
    );
} 
-->