'use client';

import React, { useState, useEffect } from 'react';
import {
  Star,
  CheckCircle2,
  ThumbsUp,
  MessageSquarePlus,
  X,
  Send,
  MapPin,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import {
  ProductReview,
  getProductReviews,
  calculateReviewStats,
} from '@/data/reviews';
import { SoftCard } from '@/components/ui/SoftCard';

const PAKISTANI_CITIES = [
  'Karachi, Sindh',
  'Lahore, Punjab',
  'Islamabad, ICT',
  'Rawalpindi, Punjab',
  'Faisalabad, Punjab',
  'Multan, Punjab',
  'Peshawar, KPK',
  'Quetta, Balochistan',
  'Hyderabad, Sindh',
  'Gujranwala, Punjab',
  'Sialkot, Punjab',
  'Abbottabad, KPK',
  'Bahawalpur, Punjab',
  'Sargodha, Punjab',
  'Sukkur, Sindh',
];

interface ProductReviewsProps {
  productSlug: string;
  productName: string;
}

export function ProductReviews({ productSlug, productName }: ProductReviewsProps) {
  // Reviews state with localStorage synchronization
  const [reviews, setReviews] = useState<ProductReview[]>(() =>
    getProductReviews(productSlug)
  );
  const [helpfulVoted, setHelpfulVoted] = useState<Record<string, boolean>>({});

  // Filter and sort
  const [selectedRatingFilter, setSelectedRatingFilter] = useState<number | 'all'>('all');
  const [sortBy, setSortBy] = useState<'helpful' | 'recent' | 'highest'>('helpful');

  // "Write a Review" form states
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [author, setAuthor] = useState('');
  const [city, setCity] = useState(PAKISTANI_CITIES[0]);
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  // Load custom reviews and helpful votes from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(`inmaas_reviews_${productSlug}`);
      if (stored) {
        const parsed = JSON.parse(stored) as ProductReview[];
        const initial = getProductReviews(productSlug);
        // Merge user reviews on top of built-in reviews
        setReviews([...parsed, ...initial]);
      } else {
        setReviews(getProductReviews(productSlug));
      }

      const storedHelpful = localStorage.getItem(`inmaas_helpful_votes`);
      if (storedHelpful) {
        setHelpfulVoted(JSON.parse(storedHelpful));
      }
    } catch {
      // Fallback
    }
  }, [productSlug]);

  const stats = calculateReviewStats(reviews);

  const handleHelpfulClick = (reviewId: string) => {
    if (helpfulVoted[reviewId]) return;

    setReviews((prev) =>
      prev.map((r) =>
        r.id === reviewId ? { ...r, helpfulCount: r.helpfulCount + 1 } : r
      )
    );

    const updated = { ...helpfulVoted, [reviewId]: true };
    setHelpfulVoted(updated);
    try {
      localStorage.setItem(`inmaas_helpful_votes`, JSON.stringify(updated));
    } catch {
      // Ignored
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!author.trim()) {
      setFormError('Please enter your full name.');
      return;
    }
    if (!title.trim()) {
      setFormError('Please add a short headline/title for your review.');
      return;
    }
    if (!comment.trim() || comment.trim().length < 15) {
      setFormError('Please provide a meaningful review (at least 15 characters).');
      return;
    }

    const newReview: ProductReview = {
      id: `user-${Date.now()}`,
      productSlug,
      author: author.trim(),
      city: city.trim(),
      rating,
      date: 'Just now',
      title: title.trim(),
      comment: comment.trim(),
      helpfulCount: 0,
    };

    // Save locally
    try {
      const stored = localStorage.getItem(`inmaas_reviews_${productSlug}`);
      const parsed = stored ? (JSON.parse(stored) as ProductReview[]) : [];
      const updatedUserReviews = [newReview, ...parsed];
      localStorage.setItem(
        `inmaas_reviews_${productSlug}`,
        JSON.stringify(updatedUserReviews)
      );
    } catch {
      // Ignored
    }

    setReviews((prev) => [newReview, ...prev]);
    setFormSuccess(true);

    // Reset form fields
    setTimeout(() => {
      setAuthor('');
      setTitle('');
      setComment('');
      setIsFormOpen(false);
      setFormSuccess(false);
    }, 2500);
  };

  // Filter & Sort
  const filteredReviews = reviews
    .filter((r) => {
      if (selectedRatingFilter === 'all') return true;
      return Math.round(r.rating) === selectedRatingFilter;
    })
    .sort((a, b) => {
      if (sortBy === 'helpful') return b.helpfulCount - a.helpfulCount;
      if (sortBy === 'highest') return b.rating - a.rating;
      return 0; // recent/default order
    });

  return (
    <section className="section-y bg-surface-2 border-t border-border/60" id="reviews">
      <div className="container-site flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-brand text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            <span>Patient, Doctor & Pharmacy Feedback</span>
          </div>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-4xl">
              Customer & Clinical Reviews for {productName}
            </h2>
            <button
              type="button"
              onClick={() => setIsFormOpen(!isFormOpen)}
              className="inline-flex items-center gap-2 rounded-full bg-[#0070BA] hover:bg-[#005EA0] px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageSquarePlus className="h-4 w-4" />
              <span>Write a Review</span>
            </button>
          </div>
        </div>

        {/* Rating Breakdown Overview Box */}
        <SoftCard hoverLift={false} className="p-6 sm:p-8 bg-white border border-[#DCEBF9]">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center">
            {/* Left: Big Score */}
            <div className="flex flex-col items-center justify-center text-center md:col-span-4 md:border-r md:border-border/60 md:pr-8">
              <span className="font-numeric text-5xl font-extrabold text-[#0070BA]">
                {stats.average.toFixed(1)}
              </span>
              <div className="flex items-center gap-1 my-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-5 w-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-xs font-semibold text-ink-soft">
                Based on <strong className="text-ink">{stats.totalCount}</strong> authentic reviews across Pakistan
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-bold text-emerald-700 border border-emerald-200">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>100% Authentic Feedback</span>
              </div>
            </div>

            {/* Right: Star Progress Bars */}
            <div className="flex flex-col gap-2.5 md:col-span-8 md:pl-4">
              {[5, 4, 3, 2, 1].map((star) => {
                const pct = stats.breakdown[star as 1 | 2 | 3 | 4 | 5] || 0;
                const count = stats.counts[star as 1 | 2 | 3 | 4 | 5] || 0;
                return (
                  <button
                    key={star}
                    type="button"
                    onClick={() =>
                      setSelectedRatingFilter(
                        selectedRatingFilter === star ? 'all' : star
                      )
                    }
                    className="group flex items-center gap-3 text-xs text-ink-soft hover:text-ink text-start transition-colors"
                  >
                    <span className="w-12 flex items-center gap-1 font-semibold">
                      <span>{star}</span>
                      <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    </span>
                    <div className="h-2.5 flex-1 rounded-full bg-surface-2 overflow-hidden border border-border/40">
                      <div
                        className="h-full bg-amber-400 rounded-full transition-all duration-500 group-hover:bg-amber-500"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="w-14 text-right font-numeric text-[11px] font-medium text-ink-soft">
                      {count} ({pct}%)
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </SoftCard>

        {/* Collapsible "Write a Review" Form */}
        {isFormOpen && (
          <div className="rounded-3xl border-2 border-[#0070BA]/30 bg-gradient-to-b from-[#F4F9FD] to-white p-6 sm:p-8 shadow-elevated transition-all animate-fadeIn">
            <div className="flex items-center justify-between border-b border-border/60 pb-4 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="h-9 w-9 rounded-full bg-[#EAF4FE] text-[#0070BA] flex items-center justify-center font-bold">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink">
                    Share Your Experience with {productName}
                  </h3>
                  <p className="text-xs text-ink-soft">
                    Your feedback helps families and doctors across Pakistan make informed healthcare choices.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsFormOpen(false)}
                className="tap-target rounded-full p-1.5 text-ink-soft hover:bg-black/5 hover:text-ink"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {formSuccess ? (
              <div className="flex flex-col items-center justify-center p-8 text-center gap-3">
                <div className="h-14 w-14 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-600 flex items-center justify-center animate-bounce">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h4 className="font-display text-xl font-bold text-ink">
                  Thank You for Your Review!
                </h4>
                <p className="text-sm text-ink-soft max-w-md">
                  Your rating and detailed experience have been published immediately. We appreciate your trust in INMAAS Health Care.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
                {/* 1. Star Rating Picker */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-ink">
                    Overall Rating <span className="text-rose-500">*</span>
                  </label>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      {[1, 2, 3, 4, 5].map((star) => {
                        const filled = star <= (hoverRating || rating);
                        return (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setRating(star)}
                            onMouseEnter={() => setHoverRating(star)}
                            onMouseLeave={() => setHoverRating(0)}
                            className="p-1 transition-transform hover:scale-125 focus:outline-none"
                            aria-label={`${star} star`}
                          >
                            <Star
                              className={`h-7 w-7 transition-colors ${
                                filled
                                  ? 'fill-amber-400 text-amber-400'
                                  : 'text-border hover:text-amber-300'
                              }`}
                            />
                          </button>
                        );
                      })}
                    </div>
                    <span className="text-xs font-bold text-brand-deep font-numeric ml-2">
                      {rating === 5
                        ? '5.0 — Excellent'
                        : rating === 4
                        ? '4.0 — Very Good'
                        : rating === 3
                        ? '3.0 — Average'
                        : rating === 2
                        ? '2.0 — Below Average'
                        : '1.0 — Poor'}
                    </span>
                  </div>
                </div>

                {/* 2. Name & Pakistani City */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Salman Khan / Mrs. Ayesha"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      className="w-full rounded-xl border border-border px-3.5 py-2.5 text-sm text-ink placeholder-ink-soft/50 focus:border-[#0070BA] focus:outline-none focus:ring-1 focus:ring-[#0070BA]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5">
                      City in Pakistan <span className="text-rose-500">*</span>
                    </label>
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full rounded-xl border border-border px-3.5 py-2.5 text-sm text-ink bg-white focus:border-[#0070BA] focus:outline-none focus:ring-1 focus:ring-[#0070BA]"
                    >
                      {PAKISTANI_CITIES.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 3. Review Title */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5">
                    Review Headline / Title <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Instant relief, excellent quality!"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full rounded-xl border border-border px-3.5 py-2.5 text-sm text-ink placeholder-ink-soft/50 focus:border-[#0070BA] focus:outline-none focus:ring-1 focus:ring-[#0070BA]"
                  />
                </div>

                {/* 4. Detailed Comment */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5">
                    Your Detailed Review <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe how this product helped you or your patient, taste, onset of action, packing condition, etc."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full rounded-xl border border-border px-3.5 py-2.5 text-sm text-ink placeholder-ink-soft/50 focus:border-[#0070BA] focus:outline-none focus:ring-1 focus:ring-[#0070BA] resize-none"
                  />
                </div>

                {formError && (
                  <div className="rounded-xl bg-rose-50 p-3 text-xs font-semibold text-rose-700 border border-rose-200">
                    {formError}
                  </div>
                )}

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsFormOpen(false)}
                    className="rounded-full px-5 py-2.5 text-xs font-semibold text-ink-soft hover:bg-black/5"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-[#0070BA] hover:bg-[#005EA0] px-6 py-2.5 text-xs font-bold text-white shadow-soft transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Send className="h-3.5 w-3.5" />
                    <span>Submit Review</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* Filter and Sort Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/60 pb-4">
          {/* Star Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setSelectedRatingFilter('all')}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                selectedRatingFilter === 'all'
                  ? 'bg-[#0070BA] text-white shadow-sm'
                  : 'bg-white border border-border/80 text-ink-soft hover:bg-[#EAF4FE]'
              }`}
            >
              All Reviews ({stats.totalCount})
            </button>
            {[5, 4, 3, 2, 1].map((starNum) => {
              const s = starNum as 1 | 2 | 3 | 4 | 5;
              const count = stats.counts[s] || 0;
              return (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSelectedRatingFilter(s)}
                  className={`inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                    selectedRatingFilter === s
                      ? 'bg-[#0070BA] text-white shadow-sm'
                      : 'bg-white border border-border/80 text-ink-soft hover:bg-[#EAF4FE]'
                  }`}
                >
                  <span>{s}</span>
                  <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                  <span>({count})</span>
                </button>
              );
            })}
          </div>

          {/* Sort dropdown */}
          <div className="flex items-center gap-2 text-xs text-ink-soft">
            <span className="font-semibold">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as 'helpful' | 'recent' | 'highest')
              }
              className="rounded-lg border border-border bg-white px-2.5 py-1.5 text-xs font-semibold text-ink focus:border-[#0070BA] focus:outline-none"
            >
              <option value="helpful">Most Helpful</option>
              <option value="recent">Most Recent</option>
              <option value="highest">Highest Rating</option>
            </select>
          </div>
        </div>

        {/* Reviews Cards List */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {filteredReviews.map((review) => {
            const hasVoted = helpfulVoted[review.id];
            const initials = review.author
              .split(' ')
              .map((n) => n[0])
              .filter(Boolean)
              .slice(0, 2)
              .join('')
              .toUpperCase();

            const isDisplayRole =
              review.userRole &&
              !review.userRole.toLowerCase().includes('verified') &&
              review.userRole !== 'Customer';

            return (
              <SoftCard
                key={review.id}
                hoverLift={false}
                className="flex flex-col justify-between gap-4 p-5 sm:p-6 bg-white border border-[#DCEBF9]"
              >
                <div className="flex flex-col gap-3">
                  {/* Top Bar: Stars + Date */}
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${
                            star <= review.rating
                              ? 'fill-amber-400 text-amber-400'
                              : 'text-border'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-[11px] font-medium text-ink-soft/80">
                      {review.date}
                    </span>
                  </div>

                  {/* Review Title */}
                  <h4 className="font-display text-base font-bold text-ink leading-snug">
                    {review.title}
                  </h4>

                  {/* Review Comment */}
                  <p className="text-xs sm:text-sm text-ink-soft leading-relaxed">
                    &ldquo;{review.comment}&rdquo;
                  </p>
                </div>

                {/* Bottom Meta & Helpful Button */}
                <div className="flex items-center justify-between border-t border-border/50 pt-3.5 mt-2 gap-2 flex-wrap">
                  <div className="flex items-center gap-2.5">
                    <div className="h-9 w-9 rounded-full bg-[#EAF4FE] text-[#0070BA] font-display font-bold text-xs flex items-center justify-center border border-[#D0E5FB] flex-shrink-0">
                      {initials}
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1.5">
                        <span className="font-display text-xs sm:text-sm font-bold text-ink">
                          {review.author}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-[11px] text-ink-soft">
                        <MapPin className="h-3 w-3 text-brand/70" />
                        <span>{review.city}</span>
                        {isDisplayRole && (
                          <>
                            <span>•</span>
                            <span className="font-medium text-brand">{review.userRole}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Helpful Button */}
                  <button
                    type="button"
                    onClick={() => handleHelpfulClick(review.id)}
                    disabled={hasVoted}
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold transition-all ${
                      hasVoted
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'bg-surface-2 text-ink-soft hover:bg-[#EAF4FE] hover:text-brand border border-border/60'
                    }`}
                    title="Mark this review as helpful"
                  >
                    <ThumbsUp className="h-3 w-3" />
                    <span>Helpful ({review.helpfulCount})</span>
                  </button>
                </div>
              </SoftCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
