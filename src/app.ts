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

class ProjectInput {
  form: HTMLFormElement;
  titleInputEl: HTMLInputElement;
  descriptionInputEl: HTMLInputElement;
  peopleInputEl: HTMLInputElement;

  constructor() {
    this.form = document.querySelector('form') as HTMLFormElement;
    this.titleInputEl = document.querySelector('#title') as HTMLInputElement;
    this.descriptionInputEl = document.querySelector('#description') as HTMLInputElement;
    this.peopleInputEl = document.querySelector('#people') as HTMLInputElement;
    
    this.configure();
    new TemplateRender('project-input', 'app', 'user-input')
  }

  private submitHandler(event: Event) {
    event.preventDefault();
  }

  private configure() {
    this.form.addEventListener('submit', this.submitHandler.bind(this));
  }
}

const projectForm = new ProjectInput();