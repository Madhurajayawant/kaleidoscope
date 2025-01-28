import { faker, fakerEN_US } from "@faker-js/faker";

export let fakerDataFlag: boolean = true;
export let activity: any = [
  "Football",
  "Basketball",
  "Swimming",
  "Drama Club",
  "Debate Team",
  "Art Club",
  "Music Band",
  "Chess Club",
  "Robotics Club",
  "Volunteer Work",
  "Dance Team",
  "Track and Field",
  "Coding Club",
  "Photography",
  "Writing Club",
  "Student Council",
];

export let country: any = [
  "China",
  "India",
  "United States of America",
  "Indonesia",
  "Pakistan",
  "Brazil",
  "Nigeria",
  "Bangladesh",
  "Russia",
  "Mexico",
  "Japan",
  "Ethiopia",
  "Philippines",
  "Egypt",
  "Vietnam",
  "United Kingdom",
  "United Arab Emirates",
  "Uganda",
  "Turkmenistan",
];

export const randomUsername: string = `user_${Math.random()
  .toString(36)
  .substring(2, 10)}@gmail.com`;

interface UserData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: string;
  streetAddress: string;
  states: string;
  city: string;
  zipCode: string;
  country: string;
  GPA: string;
  graduationYear: string;
}

export const userData: UserData[] = [
  {
    firstName: fakerDataFlag ? faker.person.firstName() : "Madhura",
    lastName: fakerDataFlag ? faker.person.lastName() : "Jayawant",
    phoneNumber: fakerDataFlag
      ? faker.phone.number({ style: "national" })
      : "9777921231",
    password: fakerDataFlag
      ? faker.internet.password({
          length: 10,
          memorable: true,
          pattern: /[A-Za-z0-9!@#$%^&*]/,
          prefix: "New1#-",
        })
      : "Xyz123@xyz",
    streetAddress: fakerDataFlag
      ? faker.location.streetAddress()
      : "Ganesh Colony",
    states: fakerDataFlag ? fakerEN_US.location.state() : "California",
    city: fakerDataFlag ? faker.location.city() : "LA",
    zipCode: fakerDataFlag ? fakerEN_US.location.zipCode("#####") : "96162",
    country: fakerDataFlag ? faker.helpers.arrayElement(country) : "India",
    GPA: fakerDataFlag
      ? faker.number.float({ min: 0.0, max: 10.0 }).toString()
      : "5.5",
    graduationYear: fakerDataFlag ? faker.date.past().toString() : "2000",
  },
];

interface ExtracurricularData {
  randomActivity: string;
  totalYears: string;
  randomWord: string;
}

export const extraCurricuarData: ExtracurricularData[] = [
  {
    randomActivity: fakerDataFlag
      ? faker.helpers.arrayElement(activity)
      : "Writing Club",
    totalYears: fakerDataFlag
      ? faker.number.int({ min: 0, max: 10 }).toString()
      : "5",
    randomWord: fakerDataFlag ? faker.lorem.words({ min: 1, max: 10 }) : "new",
  },
];

export const randomSchoolName: string = `${faker.person.fullName()} High School`;
