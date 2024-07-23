let contacts = [
  {
    id: "1",
    fullname: "hasan",
    mobilenumber: " 0915",
    email: "hasanmansouri1990@gmail.com",
    telegramID: "hasanmansouri",
    photo: "https://placehold.co/150x150/orange/white",
    job: "developer",
    city: "tehran",
  }
];

export const getcontacts = () => {
  return contacts;
};
export const getcontact = (id) => {
  return contacts.find((contact) => contact.id === id);
};
export const deletcontact = (id) => {
  contacts = contacts.filter((contact) => contact.id !== id);
};
