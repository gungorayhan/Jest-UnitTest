const { sum, deleteUserById, findUserById } = require("../utils/helper")



//describe("",()=>{}) | test("",()=>{}) test === it  | expect() | toBe() | .not.toBe()

//.not.toBeDefined() | toBeUndefined() | .not.toBeNull() | toBeFalsy() | .not.toBeTruthy()

//toBeGreaterThan() | toBeGreaterThanOrEqual() | toBeLessThanOrEqual() | toBeLessThan()

//toMatch(/I/) | toMatch(/I/i)

//toEqual() ->referance type | expect.objectContaining({}) | expect.any(Number) | expect.arrayContaining([])

let userData = [];

beforeAll(() => {
    

    userData =["Clement","Sarah"]
    console.log("runs before all test",userData)
})

beforeEach(() => {
    console.log("running before each")
})

afterEach(() => {
    console.log("running after each test")
})


afterAll(() => {
    userData=[];
    console.log("running after all tests have run ",  userData)
    
})





describe("Number Operations", () => {

    test("1 plus 1should be equal to 2", () => {
        let a = 1;
        let b = 1;

        expect(a + b).toBe(2)
    })

    test("5 plus 6 is not equel to 10", () => {
        let a = 5;
        let b = 6;

        expect(a + b).not.toBe(10);
    })

})


describe("Testing other matcher methods", () => {
    test("Testing that a variable is undefined", () => {
        let number = undefined;

        expect(number).not.toBeDefined();
        expect(number).toBeUndefined();
        expect(number).not.toBeNull();
        expect(number).toBeFalsy();
        expect(number).not.toBeTruthy();
    })

    it("Should expect xero to act like zero", () => {
        let number = 0;

        expect(number).toBeDefined();
        expect(number).not.toBeUndefined();
        expect(number).not.toBeNull();
        expect(number).toBeFalsy();
        expect(number).not.toBeTruthy();
    })

    test("Number Comparion", () => {
        const a = 1;
        const b = 2;

        expect(a + b).toBeGreaterThan(2);
        expect(a + b).toBeGreaterThanOrEqual(3);
        expect(a + b).toBeLessThanOrEqual(5);
        expect(a + b).toBeLessThan(10);
    })

    test("there should be no I in team", () => {
        let string = "team";

        expect(string).not.toMatch(/I/); // (/I/i)  
    })

    test("there is 'stop' in Christopher", () => {
        let string = 'ChristoPher';

        expect(string).toMatch(/stop/i);
        // expect(string).toMatch(/stop/);
    })

    const shoppingList = ["Milk", "Trash bags", "Paper towels", "Iphones"];

    test("the shoppşing list doesnt have PS4", () => {
        expect(shoppingList).not.toContain('PS4');
        expect(shoppingList).toContain('Milk');
    })
})

//testing primitive and reference type equality

describe("Testing reference equality", () => {
    const user = {
        name: "Ayhan",
    }
    user["age"] = 31;

    test("Should return a user object with age as 45", () => {
        expect(user).toEqual({
            name: "Ayhan",
            age: 31
        })
    })

    test("Should return a user with a name and age key", () => {
        expect(user).toEqual(
            expect.objectContaining({
                name: expect.any(String),
                age: expect.any(Number)
            })
        )
    })


    //testing array equality

    test("Array equality", () => {
        const users = [
            "Clement",
            "Sarah",
            "July"
        ]

        users.push("Jacob");

        expect(users).toEqual(["Clement", "Sarah", "July", "Jacob"])

        const userObjectInArray = [
            {
                name: "Clement",
                age: 45
            },
            {
                name: "Sarah",
                age: 45
            },
            {
                name: "July",
                age: 46
            },
            {
                name: "Jacob",
                age: 46
            }
        ]


        userObjectInArray.push({
            name: "Phil",
            age: 60
        })

        expect(userObjectInArray).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    name: expect.any(String),
                    age: expect.any(Number),
                })
            ])
        )
    })
})


// PASS  tests/myFirstTest.test.js
// Number Operations
//   √ 1 plus 1should be equal to 2 (7 ms)
//   √ 5 plus 6 is not equel to 10
// Testing other matcher methods
//   √ Testing that a variable is undefined (1 ms)
//   √ Should expect xero to act like zero (1 ms)
//   √ Number Comparion (1 ms)
//   √ there should be no I in team
//   √ there is 'stop' in Christopher (1 ms)
//   √ the shoppşing list doesnt have PS4
// Testing reference equality
//   √ Should return a user object with age as 45 (1 ms)
//   √ Should return a user with a name and age key (1 ms)
//   √ Array equality (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       11 passed, 11 total
// Snapshots:   0 total
// Time:        1.267 s
// Ran all test suites.


describe("Testing imported functions", () => {


    const users = [
        {
            id: 1,
            name: "Ayhan"
        },
        {
            id: 2,
            name: "Gungor"
        }
    ]

    test("Sum function should add  2 numbers", () => {
        expect(sum(8, 5)).toBe(13)
    })

    test("delete by id function should delete a user by their id", () => {


        expect(deleteUserById(users, 2)).toEqual([
            {
                id: 1,
                name: "Ayhan"
            }
        ])


        expect(deleteUserById(users, 2).length).toBe(1);
    })

    test("Fİnds a user by Id from a list of users", () => {
        expect(findUserById(users, 2)).toEqual(
            {
                id: 2,
                name: "Gungor"
            }
        )

        expect(findUserById(users, 10)).toBeUndefined()
    })
})

// Testing imported functions
// √ Sum function should add  2 numbers
// √ delete by id function should delete a user by their id (1 ms)
// √ Fİnds a user by Id from a list of users (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       14 passed, 14 total
// Snapshots:   0 total
// Time:        1.246 s
// Ran all test suites.