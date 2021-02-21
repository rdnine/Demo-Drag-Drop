class TemplateRender {
  templateEl: HTMLTemplateElement;
  targetEl: HTMLDivElement;

  constructor(template: string, target: string) {
    this.templateEl = document.getElementById(template)! as HTMLTemplateElement;
    this.targetEl = document.getElementById(target)! as HTMLDivElement;

    const node: DocumentFragment = document.importNode(this.templateEl.content, true);

    this.append(node.firstElementChild as HTMLElement);
  }

  private append(wrapper: HTMLElement) {
    this.targetEl.insertAdjacentElement('afterbegin', wrapper);
  }
}

class ProjectInput {
  templateEl: HTMLTemplateElement;
  hostEl: HTMLDivElement;
  element: HTMLElement;

  constructor() {
    this.templateEl = document.getElementById('project-input')! as HTMLTemplateElement;
    this.hostEl = document.getElementById('app')! as HTMLDivElement;

    const importedNode: DocumentFragment = document.importNode(this.templateEl.content, true);
    this.element = importedNode.firstElementChild as HTMLElement;
    this.attach();
  }

  private attach() {
    this.hostEl.insertAdjacentElement('afterbegin', this.element)
  }
}

const projectForm = new TemplateRender('project-input', 'app');