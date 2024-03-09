"use client"

import { useState } from "react";
import { useEffect } from "react";

import { getTalkCardAtPage } from "./actions/getTalkCardAtPage";

import AddCardButton from "./components/addcard-button";
import TalkCardDesign from "./components/talkcard-design";
import { Button } from "./components/shadcn/ui/button";
import TalkCardSkeleton from "./components/talkcard-skeleton";
import { deleteTalkCard } from "./actions/deleteTalkCard";

import { useToast } from "@/components/shadcn/ui/use-toast"

export default function Home() {
    const empty_talkcard = {
        title: "No Cards Left", description: "wanna add a card ?", id: null
    }

    const [pageValue, setPageValue] = useState(0)
    const [talkcard, setTalkcard] = useState(empty_talkcard)
    const [isLoading, setIsLoading] = useState()

    const { toast } = useToast()

    const getNextTalkCard = async () => {

        setIsLoading(true)
        const isTalkCardEmpty = pageValue > 1 && talkcard.id == null
        const nextPageValue = isTalkCardEmpty ? 1 : pageValue + 1

        try {

            const xtalkcard = await getTalkCardAtPage(nextPageValue)

            if (typeof xtalkcard == "undefined" || xtalkcard.length == 0) {
                throw new Error(null)
            }

            setTalkcard(xtalkcard)
            setPageValue(nextPageValue)
            setIsLoading(false)

        } catch (error) {

            console.log("Client Side : getNextTalkCard : Error Caught")
            setTalkcard(empty_talkcard)
            setIsLoading(false)

        }

    }

    const handleReport = async (id) => {
        try {
            await deleteTalkCard(id)
            await getNextTalkCard()
            toast({
                title: "TalkCard Deletion Success",
            })
        }
        catch (error) {
            toast({
                title: "TalkCard Report Failure. Please try again later",
            })
        }
    }

    useEffect(() => { getNextTalkCard() }, [])

    return (
        <>
            <AddCardButton />

            {/* <p>{pageValue}</p>
            {
                isLoading
                    ? <p>Loading</p>
                    : <p>{JSON.stringify(talkcard)}</p>
            } */}

            <div className="flex flex-col max-w-[500px] mx-auto p-5">
                <div className="border my-3">

                    {
                        isLoading
                            ? <TalkCardSkeleton />
                            : null
                    }

                    {
                        !isLoading
                            ? <TalkCardDesign
                                key={talkcard.id}
                                title={talkcard.title}
                                description={talkcard.description}
                            />
                            : null
                    }


                </div>
                <div className="flex">
                    <Button
                        className="grow mr-2"
                        onClick={getNextTalkCard}
                    >
                        Next
                    </Button>
                    <Button
                        onClick={() => handleReport(talkcard.id)}
                    >
                        Report
                    </Button>

                </div>
            </div>
        </>
    );
}
