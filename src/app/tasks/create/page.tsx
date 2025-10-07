"use client";
import CollectionControl from "@/components/CollectionControl";
import Dropdown from "@/components/Dropdown";
import FormControl from "@/components/FormControl";
import MarkdownEditor from "@/components/MarkdownEditor";
import { useState, type JSX } from "react";

export default function CreateTaskView(): JSX.Element {
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [project, setProject] = useState<string>("");
    const [assignee, setAssignee] = useState<string>("");
    const [priority, setPriority] = useState<string>("");
    const [initialStatus, setInitialStatus] = useState<string>("");
    const [hours, setHours] = useState<number>(0);
    const [dueDate, setDueDate] = useState<string>("");
    const [tags, setTags] = useState<Array<string>>([]);

    const createTask = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <div>
            <div className="w-full max-w-5xl mx-auto space-y-8">
                <div className="w-full">
                    <h1 className="text-2xl font-bold">Create New Task</h1>
                    <p className="opacity-60">Add a new task to your project and assign it to team members.</p>
                </div>
                <form className="space-y-6" onSubmit={createTask}>
                    <section className="rounded-lg border border-neutral-300 shadow-xs shadow-neutral-400 w-full p-4 space-y-4">
                        <div className="float-none space-y-1">
                            <h2 className="text-lg font-semibold flex items-center gap-1">
                                <i className="bi bi-plus-lg" />
                                Task Details
                            </h2>
                            <p className="opacity-60">
                                Provide the basic information for your new task
                            </p>
                        </div>
                        <div className="space-y-4">
                            <FormControl type="text" legend="Task title" name="title" placeholder="Use a clear, descriptive title" state={title} setState={setTitle} />
                            <MarkdownEditor legend="Description" name="content" placeholder="Provide additional context, requirements, or notes for this task" state={content} setState={setContent} />
                            <div className="grid grid-cols-3">
                                <Dropdown name="project" legend="Project" placeholder="Select a project" options={[]} state={project} setState={setProject} />
                            </div>
                        </div>
                    </section>
                    <section className="rounded-lg border border-neutral-300 shadow-xs shadow-neutral-400 w-full p-4 space-y-4">
                        <div className="float-none space-y-1">
                            <h2 className="text-lg font-semibold flex items-center gap-1">
                                <i className="bi bi-person" />
                                Assignment & Priority
                            </h2>
                            <p className="opacity-60">
                                Set who will work on this task and its priority level
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-8">
                            <div className="w-4/5">
                                <Dropdown name="assignee" legend="Assignee" placeholder="Assign to team member" options={[]} state={assignee} setState={setAssignee} required />
                            </div>
                            <div className="w-4/5">
                                <Dropdown name="priority" legend="Priority" placeholder="Set a priority" options={[]} state={priority} setState={setPriority} required />
                            </div>
                            <div className="w-4/5">
                                <Dropdown name="initialStatus" legend="Initial Status" placeholder="Select an option" options={[]} state={initialStatus} setState={setInitialStatus} required />
                            </div>
                            <div className="w-2/5">
                                <FormControl type="number" bi="bi-clock" legend="Estimated hours" name="hours" min={0} step={0.5} state={hours} setState={setHours} required />
                            </div>
                        </div>
                    </section>
                    <section className="rounded-lg border border-neutral-300 shadow-xs shadow-neutral-400 w-full p-4 space-y-4">
                        <div className="float-none space-y-1">
                            <h2 className="text-lg font-semibold flex items-center gap-1">
                                <i className="bi bi-calendar" />
                                Timeline
                            </h2>
                            <p className="opacity-60">
                                Set deadlines and important dates for this task
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-2/5">
                                <FormControl type="date" name="dueDate" legend="Due date" placeholder="Select due date" state={dueDate} setState={setDueDate} />
                            </div>
                        </div>
                    </section>
                    <section className="rounded-lg border border-neutral-300 shadow-xs shadow-neutral-400 w-full p-4 space-y-4">
                        <div className="float-none space-y-1">
                            <h2 className="text-lg font-semibold flex items-center gap-1">
                                <i className="bi bi-plus-lg" />
                                Tags & Labels
                            </h2>
                            <p className="opacity-60">
                                Add tags to organize and filter tasks
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-full flex flex-wrap items-center gap-4">
                                {tags.map((tag, i) => (
                                    <div key={i} className="flex items-center gap-1 font-medium bg-neutral-200 rounded-sm px-2">
                                        <span>{tag}</span>
                                        <button
                                            type="button"
                                            aria-label={`remove '${tag}'`}
                                            className="h-full cursor-pointer flex flex-col"
                                            onClick={() => setTags((ts) => ts.filter(t => t !== tag))}
                                        >
                                            <i className="bi bi-x"></i>
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <CollectionControl bi="bi-tag" name="tags" state={tags} setState={setTags} distinct />
                        </div>
                    </section>
                    <section className="rounded-lg border border-neutral-300 shadow-xs shadow-neutral-400 w-full p-4 space-y-4">
                        <div className="float-none space-y-1">
                            <h2 className="text-lg font-semibold flex items-center gap-1">
                                <i className="bi bi-plus-lg" />
                                Task Dependencies
                            </h2>
                            <p className="opacity-60">
                                Select tasks that need to be completed before this task can start
                            </p>
                        </div>
                        <div className="space-y-4">

                        </div>
                    </section>
                </form>
            </div>
        </div>
    );
}