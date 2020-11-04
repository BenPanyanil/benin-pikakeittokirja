import React from 'react'
import { MdSchedule } from "react-icons/md";
import { useTriggerTransition } from '../Context'

export default function TransitionOverlay() {
    const { transition } = useTriggerTransition()

    return (
        <div className={`transition-overlay ${transition && 'transition-animate'}`}>
            <MdSchedule />
        </div>
    )
}
