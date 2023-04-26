// Create a JavaScript class that simulates a simple contact manager.
// The contact manager should store contacts in an array and have the following methods:
// - addContact(name, email, phone) - adds a new contact to the contact list
// - removeContact(name) - removes a contact from the list by name
// - updateContact(name, { name, email, phone }) - updates the contact with the given name with the new contact information
// - printContacts() - prints a string listing all contacts in the contact list in the following format: "{name} can be reached at {email} or {phone}"

// The contact class has been provided for you. You may add additional methods to the class if you wish.

class Contact {
  constructor(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }

  toString() {
    return `${this.name} can be reached at ${this.email} or ${this.phone}`;
  }

  update(name, email, phone) {
    this.name = name || this.name;
    this.email = email || this.email;
    this.phone = phone || this.phone;
  }
}

export class ContactManager {
  // TODO: Complete the contact manager class
}
