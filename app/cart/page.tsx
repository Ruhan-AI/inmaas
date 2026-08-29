'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShoppingBag,
  ArrowRight,
  Trash2,
  Minus,
  Plus,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  ArrowLeft,
} from 'lucide-react';
import { useCart } from '@/context/CartProvider';
import { formatPkr } from '@/data/products';
import { SoftCard } from '@/components/ui/SoftCard';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, clearCart, cartTotal, cartCount } = useCart();

  // Checkout form states
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!name.trim() || !phone.trim() || !city.trim()) {
      setErrorMessage('Please enter your Name, Phone Number, and City.');
      return;
    }

    if (items.length === 0) {
      setErrorMessage('Your cart is empty.');
      return;
    }

    setIsSubmitting(true);

    try {
      const orderPayload = {
        customerName: name.trim(),
        phone: phone.trim(),
        email: email.trim() || undefined,
        city: city.trim(),
        address: address.trim() || undefined,
        notes: notes.trim() || undefined,
        items: items.map((i) => ({
          productName: i.product.name,
          variantLabel: i.variant.label,
          pack: i.variant.pack,
          quantity: i.quantity,
          price: i.variant.mrp,
        })),
        totalAmount: cartTotal,
      };

      const res = await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderPayload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit order.');
      }

      setIsSuccess(true);
      clearCart();
    } catch (err: any) {
      console.error('Cart checkout error:', err);
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // 1. Success Screen
  if (isSuccess) {
    return (
      <div className="min-h-[75svh] flex items-center justify-center bg-surface py-12 px-4 sm:px-6 lg:px-8">
        <SoftCard className="max-w-lg w-full p-6 sm:p-10 text-center flex flex-col items-center gap-5 border border-[#DCEBF9] shadow-elevated">
          <div className="h-16 w-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200 shadow-sm animate-scale-in">
            <CheckCircle2 className="h-9 w-9" />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-ink tracking-tight">
              Order Placed Successfully!
            </h1>
            <p className="text-sm text-ink-soft">
              Your cart items and delivery details have been forwarded to{' '}
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
              <span className="text-ink-soft">Delivery City:</span>
              <span className="font-semibold text-ink">{city}</span>
            </div>
          </div>

          <p className="text-xs text-ink-soft">
            Our team will contact you shortly to confirm your order and shipping details.
          </p>

          <Link
            href="/products"
            className="w-full inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3.5 rounded-full bg-[#0070BA] hover:bg-[#005EA0] text-white font-semibold text-sm shadow-soft transition-all"
          >
            <span>Continue Shopping</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </SoftCard>
      </div>
    );
  }

  // 2. Empty State
  if (items.length === 0) {
    return (
      <div className="min-h-[70svh] flex items-center justify-center bg-surface py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <SoftCard className="max-w-md w-full p-6 sm:p-10 text-center flex flex-col items-center gap-5 sm:gap-6 border border-[#DCEBF9] shadow-elevated">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#EAF4FE] text-[#0070BA] flex items-center justify-center border border-[#D0E5FB] flex-shrink-0">
            <ShoppingBag className="w-8 h-8 sm:w-10 sm:h-10" />
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-ink tracking-tight leading-[1.15]">
              Your cart is empty
            </h1>
            <p className="text-ink-soft text-[15px] sm:text-base">Browse our catalog to add products</p>
          </div>

          <div className="pt-2 w-full xs:w-auto">
            <Link
              href="/products"
              className="w-full xs:w-auto inline-flex items-center justify-center gap-2 min-h-[44px] px-6 sm:px-8 py-3.5 rounded-full bg-[#0070BA] hover:bg-[#005EA0] text-white font-semibold text-sm shadow-soft transition-all focus:outline-none"
            >
              <span>Shop Products</span>
              <ArrowRight className="w-4 h-4 flex-shrink-0" />
            </Link>
          </div>
        </SoftCard>
      </div>
    );
  }

  // 3. Active Cart & Checkout View
  return (
    <div className="min-h-screen bg-surface-2 py-10 sm:py-14 lg:py-16">
      <div className="container-site">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand">
              CART & CHECKOUT
            </span>
            <h1 className="font-display text-2xl xs:text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
              Your Selected Products ({cartCount})
            </h1>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:underline"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Add More Products</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-start">
          {/* Left Column: Cart Items List */}
          <div className="flex flex-col gap-4 lg:col-span-7">
            <div className="rounded-3xl border border-[#DCEBF9] bg-white p-4 sm:p-6 shadow-soft flex flex-col divide-y divide-border/60">
              {items.map((item) => (
                <div
                  key={`${item.product.slug}-${item.variant.label}`}
                  className="flex flex-col gap-3 py-4 first:pt-0 last:pb-0 xs:flex-row xs:items-center xs:justify-between"
                >
                  {/* Image & Title */}
                  <div className="flex items-center gap-3.5">
                    <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-2xl bg-surface-2 border border-border/50">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-contain p-1.5"
                      />
                    </div>
                    <div className="flex flex-col">
                      <Link
                        href={`/products/${item.product.slug}`}
                        className="font-display text-base font-bold text-ink hover:text-brand transition-colors"
                      >
                        {item.product.name}
                      </Link>
                      <span className="text-xs font-semibold text-brand">
                        {item.variant.label} {item.variant.pack ? `(${item.variant.pack})` : ''}
                      </span>
                      <span className="font-numeric text-xs text-ink-soft">
                        Unit MRP: {formatPkr(item.variant.mrp)}
                      </span>
                    </div>
                  </div>

                  {/* Quantity and Actions */}
                  <div className="flex items-center justify-between gap-4 xs:justify-end">
                    {/* Stepper */}
                    <div className="flex items-center gap-2 rounded-full border border-border bg-surface-2 px-2.5 py-1">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.product.slug, item.variant.label, item.quantity - 1)
                        }
                        className="text-ink-soft hover:text-brand p-0.5"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="w-6 text-center text-xs font-bold text-ink font-numeric">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.product.slug, item.variant.label, item.quantity + 1)
                        }
                        className="text-ink-soft hover:text-brand p-0.5"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>

                    {/* Subtotal */}
                    <span className="font-numeric text-sm font-extrabold text-ink min-w-[75px] text-end">
                      {formatPkr(item.variant.mrp * item.quantity)}
                    </span>

                    {/* Delete */}
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.product.slug, item.variant.label)}
                      className="rounded-full p-1.5 text-rose-500 hover:bg-rose-50 transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Clear Cart link */}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={clearCart}
                className="text-xs text-ink-soft hover:text-rose-600 transition-colors"
              >
                Clear All Items
              </button>
            </div>
          </div>

          {/* Right Column: Checkout Form */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-[#DCEBF9] bg-white p-5 sm:p-7 shadow-elevated">
              <div className="mb-5 border-b border-border/60 pb-4">
                <h2 className="font-display text-lg font-bold text-ink">
                  Direct Order & Delivery
                </h2>
                <p className="text-xs text-ink-soft">
                  Details will be emailed directly to inmaasorderspk@gmail.com
                </p>
              </div>

              <form onSubmit={handleCheckout} className="flex flex-col gap-4">
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
                      placeholder="e.g. Karachi, Lahore"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full rounded-xl border border-border px-3.5 py-2.5 text-sm text-ink placeholder-ink-soft/50 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1">
                    Email Address <span className="text-[11px] font-normal text-ink-soft">(Optional)</span>
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
                    Delivery Address / Medical Center
                  </label>
                  <input
                    type="text"
                    placeholder="Street address, area, or pharmacy location"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full rounded-xl border border-border px-3.5 py-2.5 text-sm text-ink placeholder-ink-soft/50 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1">
                    Special Notes
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Any specific instructions..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full rounded-xl border border-border px-3.5 py-2 text-sm text-ink placeholder-ink-soft/50 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand resize-none"
                  />
                </div>

                {/* Pricing Breakdown */}
                <div className="rounded-2xl bg-surface-2 p-4 border border-border/80 flex flex-col gap-2 mt-2">
                  <div className="flex justify-between text-xs text-ink-soft">
                    <span>Items Count:</span>
                    <span className="font-semibold text-ink">{cartCount}</span>
                  </div>
                  <div className="flex justify-between text-xs text-ink-soft">
                    <span>Shipping / Delivery:</span>
                    <span className="font-semibold text-emerald-600">Calculated on dispatch</span>
                  </div>
                  <div className="flex justify-between text-base font-extrabold text-ink border-t border-border/60 pt-2">
                    <span>Total MRP:</span>
                    <span className="text-[#0070BA] font-numeric">{formatPkr(cartTotal)}</span>
                  </div>
                </div>

                {errorMessage && (
                  <div className="flex items-center gap-2 rounded-xl bg-rose-50 border border-rose-200 p-3 text-xs text-rose-700">
                    <AlertCircle className="h-4 w-4 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#0070BA] hover:bg-[#005EA0] px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Submitting Order...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Place Order</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
