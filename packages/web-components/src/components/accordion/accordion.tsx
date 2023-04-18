import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'moduk-accordion',
  shadow: false,
})
export class ModukAccordion {


  /**
   * the item
   */
  @Prop() items: {
    key?: string,
    heading: HTMLElement | string
    content: HTMLElement | string
    summary?: HTMLElement | string
  }[] = [];

  accordionEl: Element;
  previousAccordionEl: Element;


  async componentDidRender() {
    console.log('update')
    if (typeof window !== 'undefined') {
      //@ts-expect-error
      const { Accordion } = await import("@moduk/frontend/client");
      //https://github.com/ionic-team/stencil/issues/3253
      const el = this.accordionEl.firstElementChild
      // Initialise the component if and only if the DOM element has changed
      if (el && el !== this.previousAccordionEl) {
        new Accordion(el).init();
        this.previousAccordionEl = el
      }
    }
  }



  render() {
    return (
      <Host ref={(el) => {
        this.accordionEl = el
      }}>
        <div
          class="govuk-accordion"
          data-module="govuk-accordion"
          key={this.items.length}

        >
          {this.items.map(({ heading, content, summary, key }, index) => (
            <div class="govuk-accordion__section" key={`${key || index}-${this.items.length}`}>
              <div class="govuk-accordion__section-header">
                <h2 class="govuk-accordion__section-heading">
                  <span
                    class="govuk-accordion__section-button"
                    id={`accordion-default-heading-${index}`}
                  >
                    {heading}
                  </span>
                </h2>
                {summary ? <div class="govuk-accordion__section-summary govuk-body" id="accordion-with-summary-sections-summary-1">
                  {summary}
                </div> : null}
              </div>
              <div
                id="accordion-default-content-1"
                class="govuk-accordion__section-content"
                aria-labelledby={`accordion-default-heading-${index}`}
              >
                <p class="govuk-body">
                  {content}
                </p>
              </div>
            </div>
          )
          )}
        </div>
      </Host>
    );
  }
}
