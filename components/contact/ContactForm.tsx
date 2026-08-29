'use client';

import React, { useState } from 'react';
import { CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';
import { SoftCard } from '@/components/ui/SoftCard';
import { PrimaryButton } from '@/components/ui/Buttons';
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

/** Shared field chrome. `min-h-[44px]` keeps every control above the WCAG
 *  touch-target floor and the focus ring matches the rest of the site. */
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

/** There is no backend on this site, so the form composes a WhatsApp message
 *  and hands the conversation to the INMAAS chat line. */
function buildWhatsAppUrl(values: FormValues): string {
  const lines = [
    'Hello INMAAS,',
    '',
    `Name: ${values.name.trim()}`,
    `Email: ${values.email.trim()}`,
    ...(values.phone.trim() ? [`Phone: ${values.phone.trim()}`] : []),
    `Subject: ${values.subject}`,
    '',
    values.message.trim(),
  ];

  const base = EXTERNAL_LINKS.primaryWhatsApp.split('?')[0];
  return `${base}?text=${encodeURIComponent(lines.join('\n'))}`;
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [whatsAppUrl, setWhatsAppUrl] = useState<string>('');

  const setField = (field: FieldName, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    const url = buildWhatsAppUrl(values);
    setWhatsAppUrl(url);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const resetForm = () => {
    setValues(EMPTY_FORM);
    setErrors({});
    setWhatsAppUrl('');
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
          Tell us what you need and we will continue the conversation on WhatsApp.
        </p>
      </div>

      {/* Always mounted so the confirmation is announced; `empty:hidden` keeps
          it from adding a stray flex gap while there is nothing to say. */}
      <div aria-live="polite" className="empty:hidden">
        {whatsAppUrl ? (
          <div className="flex flex-col gap-4 rounded-2xl bg-surface-2 border border-border/80 p-4 sm:p-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1">
                <p className="font-display font-bold text-base text-ink leading-snug">
                  Your message is ready in WhatsApp
                </p>
                <p className="text-sm text-ink-soft leading-relaxed">
                  Nothing has been emailed. We opened a WhatsApp chat with your details already
                  written out — press send there and our team will reply.
                </p>
              </div>
            </div>

            <div className="flex flex-col xs:flex-row gap-3">
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full xs:w-auto inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3 rounded-full bg-whatsapp-gradient text-white font-display font-bold text-sm shadow-elevated hover:scale-[1.03] active:scale-[0.98] transition-all focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
              >
                <MessageSquare className="w-4 h-4 flex-shrink-0" />
                <span>Open the chat again</span>
              </a>
              <button
                type="button"
                onClick={resetForm}
                className="w-full xs:w-auto inline-flex items-center justify-center min-h-[44px] px-6 py-3 rounded-full bg-white text-brand-deep font-semibold text-sm border border-[#C7D9EC] shadow-soft hover:bg-surface-2 transition-all focus:outline-none focus:ring-2 focus:ring-brand/30"
              >
                Write another message
              </button>
            </div>
          </div>
        ) : null}
      </div>

      {!whatsAppUrl && (
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4 sm:gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <div className="flex flex-col gap-1.5 text-start">
              <label htmlFor="contact-name" className={LABEL_CLASSES}>
                Name
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
                Email
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
                value={values.phone}
                onChange={(event) => setField('phone', event.target.value)}
                className={FIELD_CLASSES}
              />
            </div>

            <div className="flex flex-col gap-1.5 text-start">
              <label htmlFor="contact-subject" className={LABEL_CLASSES}>
                Interest
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
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              required
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

          <div className="flex flex-col gap-3 pt-1">
            <PrimaryButton type="submit" showArrow={false} className="w-full sm:w-auto">
              Send via WhatsApp
            </PrimaryButton>
            <p className="text-xs text-ink-soft leading-relaxed">
              Submitting opens WhatsApp with your details filled in. We do not store anything on
              this page.
            </p>
          </div>
        </form>
      )}
    </SoftCard>
  );
}
