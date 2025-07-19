const API_BASE_URL = 'http://localhost:3000';

const create = async (user) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/users/`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    const data = await response.json();
    return data;
  } catch (err) {
    console.error('Create user error:', err);
  }
};

const list = async (signal) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/users/`, {
      method: 'GET',
      signal: signal,
    });

    const data = await response.json();
    return data;
  } catch (err) {
    console.error('List users error:', err);
  }
};

const read = async (params, credentials, signal) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/users/${params.userId}`, {
      method: 'GET',
      signal: signal,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t,
      },
    });

    const data = await response.json();
    return data;
  } catch (err) {
    console.error('Read user error:', err);
  }
};

const update = async (params, credentials, user) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/users/${params.userId}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t,
      },
      body: JSON.stringify(user),
    });

    const data = await response.json();
    return data;
  } catch (err) {
    console.error('Update user error:', err);
  }
};

const remove = async (params, credentials) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/users/${params.userId}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t,
      },
    });

    const data = await response.json();
    return data;
  } catch (err) {
    console.error('Delete user error:', err);
  }
};

export { create, list, read, update, remove };
