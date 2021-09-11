const Manager = require("../lib/Manager.js");

describe("Manager", () => {
  const manager = new Manager("pgpguru", 412, "blah@email.com", "420-69-911");

  describe("Initialization", () => {
    it("should create an object with 'name', 'Id' number, 'email', and 'office phone number' ", () => {
      // Verify that the new object has the correct properties
      expect(manager.name).toEqual("pgpguru");
      expect(manager.id).toEqual(412);
      expect(manager.email).toEqual("pgpguru@email.com");
      expect(manager.officeNumber).toEqual("420-69-911");

    });
  });
  describe("getRole", () => {
    it("should return the managers role", () => {
      expect(manager.getRole()).toEqual("Manager");
    });
  });
});
