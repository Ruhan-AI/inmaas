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
    <div className="min-h-[80svh] flex flex-col items-center justify-center bg-surface py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md flex flex-col gap-4 sm:gap-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 min-h-[44px] w-fit text-xs font-bold text-ink-soft hover:text-brand transition-colors rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          <ArrowLeft className="w-4 h-4 flex-shrink-0" />
          <span>Back to site</span>
        </Link>

        <SoftCard className="p-6 sm:p-8 md:p-10 flex flex-col gap-6 border border-[#DCEBF9] shadow-elevated">
          {/* Top Icon & Titles */}
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#EAF4FE] text-brand flex items-center justify-center border border-[#D0E5FB] flex-shrink-0">
              <Shield className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>

            <div className="flex flex-col gap-1">
              <h1 className="font-display font-bold text-xl xs:text-2xl sm:text-3xl text-ink leading-[1.2]">
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
              <label
                htmlFor="admin-email"
                className="text-xs font-bold uppercase tracking-wider text-ink-soft"
              >
                Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-ink-soft absolute start-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="admin-email"
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@inmaas.com"
                  required
                  className="w-full min-h-[44px] bg-surface-2 border border-border rounded-xl ps-10 pe-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-brand focus:bg-white transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5 text-start">
              <label
                htmlFor="admin-password"
                className="text-xs font-bold uppercase tracking-wider text-ink-soft"
              >
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-ink-soft absolute start-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="admin-password"
                  name="password"
                  type="password"
                  autoComplete={isSignUp ? 'new-password' : 'current-password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full min-h-[44px] bg-surface-2 border border-border rounded-xl ps-10 pe-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-brand focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* Always mounted so assistive tech announces the result; `empty:hidden`
                keeps it from adding a stray flex gap while there is no message. */}
            <div aria-live="polite" className="empty:hidden">
              {statusMessage && (
                <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-800 flex items-start gap-2 text-start">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span className="break-words">{statusMessage.text}</span>
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full min-h-[44px] mt-2 py-3 rounded-xl bg-brand-gradient text-white font-semibold text-sm shadow-glow hover:opacity-95 active:scale-[0.99] transition-all disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
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
              className="inline-flex items-center justify-center min-h-[44px] px-3 text-xs font-semibold text-brand hover:underline rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
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
