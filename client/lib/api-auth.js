const API_BASE_URL = 'http://localhost:3000'; // This must match your Express backend port

// Sign-in function
export const signin = async (user) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/signin`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      console.error('Sign-in failed (non-200):', response.status);
      return { error: 'Sign-in failed. Please try again.' };
    }

    return await response.json();
  } catch (err) {
    console.error('Sign-in error:', err);
    return { error: 'Sign-in failed. Please try again.' };
  }
};

// Sign-out function
export const signout = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/signout`, {
      method: 'GET',
    });
    return await response.json();
  } catch (err) {
    console.error('Sign-out error:', err);
    return { error: 'Sign-out failed.' };
  }
};