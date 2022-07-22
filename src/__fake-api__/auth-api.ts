import type { User } from '../types/user';
import { wait } from '../utils/wait';

const user: User = {
  id: 'test-test-test-id',
  email: 'kylelin@thatch.co',
  name: 'Kyle Lin',
  password: 'Password123!',
};

class AuthApi {
  async me(): Promise<User> {
    await wait(1000);

    return new Promise((resolve, reject) => {
      try {
        resolve({
          id: user.id,
          email: user.email,
          name: user.name,
        });
      } catch (err) {
        console.error('[Auth Api]: ', err);
        reject(new Error('Internal server error'));
      }
    });
  }
}

export const authApi = new AuthApi();
