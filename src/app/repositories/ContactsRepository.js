const { uuid } = require('uuidv4');

const contacts = [{
  id: uuid(),
  name: 'Coutinho',
  email: 'coutinho@gmail.com',
  phone: '923435353',
  category_id: uuid(),

}];

class ContactsRepository {
  findAll() {
    return new Promise((resolve, reject) => resolve(contacts));
  }
}

module.exports = new ContactsRepository();
