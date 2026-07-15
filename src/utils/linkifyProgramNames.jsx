// src/utils/linkifyProgramNames.jsx
import { Link } from "react-router-dom";

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Scans a block of text for any other program's title and turns each
 * occurrence into a clickable link to that program's detail page.
 *
 * @param {string} text - the text to scan
 * @param {Array} allPrograms - full merged list of static + DB programs (each needs .slug and .title)
 * @param {string|null} currentSlug - the slug of the program this text "belongs to" (its own
 *   name won't be linked). Pass null/undefined on pages that don't belong to any single program
 *   (e.g. Testimonials, the Programs listing intro) so every mention gets linked.
 */
export function linkifyProgramNames(text, allPrograms, currentSlug) {
  if (!text || typeof text !== "string") return text;
  if (!allPrograms || allPrograms.length === 0) return text;

  const others = allPrograms.filter((p) => p.slug !== currentSlug && p.title);
  if (others.length === 0) return text;

  // Longest titles first so "SkillSet Lab Training" doesn't get partially
  // matched by a shorter title that happens to be a substring.
  const titles = [...new Set(others.map((p) => p.title))].sort((a, b) => b.length - a.length);
  const pattern = new RegExp(`(${titles.map(escapeRegExp).join("|")})`, "g");
  const parts = text.split(pattern);

  return parts.map((part, i) => {
    const match = others.find((p) => p.title === part);
    if (match) {
      return (
        <Link
          key={`${match.slug}-${i}`}
          to={`/programs/${match.slug}`}
          className="text-red-500 font-medium hover:underline"
        >
          {part}
        </Link>
      );
    }
    return part;
  });
}