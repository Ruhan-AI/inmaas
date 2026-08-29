'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, CheckCircle2, Loader2, Send, Building2, AlertCircle } from 'lucide-react';

interface DistributorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DistributorModal({ isOpen, onClose }: DistributorModalProps) {
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [region, setRegion] = useState('Sindh');
  const [city, setCity] = useState('');
  const [license, setLicense] = useState('');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!contactName.trim() || !phone.trim() || !city.trim() || !email.trim()) {
      setErrorMessage('Please fill in your Contact Name, Email, Phone, and City.');
      return;
    }

    setIsSubmitting(true);

    try {
      const fullMessage = `
[DISTRIBUTOR PARTNERSHIP APPLICATION]
Company / Distribution Agency: ${companyName || 'Not specified'}
Region / Province: ${region}
Operating City: ${city}
Drug Sale License #: ${license || 'Pending / Under Application'}

Remarks / Overview:
${message || 'Interested in becoming a registered regional distributor for INMAAS Health Care products.'}
      `.trim();

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: contactName.trim(),
          email: email.trim(),
          phone: phone.trim(),
          subject: `Distributor Partnership - ${city} (${region})`,
          message: fullMessage,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit inquiry.');
      }

      setIsSuccess(true);
    } catch (err: any) {
      console.error('Distributor inquiry error:', err);
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetAndClose = () => {
    setIsSuccess(false);
    setErrorMessage(null);
    setCompanyName('');
    setContactName('');
    setPhone('');
    setEmail('');
    setCity('');
    setLicense('');
    setMessage('');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="distributor-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/60 backdrop-blur-sm animate-fade-in overflow-y-auto"
    >
      <div className="relative w-full max-w-lg rounded-2xl sm:rounded-3xl bg-white shadow-elevated border border-[#DCEBF9] overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border/60 bg-surface-2 px-5 py-4 sm:px-6">
          <div className="flex items-center gap-2.5">
            <div className="relative h-7 w-7 flex-shrink-0">
              <Image
                src="/assets/inmaas-emblem.png"
                alt="INMAAS"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h2 id="distributor-modal-title" className="font-display text-base sm:text-lg font-bold text-ink leading-tight">
                {isSuccess ? 'Application Received' : 'Become a Distributor'}
              </h2>
              <p className="text-[11px] text-ink-soft">Direct application to inmaaspk@gmail.com</p>
            </div>
          </div>
          <button
            type="button"
            onClick={resetAndClose}
            className="rounded-full p-1.5 text-ink-soft hover:bg-black/5 hover:text-ink transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-5 sm:p-6">
          {isSuccess ? (
            <div className="flex flex-col items-center text-center py-6 gap-4">
              <div className="h-16 w-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200 shadow-sm animate-scale-in">
                <CheckCircle2 className="h-9 w-9" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-display text-xl sm:text-2xl font-extrabold text-ink">
                  Inquiry Submitted!
                </h3>
                <p className="text-sm text-ink-soft max-w-sm">
                  Your distribution inquiry has been sent to{' '}
                  <strong className="text-brand">inmaaspk@gmail.com</strong>.
                </p>
              </div>

              <div className="w-full rounded-2xl bg-surface-2 p-4 text-start text-xs border border-border/70 flex flex-col gap-2">
                <div className="flex justify-between">
                  <span className="text-ink-soft">Contact Person:</span>
                  <span className="font-semibold text-ink">{contactName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink-soft">Phone Number:</span>
                  <span className="font-semibold text-ink">{phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink-soft">City / Region:</span>
                  <span className="font-semibold text-ink">{city} ({region})</span>
                </div>
              </div>

              <p className="text-xs text-ink-soft">
                Our institutional sales and commercial team will contact you with wholesale margins
                and product catalog.
              </p>

              <button
                type="button"
                onClick={resetAndClose}
                className="mt-2 w-full min-h-[44px] rounded-full bg-[#0070BA] hover:bg-[#005EA0] text-white font-semibold text-sm shadow-soft transition-all"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1">
                    Contact Person <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tariq Mehmood"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full rounded-xl border border-border px-3.5 py-2.5 text-sm text-ink placeholder-ink-soft/50 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1">
                    Company / Pharmacy Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Al-Madina Medicos"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full rounded-xl border border-border px-3.5 py-2.5 text-sm text-ink placeholder-ink-soft/50 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1">
                    Phone / WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0300 1234567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-xl border border-border px-3.5 py-2.5 text-sm text-ink placeholder-ink-soft/50 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-border px-3.5 py-2.5 text-sm text-ink placeholder-ink-soft/50 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1">
                    Region / Province
                  </label>
                  <select
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="w-full rounded-xl border border-border px-3.5 py-2.5 text-sm text-ink bg-white focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand cursor-pointer"
                  >
                    <option value="Sindh">Sindh</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Khyber Pakhtunkhwa">Khyber Pakhtunkhwa</option>
                    <option value="Balochistan">Balochistan</option>
                    <option value="Islamabad Capital Territory">Islamabad (ICT)</option>
                    <option value="Azad Jammu & Kashmir">Azad Jammu & Kashmir</option>
                    <option value="Gilgit-Baltistan">Gilgit-Baltistan</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1">
                    Operating City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lahore, Sukkur, Multan"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full rounded-xl border border-border px-3.5 py-2.5 text-sm text-ink placeholder-ink-soft/50 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1">
                  Drug Sale License # <span className="text-[11px] font-normal text-ink-soft">(Optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="Form 9 / License registration number"
                  value={license}
                  onChange={(e) => setLicense(e.target.value)}
                  className="w-full rounded-xl border border-border px-3.5 py-2.5 text-sm text-ink placeholder-ink-soft/50 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1">
                  Additional Details / Coverage Network
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your distribution reach, key institutions covered, or volume inquiries..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-xl border border-border px-3.5 py-2 text-sm text-ink placeholder-ink-soft/50 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand resize-none"
                />
              </div>

              {errorMessage && (
                <div className="flex items-center gap-2 rounded-xl bg-rose-50 border border-rose-200 p-3 text-xs text-rose-700">
                  <AlertCircle className="h-4 w-4 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="rounded-full px-5 py-2.5 text-sm font-semibold text-ink-soft hover:bg-black/5 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0070BA] hover:bg-[#005EA0] px-6 py-2.5 text-sm font-semibold text-white shadow-soft transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Sending Application...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Submit Application</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
