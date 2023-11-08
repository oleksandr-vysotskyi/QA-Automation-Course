import { Employee } from "./employee.js";

export class Dev extends Employee {
  getJobType() {
    return "I am a Dev";
  }
  
  static returnArrayOfDevs(...devs) {
    return devs.filter(dev => dev instanceof Dev);
  }
}


