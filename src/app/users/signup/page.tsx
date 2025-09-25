"use client";
import { useState, type JSX } from "react";
import Link from "next/link";
import Divider from "@/components/Divider";
import Image from "next/image";
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
        <main className="w-full min-h-screen flex items-center py-12 px-4 bg-linear-to-b from-blue-500/20 to-blue-500/10">
            <div className="w-full max-w-lg mx-auto space-y-10">
                <div className="text-center space-y-4">
                    <TeamBuildLogo />
                    <p className="opacity-80 text-lg">
                        Create your account and start managing projects more
                        efficiently.
                    </p>
                </div>
                <form className="rounded-lg shadow-lg shadow-neutral-400 bg-white p-6 space-y-6">
                    <div className="w-full text-center space-y-4">
                        <h2 className="text-2xl font-semibold">Create account</h2>
                        <p className="opacity-80">
                            Get started with your 14-day free trial
                        </p>
                    </div>
                    <div className="w-full flex-col sm:flex-row flex items-center gap-4">
                        <a href="#" className="flex-1 w-full rounded-lg py-1 flex justify-center items-center gap-2 font-semibold border border-neutral-300 hover:bg-neutral-100 duration-200">
                            <Image src="/img/google-g.svg" height="20" width="20" alt="google logo" />
                            <span>Google</span>
                        </a>
                        <a href="#" className="flex-1 w-full rounded-lg py-1 flex justify-center items-center gap-2 font-semibold border border-neutral-300 hover:bg-neutral-100 duration-200">
                            <Image src="/img/github.svg" height="20" width="20" alt="github logo" />
                            <span>GitHub</span>
                        </a>
                    </div>
                    <Divider text="OR CONTINUE WITH" />
                    <div className="flex flex-col sm:flex-row gap-4 items-center">
                        <FormControl type="text" legend="First name" id="firstName" placeholder="John" state={firstName} setState={setFirstName} />
                        <FormControl type="text" legend="Last name" id="lastName" placeholder="Doe" state={lastName} setState={setLastName} />
                    </div>
                    <FormControl type="email" name="email" placeholder="name@company.com" legend="Email" state={email} setState={setEmail} />
                    <FormControl type="password" name="password" placeholder="Create a password" legend="Password" state={password} setState={setPassword} />
                    <FormControl type="password" name="confirmPassword" placeholder="Confirm your password" legend="Confirm password" state={confirmPassword} setState={setConfirmPassword} />
                    <div className="bg-green-500/20 rounded-lg px-4 py-4 text-green-900 space-y-2">
                        <p className="font-semibold">Your free trial includes:</p>
                        <ul className="space-y-1 mx-2">
                            <li className="space-x-1.5">
                                <i className="bi bi-check-circle"></i>
                                <span>14-day free trial</span>
                            </li>
                            <li className="space-x-1.5">
                                <i className="bi bi-check-circle"></i>
                                <span>Up to 5 team members</span>
                            </li>
                            <li className="space-x-1.5">
                                <i className="bi bi-check-circle"></i>
                                <span>Unlimited projects</span>
                            </li>
                        </ul>
                    </div>
                    <Checkbox name="tos" state={termsOfService} setState={setTos}>
                        I agree to the&nbsp;
                        <Link href="/" className="text-blue-500 hover:underline">Terms of Service</Link>
                        &nbsp;and&nbsp;
                        <Link href="/" className="text-blue-500 hover:underline">Privacy Policy</Link>

                    </Checkbox>
                    <div>
                        <input
                            type="submit"
                            value="Sign in"
                            className="rounded-lg text-white font-semibold bg-blue-500 w-full text-center hover:bg-blue-600 cursor-pointer duration-200 py-1.5"
                        />
                    </div>
                    <p className="text-center">
                        <span>Already have an account?</span>
                        &nbsp;
                        <a href="/users/login" className="text-blue-400 hover:underline">Sign in</a>
                    </p>
                </form>
                <p className="text-center opacity-80">
                    <span>No credit card required</span>
                    &nbsp;&middot;&nbsp;
                    <span>Cancel anytime</span>
                </p>
            </div>
        </main>

    );
}