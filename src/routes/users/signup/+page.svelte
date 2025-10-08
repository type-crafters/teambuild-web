<script lang="ts">
    import Checkbox from "$components/Checkbox.svelte";
    import Divider from "$components/Divider.svelte";
    import FormControl from "$components/FormControl.svelte";
    import TeamBuildLogo from "$components/TeamBuildLogo.svelte";

    let firstName: string = $state("");
    let lastName: string = $state("");
    let email: string = $state("");
    let password: string = $state("");
    let confirmPassword: string = $state("");
    let termsOfService: boolean = $state(false);
</script>

        <main class="w-full min-h-screen flex items-center py-12 px-4 bg-linear-to-b from-blue-500/20 to-blue-500/10">
            <div class="w-full max-w-lg mx-auto space-y-10">
                <div class="text-center space-y-4">
                    <TeamBuildLogo />
                    <p class="opacity-80 text-lg">
                        Create your account and start managing projects more
                        efficiently.
                    </p>
                </div>
                <form class="rounded-lg shadow-lg shadow-neutral-400 bg-white p-6 space-y-6">
                    <div class="w-full text-center space-y-4">
                        <h2 class="text-2xl font-semibold">Create account</h2>
                        <p class="opacity-80">
                            Get started with your 14-day free trial
                        </p>
                    </div>
                    <div class="w-full flex-col sm:flex-row flex items-center gap-4">
                        <a href="/" class="flex-1 w-full rounded-lg py-1 flex justify-center items-center gap-2 font-semibold border border-neutral-300 hover:bg-neutral-100 duration-200">
                            <img src="/img/google-g.svg" height="20" width="20" alt="google logo" />
                            <span>Google</span>
                        </a>
                        <a href="/" class="flex-1 w-full rounded-lg py-1 flex justify-center items-center gap-2 font-semibold border border-neutral-300 hover:bg-neutral-100 duration-200">
                            <img src="/img/github.svg" height="20" width="20" alt="github logo" />
                            <span>GitHub</span>
                        </a>
                    </div>
                    <Divider text="OR CONTINUE WITH" />
                    <div class="flex flex-col sm:flex-row gap-4 items-center">
                        <FormControl type="text" title="First name" id="firstName" placeholder="John" bind:value={firstName} />
                        <FormControl type="text" title="Last name" id="lastName" placeholder="Doe" bind:value={lastName}/>
                    </div>
                    <FormControl type="email" id="email" placeholder="name@company.com" title="Email" bind:value={email}/>
                    <FormControl type="password" id="password" placeholder="Create a password" title="Password" bind:value={password}/>
                    <FormControl type="password" id="confirmPassword" placeholder="Confirm your password" title="Confirm password" bind:value={confirmPassword}/>
                    <div class="bg-green-500/20 rounded-lg p-4 text-green-900 space-y-2">
                        <p class="font-semibold">Your free trial includes:</p>
                        <ul class="space-y-1 mx-2">
                            <li class="flex items-center gap-2">
                                <i class="bi bi-check-circle"></i>
                                <span>14-day free trial</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="bi bi-check-circle"></i>
                                <span>Up to 5 team members</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="bi bi-check-circle"></i>
                                <span>Unlimited projects</span>
                            </li>
                        </ul>
                    </div>
                    <Checkbox id="termsOfService" bind:checked={termsOfService}>
                        <p>
                            I agree to the&nbsp;
                            <a href="/" class="text-blue-500 hover:underline">Terms of Service</a>
                            &nbsp;and&nbsp;
                            <a href="/" class="text-blue-500 hover:underline">Privacy Policy</a>
                        </p>
                    </Checkbox>
                    <div>
                        <input
                            type="submit"
                            value="Sign in"
                            class="rounded-lg text-white font-semibold bg-blue-500 w-full text-center hover:bg-blue-600 cursor-pointer duration-200 py-1.5"
                        />
                    </div>
                    <p class="text-center">
                        <span>Already have an account?</span>
                        &nbsp;
                        <a href="/users/login" class="text-blue-400 hover:underline">Sign in</a>
                    </p>
                </form>
                <p class="text-center opacity-80">
                    <span>No credit card required</span>
                    &nbsp;&middot;&nbsp;
                    <span>Cancel anytime</span>
                </p>
            </div>
        </main>
<!-- "use client";
import { useState, type JSX } from "react";
import a from "next/a";
import Divider from "@/components/Divider";
import img from "next/img";
import TeamBuildLogo from "@/components/TeamBuildLogo";
import FormControl from "@/components/FormControl";
import Checkbox from "@/components/Checkbox";

export default function UserSignupView(): JSX.Element {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [termsOfService, setTermsOfService] = useState<boolean>(false);

    return (
        <main class="w-full min-h-screen flex items-center py-12 px-4 bg-linear-to-b from-blue-500/20 to-blue-500/10">
            <div class="w-full max-w-lg mx-auto space-y-10">
                <div class="text-center space-y-4">
                    <TeamBuildLogo />
                    <p class="opacity-80 text-lg">
                        Create your account and start managing projects more
                        efficiently.
                    </p>
                </div>
                <form class="rounded-lg shadow-lg shadow-neutral-400 bg-white p-6 space-y-6">
                    <div class="w-full text-center space-y-4">
                        <h2 class="text-2xl font-semibold">Create account</h2>
                        <p class="opacity-80">
                            Get started with your 14-day free trial
                        </p>
                    </div>
                    <div class="w-full flex-col sm:flex-row flex items-center gap-4">
                        <a href="/" class="flex-1 w-full rounded-lg py-1 flex justify-center items-center gap-2 font-semibold border border-neutral-300 hover:bg-neutral-100 duration-200">
                            <img src="/img/google-g.svg" height="20" width="20" alt="google logo" />
                            <span>Google</span>
                        </a>
                        <a href="/" class="flex-1 w-full rounded-lg py-1 flex justify-center items-center gap-2 font-semibold border border-neutral-300 hover:bg-neutral-100 duration-200">
                            <img src="/img/github.svg" height="20" width="20" alt="github logo" />
                            <span>GitHub</span>
                        </a>
                    </div>
                    <Divider text="OR CONTINUE WITH" />
                    <div class="flex flex-col sm:flex-row gap-4 items-center">
                        <FormControl type="text" title="First name" id="firstName" placeholder="John" bind:value={firstName} setState={setFirstName} />
                        <FormControl type="text" title="Last name" id="lastName" placeholder="Doe" bind:value={lastName} setState={setLastName} />
                    </div>
                    <FormControl type="email" id="email" placeholder="name@company.com" title="Email" bind:value={email} setState={setEmail} />
                    <FormControl type="password" id="password" placeholder="Create a password" title="Password" bind:value={password} setState={setPassword} />
                    <FormControl type="password" id="confirmPassword" placeholder="Confirm your password" title="Confirm password" bind:value={confirmPassword} setState={setConfirmPassword} />
                    <div class="bg-green-500/20 rounded-lg p-4 text-green-900 space-y-2">
                        <p class="font-semibold">Your free trial includes:</p>
                        <ul class="space-y-1 mx-2">
                            <li class="flex items-center gap-2">
                                <i class="bi bi-check-circle"></i>
                                <span>14-day free trial</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="bi bi-check-circle"></i>
                                <span>Up to 5 team members</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="bi bi-check-circle"></i>
                                <span>Unlimited projects</span>
                            </li>
                        </ul>
                    </div>
                    <Checkbox id="termsOfService" bind:value={termsOfService} setState={setTermsOfService}>
                        <p>
                            I agree to the&nbsp;
                            <a href="/" class="text-blue-500 hover:underline">Terms of Service</a>
                            &nbsp;and&nbsp;
                            <a href="/" class="text-blue-500 hover:underline">Privacy Policy</a>
                        </p>
                    </Checkbox>
                    <div>
                        <input
                            type="submit"
                            value="Sign in"
                            class="rounded-lg text-white font-semibold bg-blue-500 w-full text-center hover:bg-blue-600 cursor-pointer duration-200 py-1.5"
                        />
                    </div>
                    <p class="text-center">
                        <span>Already have an account?</span>
                        &nbsp;
                        <a href="/users/login" class="text-blue-400 hover:underline">Sign in</a>
                    </p>
                </form>
                <p class="text-center opacity-80">
                    <span>No credit card required</span>
                    &nbsp;&middot;&nbsp;
                    <span>Cancel anytime</span>
                </p>
            </div>
        </main>

    );
} -->