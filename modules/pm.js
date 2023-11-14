import { Employee } from "./employee.js";

export class PM extends Employee {
  #jobTypeText = "I am a PM";

  getJobType() {
    return this.#jobTypeText;
  }
}