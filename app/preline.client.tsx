import {
    useLocation,
} from "@remix-run/react";
import { useEffect } from "react";

import { IStaticMethods } from "preline/preline";
declare global {
    interface Window {
        HSStaticMethods: IStaticMethods;
    }
}
const isBrowser = typeof window !== "undefined";

export default function PrelineScript() {
    const location = useLocation();

    useEffect(() => {
        if (isBrowser) {
            // if this component is rendered on a browser, import preline
            import("preline/preline");
        }
    }, [])

    useEffect(() => {
        setTimeout(() => {
            window.HSStaticMethods.autoInit();
        }, 50);
    }, [location.pathname]);

    return null;
}