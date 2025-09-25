"use client";
import { useState, type JSX } from "react";
import Link from "next/link";
import Image from "next/image";
import Divider from "@components/Divider";
import TeamBuildLogo from "@components/TeamBuildLogo";
import FormControl from "@/components/FormControl";
import Checkbox from "@/components/Checkbox";

export default function UserLoginPage(): JSX.Element {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [rememberMe, setRememberMe] = useState<boolean>(false);

    return (
        <main className="w-screen min-h-screen flex items-center py-12 px-4 bg-linear-to-b from-blue-500/20 to-blue-500/10">
            <div className="w-full max-w-lg mx-auto space-y-10">
                <div className="text-center space-y-4">
                    <TeamBuildLogo />
                    <p className="opacity-80 text-lg">
                        Welcome back! Sign in to your account to continue managing your
                        projects.
                    </p>
                </div>
                <form
                    className="rounded-lg shadow-lg shadow-neutral-400 bg-white p-6 space-y-6"
                >
                    <div className="w-full text-center space-y-4">
                        <h2 className="text-2xl font-semibold">Sign in</h2>
                        <p className="opacity-80">
                            Enter your email and password to access your account
                        </p>
                    </div>
                    <div className="w-full flex flex-col sm:flex-row items-center gap-4">
                        <Link href="/" className="flex-1 w-full rounded-lg py-1 flex justify-center items-center gap-2 font-semibold border border-neutral-300 hover:bg-neutral-100 duration-200">
                            <Image
                                src="/img/google-g.svg"
                                height="20"
                                width="20"
                                alt="google logo"
                            />
                            <span>Google</span>
                        </Link>
                        <Link href="/" className="flex-1 w-full rounded-lg py-1 flex justify-center items-center gap-2 font-semibold border border-neutral-300 hover:bg-neutral-100 duration-200">
                            <Image
                                src="/img/github.svg"
                                height="20"
                                width="20"
                                alt="github logo"
                            />
                            <span>GitHub</span>
                        </Link>
                    </div>
                    <Divider text="OR CONTINUE WITH" />
                    <FormControl type="email" id="email" legend="Email" placeholder="name@company.com" state={email} setState={setEmail} />
                    <FormControl type="password" id="password" legend="Password" placeholder="Enter your password" state={password} setState={setPassword}/>
                    <div className="flex items-center">
                        <div className="flex-1">
                            <Checkbox state={rememberMe} setState={setRememberMe} >Remember me</Checkbox>
                        </div>
                        <Link href="/" className="text-blue-400 hover:underline">
                            Forgot password?
                        </Link>
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Sign in"
                            className="rounded-lg text-white font-semibold bg-blue-500 w-full text-center hover:bg-blue-600 cursor-pointer duration-200 py-1.5"
                        />
                    </div>
                    <p className="text-center">
                        <span>Don&apos;t have an account?</span>
                        &nbsp;
                        <Link href="/users/signup" className="text-blue-400 hover:underline">Sign up for free</Link>
                    </p>
                </form>
                <p className="text-center opacity-80">
                    By signing in, you agree to our&nbsp;
                    <Link href="/" className="text-blue-400 hover:underline">Terms of Service</Link>
                    &nbsp;and&nbsp;
                    <Link href="/" className="text-blue-400 hover:underline">Privacy Policy</Link>
                </p>
            </div>
        </main>

    );
}