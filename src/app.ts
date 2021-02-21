/**
 * Autobind decorator
 */

function autobind(
  _target: any,
  _method: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    }
  }

  return adjDescriptor;
}

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
    new TemplateRender('project-input', 'app', 'user-input');

    this.form = document.querySelector('form') as HTMLFormElement;
    this.titleInputEl = document.querySelector('#title') as HTMLInputElement;
    this.descriptionInputEl = document.querySelector('#description') as HTMLInputElement;
    this.peopleInputEl = document.querySelector('#people') as HTMLInputElement;
    
    this.configure();
  }

  @autobind
  private submitHandler(event: Event) {
    event.preventDefault();
    console.log(this.titleInputEl.value);
  }

  private configure() {
    this.form.addEventListener('submit', this.submitHandler);
  }
}

const projectForm = new ProjectInput();