<script lang="ts">
    import Dropdown from "$components/Dropdown.svelte";
    import FormControl from "$components/FormControl.svelte";
    import Textbox from "$components/Textbox.svelte";

    let orgName: string = $state("");
    let description: string = $state("");
    let industry: string = $state("");
    let teamSize: string = $state("");
    let website: string = $state("");
</script>

<main
    class="w-full min-h-screen flex flex-col items-center py-12 px-4 bg-blue-500/10 space-y-10"
>
    <div class="w-full max-w-xl mx-auto space-y-10">
        <div class="space-y-4">
            <div class="flex flex-col items-center gap-4">
                <div
                    class="rounded-full flex justify-center items-center bg-indigo-200"
                >
                    <i class="bi bi-plus-lg text-6xl text-indigo-700 p-4"></i>
                </div>
                <h1 class="text-3xl font-bold">Create Organization</h1>
            </div>
            <div class="text-center space-y-2">
                <p class="text-lg opacity-70">
                    Set up your workspace and start managing projects with your
                    team.
                </p>
            </div>
        </div>
        <form
            class="rounded-lg shadow-lg shadow-neutral-400 bg-white p-6 space-y-6"
        >
            <div class="w-full text-left space-y-2">
                <h2 class="text-2xl font-semibold">Organization Details</h2>
                <p class="opacity-80">
                    Tell us about your organization to customize your
                    ProjectFlow experience.
                </p>
            </div>
            <FormControl
                type="text"
                title="Organization Name"
                bi="bi-building"
                id="orgName"
                placeholder="Enter your organization name"
                bind:value={orgName}
                required
            />
            <Textbox
                title="Description (Optional)"
                id="description"
                placeholder="Brief description of your organization or team"
                bind:value={description}
            />
            <div class="grid grid-cols-2">
                <Dropdown
                    title="Industry"
                    id="industry"
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
                        { value: "Other" },
                    ]}
                    bind:value={industry}
                    required
                />
            </div>
            <div class="grid grid-cols-2">
                <Dropdown
                    title="Expected Team Size"
                    bi="bi-people"
                    id="teamSize"
                    placeholder="Select team size"
                    options={[
                        { text: "1-5 members", value: "1-5" },
                        { text: "6-15 members", value: "6-15" },
                        { text: "16-50 members", value: "16-50" },
                        { text: "51-100 members", value: "51-100" },
                        { text: "100+ members", value: "100+" },
                    ]}
                    bind:value={teamSize}
                    required
                />
            </div>
            <FormControl
                type="text"
                title="Website (Optional)"
                bi="bi-globe"
                id="orgWebsite"
                placeholder="https://yourcompany.com"
                bind:value={website}
            />
            <div class="bg-blue-500/20 rounded-lg p-4 text-blue-900 space-y-2">
                <h3 class="font-semibold">Your organization will include:</h3>
                <ul class="opacity-80 list-disc list-inside ml-2">
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
                    class="rounded-lg text-white font-semibold bg-blue-500 w-full text-center hover:bg-blue-600 cursor-pointer duration-200 py-1.5"
                />
            </div>
            <p class="text-center">
                <span>Already have an invitation code?</span>
                &nbsp;
                <a
                    href="/organizations/join"
                    class="text-blue-400 hover:underline"
                    >Join existing organization</a
                >
            </p>
        </form>
    </div>
</main>
