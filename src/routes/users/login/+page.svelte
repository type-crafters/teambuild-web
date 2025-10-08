<script lang="ts">
    import Checkbox from "$components/Checkbox.svelte";
    import Divider from "$components/Divider.svelte";
    import FormControl from "$components/FormControl.svelte";
    import TeamBuildLogo from "$components/TeamBuildLogo.svelte";

    let email: string = $state("");
    let password: string = $state("");
    let rememberMe: boolean = $state(false);
</script>

<main
    class="w-screen min-h-screen flex items-center py-12 px-4 bg-linear-to-b from-blue-500/20 to-blue-500/10"
>
    <div class="w-full max-w-lg mx-auto space-y-10">
        <div class="text-center space-y-4">
            <TeamBuildLogo />
            <p class="opacity-80 text-lg">
                Welcome back! Sign in to your account to continue managing your
                projects.
            </p>
        </div>
        <form
            class="rounded-lg shadow-lg shadow-neutral-400 bg-white p-6 space-y-6"
        >
            <div class="w-full text-center space-y-4">
                <h2 class="text-2xl font-semibold">Sign in</h2>
                <p class="opacity-80">
                    Enter your email and password to access your account
                </p>
            </div>
            <div class="w-full flex flex-col sm:flex-row items-center gap-4">
                <a
                    href="/"
                    class="flex-1 w-full rounded-lg py-1 flex justify-center items-center gap-2 font-semibold border border-neutral-300 hover:bg-neutral-100 duration-200"
                >
                    <img
                        src="/img/google-g.svg"
                        height="20"
                        width="20"
                        alt="google logo"
                    />
                    <span>Google</span>
                </a>
                <a
                    href="/"
                    class="flex-1 w-full rounded-lg py-1 flex justify-center items-center gap-2 font-semibold border border-neutral-300 hover:bg-neutral-100 duration-200"
                >
                    <img
                        src="/img/github.svg"
                        height="20"
                        width="20"
                        alt="github logo"
                    />
                    <span>GitHub</span>
                </a>
            </div>
            <Divider text="OR CONTINUE WITH" />
            <FormControl
                type="email"
                id="email"
                title="Email"
                placeholder="name@company.com"
                bind:value={email}
            />
            <FormControl
                type="password"
                id="password"
                title="Password"
                placeholder="Enter your password"
                bind:value={password}
            />
            <div class="flex items-center">
                <div class="flex-1">
                    <Checkbox
                        id="rememberMe"
                        bind:checked={rememberMe}
                    >
                        <p>Remember me</p>
                    </Checkbox>
                </div>
                <a href="/" class="text-blue-400 hover:underline">
                    Forgot password?
                </a>
            </div>
            <div>
                <input
                    type="submit"
                    value="Sign in"
                    class="rounded-lg text-white font-semibold bg-blue-500 w-full text-center hover:bg-blue-600 cursor-pointer duration-200 py-1.5"
                />
            </div>
            <p class="text-center">
                <span>Don&apos;t have an account?</span>
                &nbsp;
                <a href="/users/signup" class="text-blue-400 hover:underline"
                    >Sign up for free</a
                >
            </p>
        </form>
        <p class="text-center opacity-80">
            By signing in, you agree to our&nbsp;
            <a href="/" class="text-blue-400 hover:underline"
                >Terms of Service</a
            >
            &nbsp;and&nbsp;
            <a href="/" class="text-blue-400 hover:underline">Privacy Policy</a>
        </p>
    </div>
</main>