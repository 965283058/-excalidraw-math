/// <reference types="react" />
import { type EditorInterface } from "@excalidraw/common";
import "./LiveCollaborationTrigger.scss";
declare const LiveCollaborationTrigger: {
    ({ isCollaborating, onSelect, editorInterface, ...rest }: {
        isCollaborating: boolean;
        onSelect: () => void;
        editorInterface?: Readonly<{
            formFactor: "phone" | "tablet" | "desktop";
            desktopUIMode: "compact" | "full";
            userAgent: Readonly<{
                isMobileDevice: boolean;
                platform: "other" | "ios" | "android" | "unknown";
            }>;
            isTouchScreen: boolean;
            canFitSidebar: boolean;
            isLandscape: boolean;
        }> | undefined;
    } & import("react").ButtonHTMLAttributes<HTMLButtonElement>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export default LiveCollaborationTrigger;
