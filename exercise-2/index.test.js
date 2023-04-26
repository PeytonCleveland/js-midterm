import { beforeEach } from "bun:test";
import { ContactManager } from ".";

describe("ContactManager", () => {
  let contactManager;

  beforeEach(() => {
    contactManager = new ContactManager();
  });

  describe("addContact", () => {
    it("should add a contact to the contact list", () => {
      const contact = {
        name: "John Doe",
        email: "email@domain.com",
        phone: "1234567890",
      };
      contactManager.addContact(contact.name, contact.email, contact.phone);
      expect(contactManager.contacts).toEqual([contact]);
    });
  });

  describe("removeContact", () => {});

  describe("updateContact", () => {});

  describe("printContacts", () => {});
});
