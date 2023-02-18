declare module '*.css' {
    const content: { [className: string]: string };
    export = content;
}

declare module "*.png" {
    const value: string;
    export default value;
}

declare module '*.svg' {
    import * as React from 'react';

    export const ReactComponent: React.FunctionComponent<React.SVGProps<
        SVGSVGElement
    > & { title?: string }>;

    const src: string;
    export default src;
}