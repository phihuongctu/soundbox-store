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
            if (isBrowser) {
                // if this component is rendered on a browser, import relevant preline plugins
                import("preline/preline").then(({ HSAccordion, HSDropdown, HSCollapse }) => {
                    HSAccordion.autoInit();
                    HSDropdown.autoInit();
                    HSCollapse.autoInit();
                })
            }
        }, 100);
    }, [location.pathname]);

    return null;
}