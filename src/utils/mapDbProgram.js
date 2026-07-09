import { Sparkles } from "lucide-react";

// Converts a row from the Supabase `programs` table into the same shape
// used by the hand-written programs in utils/program.js, so both can be
// rendered by the same components without special-casing.
export function mapDbProgram(row) {
  return {
    slug: row.slug,
    title: row.title,
    tagline: row.tagline || undefined,
    category: row.category,
    icon: Sparkles, // generic fallback icon when there's no custom logo
    logo: row.image_url || null,
    description: row.description,
    whoFor: row.who_for && row.who_for.length > 0 ? row.who_for : undefined,
    impact: row.impact && row.impact.length > 0 ? row.impact : undefined,
    whyMatters: row.why_matters || undefined,
    getInvolved:
      row.get_involved ||
      "Interested in getting involved? Register below and our team will reach out.",
  };
}