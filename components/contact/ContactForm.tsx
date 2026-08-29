'use client';

import React, { useState } from 'react';
import { CheckCircle2, MessageSquare, AlertCircle, Send, Loader2 } from 'lucide-react';
import { SoftCard } from '@/components/ui/SoftCard';
import { EXTERNAL_LINKS } from '@/data/constants';
import { cn } from '@/lib/utils';

const SUBJECT_OPTIONS = [
  'General enquiry',
  'Product information',
  'Distributor partnership',
  'Certificate of Analysis',
];

type FieldName = 'name' | 'email' | 'phone' | 'subject' | 'message';

type FormValues = Record<FieldName, string>;

type FormErrors = Partial<Record<FieldName, string>>;

const EMPTY_FORM: FormValues = {
  name: '',
  email: '',
  phone: '',
  subject: 'General enquiry',
  message: '',
};

const FIELD_CLASSES =
  'w-full min-h-[44px] rounded-xl bg-surface-2 border border-border px-4 py-3 text-sm text-ink transition-all focus:outline-none focus:bg-white focus:ring-2 focus:ring-brand focus-visible:outline-none';

const LABEL_CLASSES = 'text-xs font-bold uppercase tracking-wider text-ink-soft';

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = 'Please enter your name.';
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!values.message.trim()) {
    errors.message = 'Please tell us how we can help.';
  }

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const setField = (field: FieldName, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setServerError(null);

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          phone: values.phone.trim() || undefined,
          subject: values.subject,
          message: values.message.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message.');
      }

      setIsSuccess(true);
    } catch (err: any) {
      console.error('Contact form submission error:', err);
      setServerError(err.message || 'Something went wrong. Please try again or reach out on WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setValues(EMPTY_FORM);
    setErrors({});
    setIsSuccess(false);
    setServerError(null);
  };

  return (
    <SoftCard
      hoverLift={false}
      className="p-5 sm:p-8 lg:p-10 flex flex-col gap-5 sm:gap-6 border border-[#DCEBF9]"
    >
      <div className="flex flex-col gap-2">
        <h2 className="font-display font-bold text-xl sm:text-2xl text-ink leading-snug">
          Send us a message
        </h2>
        <p className="text-sm text-ink-soft leading-relaxed">
          Tell us what you need and our team will get in touch with you shortly.
        </p>
      </div>

      {isSuccess ? (
        <div className="flex flex-col gap-4 rounded-2xl bg-[#F8FBFE] border border-[#DCEBF9] p-5 sm:p-7 animate-fade-in">
          <div className="flex items-start gap-3.5">
            <div className="h-10 w-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200 shadow-sm flex-shrink-0 mt-0.5">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div className="flex flex-col gap-1.5">
              <p className="font-display font-bold text-lg text-ink leading-snug">
                Message Sent Successfully!
              </p>
              <p className="text-sm text-ink-soft leading-relaxed">
                Your message has been delivered to our official team at{' '}
                <strong className="text-brand">inmaaspk@gmail.com</strong>. We will get back to
                you as soon as possible.
              </p>
            </div>
          </div>

          <div className="flex flex-col xs:flex-row gap-3 pt-2">
            <button
              type="button"
              onClick={resetForm}
              className="w-full xs:w-auto inline-flex items-center justify-center min-h-[44px] px-6 py-3 rounded-full bg-[#0070BA] text-white font-semibold text-sm shadow-soft hover:bg-[#005EA0] transition-all focus:outline-none"
            >
              Send another message
            </button>
            <a
              href={EXTERNAL_LINKS.primaryWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full xs:w-auto inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold text-sm border border-emerald-200 shadow-soft hover:bg-emerald-50 transition-all focus:outline-none"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Or chat on WhatsApp</span>
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4 sm:gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <div className="flex flex-col gap-1.5 text-start">
              <label htmlFor="contact-name" className={LABEL_CLASSES}>
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={values.name}
                onChange={(event) => setField('name', event.target.value)}
                aria-invalid={errors.name ? true : undefined}
                aria-describedby={errors.name ? 'contact-name-error' : undefined}
                className={cn(FIELD_CLASSES, errors.name && 'border-red-400 bg-red-50/60')}
              />
              {errors.name && (
                <p
                  id="contact-name-error"
                  className="text-xs text-red-600 flex items-start gap-1.5"
                >
                  <AlertCircle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1.5 text-start">
              <label htmlFor="contact-email" className={LABEL_CLASSES}>
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                required
                value={values.email}
                onChange={(event) => setField('email', event.target.value)}
                aria-invalid={errors.email ? true : undefined}
                aria-describedby={errors.email ? 'contact-email-error' : undefined}
                className={cn(FIELD_CLASSES, errors.email && 'border-red-400 bg-red-50/60')}
              />
              {errors.email && (
                <p
                  id="contact-email-error"
                  className="text-xs text-red-600 flex items-start gap-1.5"
                >
                  <AlertCircle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1.5 text-start">
              <label htmlFor="contact-phone" className={LABEL_CLASSES}>
                Phone <span className="font-semibold normal-case tracking-normal">(optional)</span>
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="0300 1234567"
                value={values.phone}
                onChange={(event) => setField('phone', event.target.value)}
                className={FIELD_CLASSES}
              />
            </div>

            <div className="flex flex-col gap-1.5 text-start">
              <label htmlFor="contact-subject" className={LABEL_CLASSES}>
                Interest / Subject
              </label>
              <select
                id="contact-subject"
                name="subject"
                value={values.subject}
                onChange={(event) => setField('subject', event.target.value)}
                className={cn(FIELD_CLASSES, 'cursor-pointer')}
              >
                {SUBJECT_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-1.5 text-start">
            <label htmlFor="contact-message" className={LABEL_CLASSES}>
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              required
              placeholder="How can we assist you today?"
              value={values.message}
              onChange={(event) => setField('message', event.target.value)}
              aria-invalid={errors.message ? true : undefined}
              aria-describedby={errors.message ? 'contact-message-error' : undefined}
              className={cn(
                FIELD_CLASSES,
                'min-h-[120px] resize-y leading-relaxed',
                errors.message && 'border-red-400 bg-red-50/60'
              )}
            />
            {errors.message && (
              <p
                id="contact-message-error"
                className="text-xs text-red-600 flex items-start gap-1.5"
              >
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                <span>{errors.message}</span>
              </p>
            )}
          </div>

          {serverError && (
            <div className="flex items-center gap-2 rounded-xl bg-rose-50 border border-rose-200 p-3 text-xs text-rose-700">
              <AlertCircle className="h-4 w-4 flex-shrink-0" />
              <span>{serverError}</span>
            </div>
          )}

          <div className="flex flex-col gap-3 pt-1">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-[48px] px-8 py-3.5 rounded-full bg-[#0070BA] hover:bg-[#005EA0] text-white font-semibold text-sm shadow-soft transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>
            <p className="text-xs text-ink-soft leading-relaxed">
              Your inquiry will be sent directly to our official email at{' '}
              <strong className="text-brand">inmaaspk@gmail.com</strong>.
            </p>
          </div>
        </form>
      )}
    </SoftCard>
  );
}
