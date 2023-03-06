const { v4 } = require('uuid');

let contacts = [{
  id: v4(),
  name: 'Coutinho',
  email: 'coutinho@gmail.com',
  phone: '923435353',
  category_id: v4(),

},
{
  id: v4(),
  name: 'Mateus',
  email: 'mateus@gmail.com',
  phone: '6568375836',
  category_id: v4(),

},
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id),
    ));
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactsRepository();
