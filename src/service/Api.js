const BASE_URL = "https://connections-api.herokuapp.com";

const fetchContacts = async (path, token, options = {}) => {
  const res = await fetch(`${BASE_URL}/${path}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json; charset=UTF-8",
    },
    ...options,
  });
  return res.ok ? res.json() : Promise.reject(new Error(res.statusText));
};

const getContacts = (path, token, options) =>
  fetchContacts(path, token, options);

const addContact = (endpoint, newContact, token) => {
  const finalOptions = {
    method: "POST",
    body: JSON.stringify(newContact),
  };
  return fetchContacts(endpoint, token, finalOptions);
};

const deleteContact = (endpoint, id, token) =>
  fetchContacts(`${endpoint}/${id}`, token, {
    method: "DELETE",
  });

const post = (postnewAcc) => ({
  method: "POST",
  body: JSON.stringify(postnewAcc),
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
});

const registration = async (newAcc) => {
  const res = await fetch(`${BASE_URL}/users/signup`, post(newAcc));
  if (!res.ok) {
    return Promise.reject(new Error(res.statusText));
  }
  return res.json();
};

const login = async (logAcc) => {
  const res = await fetch(`${BASE_URL}/users/login`, post(logAcc));
  if (!res.ok) {
    return Promise.reject(new Error(res.statusText));
  }
  return res.json();
};

const loginOut = async (token) => {
  const res = await fetch(`${BASE_URL}/users/logout`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json; charset=UTF-8",
    },
  });
  if (!res.ok) {
    return Promise.reject(new Error(res.statusText));
  }
  return res.json();
};
const fetchCurrentUser = async (token) => {
  const res = await fetch(`${BASE_URL}/users/current`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json; charset=UTF-8",
    },
  });
  if (!res.ok) {
    return Promise.reject(new Error(res.statusText));
  }
  return res.json();
};
export {
  getContacts,
  addContact,
  deleteContact,
  registration,
  login,
  loginOut,
  fetchCurrentUser,
};
