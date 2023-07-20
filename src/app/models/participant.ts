export interface Participant {
    email: string;
    surname: string;
    firstName: string;
    age: number;
    isCaretaker: boolean;
    dependant: string;
    caretaker: string;
    occupation: string;
    cityOfResidence: string;
    participatedBefore: boolean;
    howDidYouFindOut: string;
    selectedCourses: string[];
    package: string;
    payMethod: string;
    dietaryPreference: string;
    paid: boolean;
    priority: number;

}