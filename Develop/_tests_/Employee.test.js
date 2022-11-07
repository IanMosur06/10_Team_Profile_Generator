const { TestScheduler } = require("jest");
const Employee = require("../lib/Manager");








// TESTS FOR SETTERS
TestScheduler("Can set name via constructor arguments", () => {
// Variable for name
// Variable for new Employee(passing in the variable for name here)
// Set up you expect and to be
});

TestScheduler('Can set id via constructor argument', () => {
    // Variable for the test value in this case a number since its an id
    const testValue = 100;
    // Variable for ne Employee('example name as a string', testValue)
    const e = new Employee('Foo', testValue);
    // Set up you expect and to be
    expect(e.id).toBe(testValue);
});

test('Can set email via constructor argument', () => {
    // Variable for test value
    // Variable for new Employee('example name', example number, test value)
    // Set up you expect and to be
});

// TEST FOR GETTERS
test('Can get name via getName', () => {
    // variable for test value
    const testValue = 'Alice';
    // Variable for new Employee(testValue)
    const e = new Employee(testValue);
    // expect using getters, and time you to be
    expect(e.getName()).toBe(testValue);
});

test('Can be id via getId()', () => {
    // testValue
    // new Employee('exmaple name', testValue)
    // expect and to be
});

test('Can get email via getEmail()', () => {
    // same pattern from before
});

test('getRole() should return \"Employee\"', () => {
    // same pattern as before
});

