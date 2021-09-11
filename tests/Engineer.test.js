const Engineer = require("../lib/Engineer.js");


describe("Engineer", () => {
  const engineer = new Engineer("pgpguru", 412, "pgpguru@email.com", "github");
    describe("Initialization", () => {
      it("should create an object with 'name', 'Id' number, 'email', and 'github' ", () => {
        // Verify that the new object has the correct properties
        //expect(employee).toEqual({ Employee: [], name: "Derek" , id: "412", email:"blah@email.com", github:"github" });
        expect(engineer.name).toEqual("pgpguru");
        expect(engineer.id).toEqual(412);
        expect(engineer.email).toEqual("pgpguru@email.com");
        expect(engineer.github).toEqual("github");

      });
    });
    describe("getRole", () => {
      it("should return the Engineer's role", () => {
        expect(engineer.getRole()).toEqual("Engineer");
      });
    });
    describe("getGithub", () => {
      it("should return the Engineer's Github", () => {
        expect(engineer.getGithub()).toEqual(engineer.github);
      });
    });
});