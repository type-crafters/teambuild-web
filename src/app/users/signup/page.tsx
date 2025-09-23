"use client";
import { useState, type JSX } from "react";
import Link from "next/link";
import Divider from "@/components/Divider";
import Image from "next/image";
import TeamBuildLogo from "@/components/TeamBuildLogo";

export default function UserSignupView(): JSX.Element {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
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
                        <fieldset className="flex-1 w-full space-y-2">
                            <legend className="font-semibold">First name</legend>
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                placeholder="John"
                                className="w-full rounded-lg border border-neutral-300 px-2 py-1 outline-2 outline-transparent focus:outline-gray-400 duration-100"
                            />
                        </fieldset>
                        <fieldset className="flex-1 w-full space-y-2">
                            <legend className="font-semibold">Last name</legend>
                            <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                placeholder="Doe"
                                className="w-full rounded-lg border border-neutral-300 px-2 py-1 outline-2 outline-transparent focus:outline-gray-400 duration-100"
                            />
                        </fieldset>
                    </div>
                    <fieldset className="space-y-2">
                        <legend className="font-semibold">Email</legend>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="name@company.com"
                            className="w-full rounded-lg border border-neutral-300 px-2 py-1 outline-2 outline-transparent focus:outline-gray-400 duration-100"
                        />
                    </fieldset>
                    <fieldset className="space-y-2">
                        <legend className="font-semibold">Password</legend>
                        <label
                            htmlFor="password"
                            className="flex items-center w-full rounded-lg border border-neutral-300 px-2 py-1 outline-2 outline-transparent has-focus:outline-gray-400 duration-100"
                        >
                            <input
                                type={passwordVisible ? "text" : "password"}
                                name="password"
                                id="password"
                                placeholder="Create a password"
                                className="flex-1 focus:outline-none"
                            />
                            <button
                                type="button"
                                aria-label="show password"
                                className="cursor-pointer px-1"
                                onClick={() => setPasswordVisible(!passwordVisible)}
                            >
                                <i
                                    className={`bi bi-eye ${passwordVisible ? "text-blue-500" : "text-neutral-400"} duration-200`}
                                ></i>
                            </button>
                        </label>
                    </fieldset>
                    <fieldset className="space-y-2">
                        <legend className="font-semibold">Confirm password</legend>
                        <label
                            htmlFor="confirmPassword"
                            className="flex items-center w-full rounded-lg border border-neutral-300 px-2 py-1 outline-2 outline-transparent has-focus:outline-gray-400 duration-100"
                        >
                            <input
                                type={confirmPasswordVisible ? "text" : "password"}
                                name="confirmPassword"
                                id="confirmPassword"
                                placeholder="Confirm your password"
                                className="flex-1 focus:outline-none"
                            />
                            <button
                                type="button"
                                aria-label="show confirm password"
                                className="cursor-pointer px-1"
                                onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                            >
                                <i
                                    className={`bi bi-eye ${confirmPasswordVisible ? "text-blue-500" : "text-neutral-400"} duration-200`}
                                ></i>
                            </button>
                        </label>
                    </fieldset>
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
                    <div className="flex items-center">
                        <label htmlFor="termsOfService" className="flex gap-2 items-center cursor-pointer">
                            <div className="group border-2 border-neutral-400 w-4 h-4 flex justify-center items-center">
                                <i className="bi bi-check text-blue-500 text-lg scale-0 group-has-checked:scale-100 duration-100"></i>
                                <input type="checkbox" name="termsOfService" id="termsOfService" className="hidden" />
                            </div>
                            <p>
                                I agree to the
                                &nbsp;
                                <Link href="/" className="text-blue-500 hover:underline">Terms of Service</Link>
                                &nbsp;and&nbsp;
                                <Link href="/" className="text-blue-500 hover:underline">Privacy Policy</Link>
                            </p>
                        </label>
                    </div>
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