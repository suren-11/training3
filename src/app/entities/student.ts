export class Student {

    id: string;
    firstName: string;
    secondName: string;
    lastName: string;
    dateOfBirth: Date;
    gender: string;
    streamId: bigint;
    registrationNumber: string;
    registrationDate: Date;

    constructor(
        id: string,
        firstName: string,
        secondName: string,
        lastName: string,
        dateOfBirth: Date,
        gender: string,
        streamId: bigint,
        registrationNumber: string,
        registrationDate: Date
    ) {
        this.id = id;
        this.firstName = firstName;
        this.secondName = secondName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.streamId = streamId;
        this.registrationNumber = registrationNumber;
        this.registrationDate = registrationDate;
    }

    // get _id(): string {
    //     return this.id;
    // }

    // set _id(value: string) {
    //     this.id = value;
    // }

    // get firstName(): string {
    //     return this._firstName;
    // }

    // set firstName(value: string) {
    //     this._firstName = value;
    // }

    // get secondName(): string {
    //     return this._secondName;
    // }

    // set secondName(value: string) {
    //     this._secondName = value;
    // }

    // get lastName(): string {
    //     return this._lastName;
    // }

    // set lastName(value: string) {
    //     this._lastName = value;
    // }

    // get dateOfBirth(): Date {
    //     return this._dateOfBirth;
    // }

    // set dateOfBirth(value: Date) {
    //     this._dateOfBirth = value;
    // }

    // get gender(): string {
    //     return this._gender;
    // }

    // set gender(value: string) {
    //     this._gender = value;
    // }

    // get streamId(): bigint {
    //     return this._streamId;
    // }

    // set streamId(value: bigint) {
    //     this._streamId = value;
    // }

    // get registrationNumber(): string {
    //     return this._registrationNumber;
    // }

    // set registrationNumber(value: string) {
    //     this._registrationNumber = value;
    // }

    // get registrationDate(): Date {
    //     return this._registrationDate;
    // }

    // set registrationDate(value: Date) {
    //     this._registrationDate = value;
    // }
}
