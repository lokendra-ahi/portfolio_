export interface User {
    name: string;
    heading: string;
    subHeadings: string[];
    domain: string;
}

interface Action {
    type: string;
  }