class TemplateRender {
  templateEl: HTMLTemplateElement;
  targetEl: HTMLDivElement;

  constructor(template: string, target: string, styling: string) {
    this.templateEl = document.getElementById(template)! as HTMLTemplateElement;
    this.targetEl = document.getElementById(target)! as HTMLDivElement;

    const node: DocumentFragment = document.importNode(this.templateEl.content, true);

    this.append(node.firstElementChild as HTMLElement, styling);
  }

  private append(wrapper: HTMLElement, styling: string) {
    wrapper.id = styling;
    this.targetEl.insertAdjacentElement('afterbegin', wrapper);
  }
}

const projectForm = new TemplateRender('project-input', 'app', 'user-input');