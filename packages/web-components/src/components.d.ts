/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ModukAccordion {
        /**
          * the item
         */
        "items": {
    key?: string,
    heading: HTMLElement | string
    content: HTMLElement | string
    summary?: HTMLElement | string
  }[];
    }
}
declare global {
    interface HTMLModukAccordionElement extends Components.ModukAccordion, HTMLStencilElement {
    }
    var HTMLModukAccordionElement: {
        prototype: HTMLModukAccordionElement;
        new (): HTMLModukAccordionElement;
    };
    interface HTMLElementTagNameMap {
        "moduk-accordion": HTMLModukAccordionElement;
    }
}
declare namespace LocalJSX {
    interface ModukAccordion {
        /**
          * the item
         */
        "items"?: {
    key?: string,
    heading: HTMLElement | string
    content: HTMLElement | string
    summary?: HTMLElement | string
  }[];
    }
    interface IntrinsicElements {
        "moduk-accordion": ModukAccordion;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "moduk-accordion": LocalJSX.ModukAccordion & JSXBase.HTMLAttributes<HTMLModukAccordionElement>;
        }
    }
}
