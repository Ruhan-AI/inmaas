'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Shield, ArrowLeft, Lock, Mail, AlertCircle } from 'lucide-react';
import { SoftCard } from '@/components/ui/SoftCard';
import { authAdapter } from '@/lib/auth-adapter';

export default function AdminPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'error' | 'info'; text: string } | null>(
    null
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    try {
      if (isSignUp) {
        const res = await authAdapter.signUp(email, password);
        if (!res.success) {
          setStatusMessage({ type: 'info', text: res.error || 'Account creation shell only.' });
        }
      } else {
        const res = await authAdapter.signIn(email, password);
        if (!res.success) {
          setStatusMessage({ type: 'info', text: res.error || 'Sign in shell only.' });
        }
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-surface py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md flex flex-col gap-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-ink-soft hover:text-brand transition-colors w-fit"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to site</span>
        </Link>

        <SoftCard className="p-8 sm:p-10 flex flex-col gap-6 border border-[#DCEBF9] shadow-elevated">
          {/* Top Icon & Titles */}
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-[#EAF4FE] text-brand flex items-center justify-center border border-[#D0E5FB]">
              <Shield className="w-7 h-7" />
            </div>

            <div className="flex flex-col gap-1">
              <h1 className="font-display font-bold text-2xl sm:text-3xl text-ink">
                {isSignUp ? 'Create admin account' : 'Admin Sign in'}
              </h1>
              <p className="text-xs sm:text-sm text-ink-soft">
                Restricted area for INMAAS staff.
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5 text-start">
              <label className="text-xs font-bold uppercase tracking-wider text-ink-soft">
                Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-ink-soft absolute start-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@inmaas.com"
                  required
                  className="w-full bg-surface-2 border border-border rounded-xl ps-10 pe-4 py-2.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-brand focus:bg-white transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5 text-start">
              <label className="text-xs font-bold uppercase tracking-wider text-ink-soft">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-ink-soft absolute start-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full bg-surface-2 border border-border rounded-xl ps-10 pe-4 py-2.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-brand focus:bg-white transition-all"
                />
              </div>
            </div>

            {statusMessage && (
              <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-800 flex items-start gap-2 text-start">
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>{statusMessage.text}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 py-3 rounded-xl bg-brand-gradient text-white font-semibold text-sm shadow-glow hover:opacity-95 active:scale-[0.99] transition-all disabled:opacity-50"
            >
              {loading ? 'Processing...' : isSignUp ? 'Create account' : 'Sign in'}
            </button>
          </form>

          {/* Toggle Sign in / Create */}
          <div className="pt-2 border-t border-border text-center">
            <button
              type="button"
              onClick={() => {
                setIsSignUp(!isSignUp);
                setStatusMessage(null);
              }}
              className="text-xs font-semibold text-brand hover:underline"
            >
              {isSignUp
                ? 'Have an account? Sign in'
                : 'Need to create the first admin account?'}
            </button>
          </div>
        </SoftCard>
      </div>
    </div>
  );
}
