import { getScrollBars } from "../scene/scrollbars";
import type { InteractiveSceneRenderConfig, RenderableElementsMap } from "../scene/types";
/**
 * Interactive scene is the ui-canvas where we render bounding boxes, selections
 * and other ui stuff.
 */
export declare const renderInteractiveScene: <U extends ({ canvas, elementsMap, visibleElements, selectedElements, allElementsMap, scale, appState, renderConfig, editorInterface, animationState, deltaTime, }: InteractiveSceneRenderConfig) => {
    scrollBars?: import("../scene/types").ScrollBars | undefined;
    atLeastOneVisibleElement: boolean;
    elementsMap: RenderableElementsMap;
    animationState?: import("../scene/types").InteractiveSceneRenderAnimationState | undefined;
}>(renderConfig: InteractiveSceneRenderConfig) => ReturnType<U>;
