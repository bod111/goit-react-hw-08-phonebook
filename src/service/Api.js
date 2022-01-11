const BASE_URL = "https://61db57ff4593510017aff878.mockapi.io";

const fetchContacts = async (path, options = {}) => {
  const res = await fetch(`${BASE_URL}/${path}`, options);
  return res.ok ? res.json() : Promise.reject(new Error(res.statusText));
};

const getContacts = (endpoint, options) => fetchContacts(endpoint, options);

const addContact = (endpoint, newConrtact, options = {}) => {
  const finalOptions = {
    method: "POST",
    body: JSON.stringify(newConrtact),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    ...options,
  };
  return fetchContacts(endpoint, finalOptions);
};

const deleteContact = (endpoint, id, options) =>
  fetchContacts(`${endpoint}/${id}`, { method: "DELETE", ...options });

export { getContacts, addContact, deleteContact };
