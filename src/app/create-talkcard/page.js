"use client"
import { useState } from "react";

import { Input } from "@/components/shadcn/ui/input";
import { Textarea } from "@/components/shadcn/ui/textarea";
import { Button } from "@/components/shadcn/ui/button";

export default function CreateTalkCard() {
    const [talkCardTitle, setTalkCardTitle] = useState('')
    const [talkCardDescription, setTalkCardDescription] = useState('')

    const maxTitleLength = 100
    const maxDescriptionLength = 300

    const handleTalkCardTitleChange = (e) => {
        if (e.target.value.length > maxTitleLength) { return }
        setTalkCardTitle((prev) => e.target.value)
    }
    const handleTalkCardDescription = (e) => {
        if (e.target.value.length > maxDescriptionLength) { return }
        setTalkCardDescription((prev) => e.target.value)
    }

    return (
        <>
            <div className="max-w-[500px] min-w-[300px] mx-auto p-3 space-y-5">
                <div>
                    <Input
                        value={talkCardTitle}
                        onChange={handleTalkCardTitleChange}
                        placeholder="talkcard title"
                    />
                    <p className="text-sm text-muted-foreground text-right pr-2">
                        {maxTitleLength - talkCardTitle.length}
                    </p>
                </div>
                <div>
                    <Textarea
                        value={talkCardDescription}
                        onChange={handleTalkCardDescription}
                        className="min-h-[250px] resize-none"
                        placeholder="talkcard description"
                    />
                    <p className="text-sm text-muted-foreground text-right pr-2">
                        {maxDescriptionLength - talkCardDescription.length}
                    </p>
                </div>
                <Button className="float-end" size="sm">Submit</Button>
            </div>
        </>
    );
}
