'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, CheckCircle2, Loader2, Send, ShoppingCart, Minus, Plus, AlertCircle } from 'lucide-react';
import type { Product, ProductVariant } from '@/data/products';
import { formatPkr } from '@/data/products';

export interface OrderModalItem {
  productName: string;
  variantLabel: string;
  pack?: string;
  quantity: number;
  price: number;
  image?: string;
}

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  product?: Product;
  selectedVariant?: ProductVariant;
  customItems?: OrderModalItem[];
  onOrderSuccess?: () => void;
}

export function OrderModal({
  isOpen,
  onClose,
  product,
  selectedVariant,
  customItems,
  onOrderSuccess,
}: OrderModalProps) {
  const [variant, setVariant] = useState<ProductVariant>(
    selectedVariant || (product ? product.variants[0] : ({} as ProductVariant))
  );
  const [quantity, setQuantity] = useState(1);

  // Form inputs
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');

  // States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  // Calculate items and total
  const items: OrderModalItem[] = customItems
    ? customItems
    : product
    ? [
        {
          productName: product.name,
          variantLabel: variant.label || product.variants[0]?.label || '',
          pack: variant.pack || product.variants[0]?.pack,
          quantity,
          price: variant.mrp || product.variants[0]?.mrp || 0,
          image: product.image,
        },
      ]
    : [];

  const totalAmount = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!name.trim() || !phone.trim() || !city.trim()) {
      setErrorMessage('Please fill in your Name, Phone Number, and City.');
      return;
    }

    if (items.length === 0) {
      setErrorMessage('No items in order.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customerName: name.trim(),
          phone: phone.trim(),
          email: email.trim() || undefined,
          city: city.trim(),
          address: address.trim() || undefined,
          notes: notes.trim() || undefined,
          items,
          totalAmount,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit order.');
      }

      setIsSuccess(true);
      if (onOrderSuccess) {
        onOrderSuccess();
      }
    } catch (err: any) {
      console.error('Order submission error:', err);
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetAndClose = () => {
    setIsSuccess(false);
    setErrorMessage(null);
    setName('');
    setPhone('');
    setEmail('');
    setCity('');
    setAddress('');
    setNotes('');
    setQuantity(1);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/60 backdrop-blur-sm animate-fade-in overflow-y-auto"
    >
      <div className="relative w-full max-w-lg rounded-2xl sm:rounded-3xl bg-white shadow-elevated border border-[#DCEBF9] overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Modal Header */}
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
              <h2 id="order-modal-title" className="font-display text-base sm:text-lg font-bold text-ink leading-tight">
                {isSuccess ? 'Order Confirmation' : 'Place Order'}
              </h2>
              <p className="text-[11px] text-ink-soft">Direct delivery to inmaasorderspk@gmail.com</p>
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

        {/* Modal Content */}
        <div className="overflow-y-auto p-5 sm:p-6">
          {isSuccess ? (
            /* Success State Screen */
            <div className="flex flex-col items-center text-center py-6 gap-4">
              <div className="h-16 w-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200 shadow-sm animate-scale-in">
                <CheckCircle2 className="h-9 w-9" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-display text-xl sm:text-2xl font-extrabold text-ink">
                  Order Placed Successfully!
                </h3>
                <p className="text-sm text-ink-soft max-w-sm">
                  Your order details have been securely sent to{' '}
                  <strong className="text-brand">inmaasorderspk@gmail.com</strong>.
                </p>
              </div>

              <div className="w-full rounded-2xl bg-surface-2 p-4 text-start text-xs border border-border/70 flex flex-col gap-2">
                <div className="flex justify-between">
                  <span className="text-ink-soft">Customer Name:</span>
                  <span className="font-semibold text-ink">{name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink-soft">Phone Number:</span>
                  <span className="font-semibold text-ink">{phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink-soft">City:</span>
                  <span className="font-semibold text-ink">{city}</span>
                </div>
                <div className="flex justify-between border-t border-border/60 pt-2 font-bold text-sm">
                  <span>Total Estimated MRP:</span>
                  <span className="text-brand-deep">{formatPkr(totalAmount)}</span>
                </div>
              </div>

              <p className="text-xs text-ink-soft">
                Our customer care representative will call or WhatsApp you shortly to confirm
                shipping & dispatch.
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
            /* Order Form */
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Product Selection / Summary Strip */}
              {product && !customItems && (
                <div className="rounded-2xl border border-[#DCEBF9] bg-[#F8FBFE] p-3.5 flex items-center gap-3.5">
                  <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl bg-white border border-[#E2EDF8]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-1.5"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display font-bold text-sm text-ink truncate">
                      {product.name}
                    </h4>
                    <p className="text-xs text-ink-soft truncate">{product.generic}</p>

                    {/* Variant dropdown if multiple variants */}
                    {product.variants.length > 1 ? (
                      <div className="mt-1.5 flex items-center gap-2">
                        <select
                          value={variant.label}
                          onChange={(e) => {
                            const found = product.variants.find((v) => v.label === e.target.value);
                            if (found) setVariant(found);
                          }}
                          className="rounded-lg border border-[#C7D9EC] bg-white px-2 py-1 text-xs font-semibold text-brand focus:outline-none focus:ring-1 focus:ring-brand"
                        >
                          {product.variants.map((v) => (
                            <option key={v.label} value={v.label}>
                              {v.label} {v.pack ? `(${v.pack})` : ''} - {formatPkr(v.mrp)}
                            </option>
                          ))}
                        </select>
                      </div>
                    ) : (
                      <div className="mt-1 flex items-center justify-between text-xs">
                        <span className="font-semibold text-brand">{variant.label}</span>
                        <span className="font-bold text-ink font-numeric">
                          {formatPkr(variant.mrp)}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Quantity Stepper */}
                  <div className="flex items-center gap-1.5 rounded-full border border-border bg-white px-2 py-1">
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="text-ink-soft hover:text-brand p-0.5"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="w-5 text-center text-xs font-bold text-ink font-numeric">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => q + 1)}
                      className="text-ink-soft hover:text-brand p-0.5"
                      aria-label="Increase quantity"
                    >
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              )}

              {/* Cart multiple items preview */}
              {customItems && customItems.length > 0 && (
                <div className="rounded-2xl border border-[#DCEBF9] bg-[#F8FBFE] p-3.5 flex flex-col gap-2 max-h-36 overflow-y-auto">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand">
                    Selected Items ({customItems.length}):
                  </span>
                  {customItems.map((item, i) => (
                    <div key={i} className="flex justify-between items-center text-xs">
                      <span className="text-ink font-medium">
                        {item.productName} ({item.variantLabel}) x {item.quantity}
                      </span>
                      <span className="font-bold text-brand-deep font-numeric">
                        {formatPkr(item.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Form Input Fields */}
              <div className="flex flex-col gap-3.5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Salman Khan / Ali Raza"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border border-border px-3.5 py-2.5 text-sm text-ink placeholder-ink-soft/50 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  />
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
                      City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Karachi, Lahore, etc."
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full rounded-xl border border-border px-3.5 py-2.5 text-sm text-ink placeholder-ink-soft/50 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1">
                    Email Address <span className="text-[11px] font-normal text-ink-soft">(Optional for confirmation copy)</span>
                  </label>
                  <input
                    type="email"
                    placeholder="yourname@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-border px-3.5 py-2.5 text-sm text-ink placeholder-ink-soft/50 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1">
                    Delivery Address / Clinic / Pharmacy
                  </label>
                  <input
                    type="text"
                    placeholder="Street address, area, or medical center"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full rounded-xl border border-border px-3.5 py-2.5 text-sm text-ink placeholder-ink-soft/50 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1">
                    Order Note / Prescription Remarks
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Any specific instructions or requirements..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full rounded-xl border border-border px-3.5 py-2 text-sm text-ink placeholder-ink-soft/50 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand resize-none"
                  />
                </div>
              </div>

              {/* Error Alert */}
              {errorMessage && (
                <div className="flex items-center gap-2 rounded-xl bg-rose-50 border border-rose-200 p-3 text-xs text-rose-700">
                  <AlertCircle className="h-4 w-4 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Total & Submit Button */}
              <div className="flex items-center justify-between border-t border-border/60 pt-4">
                <div className="flex flex-col">
                  <span className="text-[11px] font-semibold text-ink-soft uppercase">Total MRP</span>
                  <span className="font-numeric text-xl font-extrabold text-[#0070BA]">
                    {formatPkr(totalAmount)}
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0070BA] hover:bg-[#005EA0] px-6 py-3 text-sm font-semibold text-white shadow-soft transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Placing Order...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Place Order</span>
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
