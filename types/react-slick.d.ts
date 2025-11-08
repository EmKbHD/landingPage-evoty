// types/react-slick.d.ts
declare module "react-slick" {
    import * as React from "react";

    export interface Settings {
        // you use these:
        dots?: boolean;
        infinite?: boolean;
        slidesToShow?: number;
        slidesToScroll?: number;
        autoplay?: boolean;
        speed?: number;
        autoplaySpeed?: number;
        cssEase?: string;
        initialSlide?: number;

        // common extras (safe to keep)
        arrows?: boolean;
        adaptiveHeight?: boolean;
        draggable?: boolean;
        swipe?: boolean;
        swipeToSlide?: boolean;
        touchMove?: boolean;
        pauseOnHover?: boolean;
        pauseOnDotsHover?: boolean;
        rtl?: boolean;
        variableWidth?: boolean;
        centerMode?: boolean;
        centerPadding?: string | number;
        rows?: number;
        slidesPerRow?: number;
        className?: string;
        accessibility?: boolean;
        lazyLoad?: "ondemand" | "progressive" | true | false;

        // callbacks
        beforeChange?: (current: number, next: number) => void;
        afterChange?: (current: number) => void;

        // responsive
        responsive?: ResponsiveObject[];
    }

    export interface ResponsiveObject {
        breakpoint: number;
        settings: Partial<Settings> | "unslick";
    }

    // Wrap default export as a plain component type to avoid construct-signature mismatch
    const Slider: React.ComponentType<React.PropsWithChildren<Settings>>;
    export default Slider;
}
