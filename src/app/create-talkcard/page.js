"use client"
import { useState } from "react";

import { useForm } from "react-hook-form";
import { postTalkCard } from "@/actions/postTalkCard";

import { Input } from "@/components/shadcn/ui/input";
import { Textarea } from "@/components/shadcn/ui/textarea";
import { Button } from "@/components/shadcn/ui/button";

export default function CreateTalkCard() {

    const maxTitleLength = 100
    const maxDescriptionLength = 300

    const form = useForm()
    const { register, handleSubmit, watch, formState } = form
    const { errors } = formState

    const handleOnSubmit = async (formData) => {
        const xtalkcard = {
            title: formData.title,
            description: formData.description
        }

        // console.log(JSON.stringify(xtalkcard))

        const response = await postTalkCard(xtalkcard)
        console.log(response.message)
    }

    return (
        <form
            onSubmit={handleSubmit(handleOnSubmit)}
            className="max-w-[500px] min-w-[300px] mx-auto p-3 space-y-5"
        >
            <div>
                <Input
                    {...register
                        ("title",
                            {
                                required: {
                                    value: true,
                                    message: "title cannot be empty"
                                },
                                maxLength: {
                                    value: maxTitleLength,
                                    message: `max title length should not exceed ${maxTitleLength}`,
                                }
                            }
                        )
                    }
                    placeholder="talkcard title"
                />
                <div className="flex justify-between">
                    <p className="text-sm text-muted-foreground text-right mx-2">
                        {errors.title?.message ? null : watch('title', "").length} / {maxTitleLength}
                    </p>
                    <p className="text-sm text-muted-foreground text-right mx-2">
                        {errors.title?.message}
                    </p>
                </div>
            </div>
            <div>
                <Textarea
                    {...register
                        ("description",
                            {
                                required: {
                                    value: true,
                                    message: "description cannot be empty"
                                },
                                maxLength: {
                                    value: maxDescriptionLength,
                                    message: `max description length should not exceed ${maxDescriptionLength}`,
                                }
                            }
                        )
                    }
                    className="min-h-[250px] resize-none"
                    placeholder="talkcard description"
                />
                <div className="flex justify-between">
                    <p className="text-sm text-muted-foreground text-right pr-2 mx-2">
                        {errors.description?.message ? null : watch('description', "").length}  / {maxDescriptionLength}
                    </p>
                    <p className="text-sm text-muted-foreground text-right pl-2 mx-2">
                        {errors.description?.message}
                    </p>
                </div>
            </div>
            <Button className="float-end" size="sm">Submit</Button>
        </form>
    );
}
