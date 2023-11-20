import { Employee } from "./employee.js";

export class Dev extends Employee {
  #jobTypeText = "I am a Dev";

  getJobType() {
    return this.#jobTypeText;
  }
  
  static returnArrayOfDevs(...devs) {
    return devs.filter(dev => dev instanceof Dev);
  }
}


