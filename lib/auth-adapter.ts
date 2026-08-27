export interface AuthAdapter {
  signIn(email: string, password: string): Promise<{ success: boolean; error?: string }>;
  signUp(email: string, password: string): Promise<{ success: boolean; error?: string }>;
  signOut(): Promise<void>;
  getCurrentUser(): Promise<{ email: string } | null>;
}

export class MockAuthAdapter implements AuthAdapter {
  async signIn(email: string, password: string) {
    console.log('Admin sign in attempt:', { email });
    return { success: false, error: 'Authentication is not configured in this demo shell.' };
  }

  async signUp(email: string, password: string) {
    console.log('Admin sign up attempt:', { email });
    return { success: false, error: 'First admin creation is not active in this shell.' };
  }

  async signOut() {}

  async getCurrentUser() {
    return null;
  }
}

export const authAdapter = new MockAuthAdapter();
