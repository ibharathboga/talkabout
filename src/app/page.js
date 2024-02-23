"use client"

import { useState } from "react";
import { useEffect } from "react";

import { getTalkCardAtPage } from "./actions/getTalkCardAtPage";

import AddCardButton from "./components/addcard-button";
import TalkCardDesign from "./components/talkcard-design";
import { Button } from "./components/shadcn/ui/button";

export default function Home() {
    const empty_talkcard = {
        title: "No Cards Left", description: "wanna add a card ?", id: null
    }

    const [pageValue, setPageValue] = useState(0)
    const [talkcard, setTalkcard] = useState(empty_talkcard)

    const getNextTalkCard = async () => {

        const isTalkCardEmpty = pageValue > 1 && talkcard.id == null
        const nextPageValue = isTalkCardEmpty ? 1 : pageValue + 1

        try {

            const xtalkcard = await getTalkCardAtPage(nextPageValue)

            if (typeof xtalkcard == "undefined" || xtalkcard.length == 0) {
                throw new Error(null)
            }

            setTalkcard(xtalkcard)
            setPageValue(nextPageValue)

        } catch (error) {

            console.log("Client Side : getNextTalkCard : Error Caught")
            setTalkcard(empty_talkcard)

        }

    }

    useEffect(() => { getNextTalkCard() }, [])

    return (
        <>
            <AddCardButton />

            {/* <p>{pageValue}</p> */}
            {/* <p>{JSON.stringify(talkcard)}</p> */}

            <div className="flex flex-col max-w-[500px] mx-auto p-5">
                <div className="border my-3">
                    <TalkCardDesign
                        key={talkcard.id}
                        title={talkcard.title}
                        description={talkcard.description}
                    />
                </div>
                <Button
                    onClick={getNextTalkCard}
                >
                    Next
                </Button>
            </div>
        </>
    );
}
