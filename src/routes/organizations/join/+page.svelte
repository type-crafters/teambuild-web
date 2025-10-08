<script lang="ts">
    let code: string = $state("");
</script>
<main
    class="w-full min-h-screen flex flex-col items-center py-12 px-4 bg-blue-500/10 space-y-10"
>
    <div class="w-full max-w-lg mx-auto space-y-10">
        <div class="space-y-4">
            <div class="flex flex-col items-center gap-4">
                <i class="bi bi-bar-chart-line-fill text-6xl text-blue-500 p-4"
                ></i>
                <h1 class="text-3xl font-bold">Join Organization</h1>
            </div>
            <div class="text-center space-y-2">
                <p class="text-lg opacity-70">
                    Enter the invitation code you received to join your
                    team&apos;s workspace.
                </p>
            </div>
        </div>
        <form
            class="rounded-lg shadow-lg shadow-neutral-400 bg-white p-6 space-y-6"
        >
            <div class="w-full text-center space-y-4">
                <h2 class="text-2xl font-semibold">Enter Invitation Code</h2>
                <p class="opacity-80">
                    Your team admin should have provided you with a unique
                    invitation code
                </p>
            </div>
            <fieldset class="space-y-2">
                <legend class="font-semibold">Invitation Code</legend>
                <input
                    type="text"
                    name="invitationCode"
                    id="invitationCode"
                    bind:value={code}
                    placeholder="Enter your invitation code"
                    class="w-full rounded-lg border border-neutral-300 px-2 py-1 outline-2 outline-transparent focus:outline-gray-400 duration-100 placeholder:text-center text-center placeholder:font-mono font-mono"
                />
            </fieldset>

            <div>
                <input
                    type="submit"
                    value="Join organization"
                    disabled={!code}
                    class="rounded-lg text-white font-semibold bg-blue-500 w-full text-center hover:bg-blue-600 cursor-pointer duration-200 py-1.5 disabled:bg-gray-300"
                />
            </div>
            <div class="w-full rounded p-2 bg-blue-200 text-blue-700 space-y-2">
                <h3 class="font-semibold">Need help?</h3>
                <ul class="opacity-80 list-disc list-inside ml-2">
                    <li>Check your email for the invitation code</li>
                    <li>Ask your team admin to resend the invitation</li>
                    <li>Make sure you&apos;re using the correct code</li>
                </ul>
            </div>
            <p class="text-center">
                <span>Don&apos;t have an invitation code?</span>
                &nbsp;
                <a
                    href="/organizations/create"
                    class="text-blue-400 hover:underline"
                    >Create your own organization</a
                >
            </p>
        </form>
    </div>
</main>