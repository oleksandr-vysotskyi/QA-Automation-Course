import { Employee } from "./employee.js";

export class PM extends Employee {
  getJobType() {
    return "I am a PM";
  }
}