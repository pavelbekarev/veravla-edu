'use client'

import "../style.scss"
import { ErrorPopup, SuccessPopup } from "@/features/InfoPopup";
import useNotification from "@/shared/lib/useNotification"
import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";


export const ShowInfoPopup = () => {
    const { hasSuccess, successMessage, hasError, errorMessage, resetState } = useNotification();
    const nodeRef = useRef(null);
    const timeoutRef = useRef<any>();
    const [show, setShow] = useState<boolean>(false);

    const visible = hasSuccess || hasError;

    useEffect(() => {
        if (visible) {
            setShow(true);

            if (timeoutRef.current) clearTimeout(timeoutRef.current);

            timeoutRef.current = setTimeout(() => {
                setShow(false);

                setTimeout(() => {
                    resetState();
                }, 200)
            }, 3000);
        } else {
            setShow(false);
        }

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        }
    }, [visible]);

    return (
        <CSSTransition
            nodeRef={nodeRef} 
            classNames='my-node' 
            in={show} 
            timeout={300} 
            unmountOnExit 
        >
            <div ref={nodeRef}>
                {
                    hasSuccess && <SuccessPopup />
                }
                {
                    hasError && <ErrorPopup />
                }
            </div>
        </CSSTransition>
    )
}
