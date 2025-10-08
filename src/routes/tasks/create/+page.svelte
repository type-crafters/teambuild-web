<script lang="ts">
    import CollectionControl from "$components/CollectionControl.svelte";
    import Dropdown from "$components/Dropdown.svelte";
    import FormControl from "$components/FormControl.svelte";
    import MarkdownEditor from "$components/MarkdownEditor.svelte";

    let title: string = $state("");
    let description: string = $state("");
    let project: string = $state("");
    let assignee: string = $state("");
    let priority: string = $state("");
    let initialStatus: string = $state("");
    let hours: number = $state(0);
    let dueDate: string = $state("");
    let tags: string[] = $state([]);


    const createTask = (event: SubmitEvent) => {
        event.preventDefault();
    };
</script>
<div class="bg-slate-50 py-8">
    <div class="w-full max-w-5xl mx-auto space-y-8 ">
        <div class="w-full">
            <h1 class="text-2xl font-bold">Create New Task</h1>
            <p class="opacity-60">Add a new task to your project and assign it to team members.</p>
        </div>
        <form class="space-y-6" onsubmit={createTask}>
            <section class="bg-white rounded-lg border border-neutral-300 shadow-xs shadow-neutral-400 w-full p-4 space-y-4">
                <div class="float-none space-y-1">
                    <h2 class="text-lg font-semibold flex items-center gap-1">
                        <i class="bi bi-plus-lg"></i>
                        Task Details
                    </h2>
                    <p class="opacity-60">
                        Provide the basic information for your new task
                    </p>
                </div>
                <div class="space-y-4">
                    <FormControl type="text" title="Task title" id="title" placeholder="Use a clear, descriptive title" bind:value={title} />
                    <MarkdownEditor title="Description" id="description" placeholder="Provide additional context, requirements, or notes for this task" bind:value={description} />
                    <div class="grid grid-cols-3">
                        <Dropdown id="project" title="Project" placeholder="Select a project" options={[]} bind:value={project} />
                    </div>
                </div>
            </section>
            <section class="bg-white rounded-lg border border-neutral-300 shadow-xs shadow-neutral-400 w-full p-4 space-y-4">
                <div class="float-none space-y-1">
                    <h2 class="text-lg font-semibold flex items-center gap-1">
                        <i class="bi bi-person"></i>
                        Assignment & Priority
                    </h2>
                    <p class="opacity-60">
                        Set who will work on this task and its priority level
                    </p>
                </div>
                <div class="grid grid-cols-2 gap-8">
                    <div class="w-4/5">
                        <Dropdown id="assignee" title="Assignee" placeholder="Assign to team member" options={[]} bind:value={assignee} required />
                    </div>
                    <div class="w-4/5">
                        <Dropdown id="priority" title="Priority" placeholder="Set a priority" options={[]} bind:value={priority} required />
                    </div>
                    <div class="w-4/5">
                        <Dropdown id="initialStatus" title="Initial Status" placeholder="Select an option" options={[]} bind:value={initialStatus} required />
                    </div>
                    <div class="w-2/5">
                        <FormControl type="number" bi="bi-clock" title="Estimated hours" id="hours" min={0} step={0.5} bind:value={hours} required />
                    </div>
                </div>
            </section>
            <section class="bg-white rounded-lg border border-neutral-300 shadow-xs shadow-neutral-400 w-full p-4 space-y-4">
                <div class="float-none space-y-1">
                    <h2 class="text-lg font-semibold flex items-center gap-1">
                        <i class="bi bi-calendar"></i>
                        Timeline
                    </h2>
                    <p class="opacity-60">
                        Set deadlines and important dates for this task
                    </p>
                </div>
                <div class="space-y-4">
                    <div class="w-2/5">
                        <FormControl type="date" id="dueDate" title="Due date" placeholder="Select due date" bind:value={dueDate} />
                    </div>
                </div>
            </section>
            <section class="bg-white rounded-lg border border-neutral-300 shadow-xs shadow-neutral-400 w-full p-4 space-y-4">
                <div class="float-none space-y-1">
                    <h2 class="text-lg font-semibold flex items-center gap-1">
                        <i class="bi bi-plus-lg"></i>
                        Tags & Labels
                    </h2>
                    <p class="opacity-60">
                        Add tags to organize and filter tasks
                    </p>
                </div>
                <div class="space-y-4">
                    <div class="w-full flex flex-wrap items-center gap-4">
                        {#each tags as tag, i (i)}
                            <div class="flex items-center gap-1 font-medium bg-neutral-200 rounded-sm px-2">
                                <span>{tag}</span>
                                <button
                                    type="button"
                                    aria-label={`remove '${tag}'`}
                                    class="cursor-pointer flex flex-col items-center justify-center"
                                    onclick={() => tags = tags.filter(t => t !== tag)}
                                ><i class="bi bi-x"></i></button>
                            </div>
                        {/each}
                    </div>
                    <CollectionControl bi="bi-tag" id="tags" bind:value={tags} distinct/>
                </div>
            </section>
            <section class="bg-white rounded-lg border border-neutral-300 shadow-xs shadow-neutral-400 w-full p-4 space-y-4">
                <div class="float-none space-y-1">
                    <h2 class="text-lg font-semibold flex items-center gap-1">
                        <i class="bi bi-plus-lg" ></i>
                        Task Dependencies
                    </h2>
                    <p class="opacity-60">
                        Select tasks that need to be completed before this task can start
                    </p>
                </div>
                <div class="space-y-4">

                </div>
            </section>
        </form>
    </div>
</div>