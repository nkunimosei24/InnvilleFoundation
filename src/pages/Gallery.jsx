import { useEffect, useState } from "react";
import { Image as ImageIcon, Maximize2, X } from "lucide-react";
import { supabase } from "../lib/src/lib/supabase";

// Bento-style size pattern, repeating every 7 tiles. First tile in each
// cycle is the "hero" (large), the rest vary to avoid a flat grid.
const SIZE_PATTERN = [
  "col-span-2 row-span-2", // hero
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1",
];

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      const { data, error } = await supabase
        .from("gallery")
        .select("*")
        .order("created_at", { ascending: false });
      if (!error) setImages(data);
      setLoading(false);
    };
    fetchImages();
  }, []);

  return (
    <div className="w-full bg-white">
      {/* HEADER */}
      <section className="py-16 sm:py-20 text-center border-b border-gray-100 px-4">
        <p className="text-red-500 uppercase tracking-widest text-xs sm:text-sm font-semibold">
          Gallery
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 text-gray-900">
          Moments We've Built Together
        </h1>
        <p className="mt-5 sm:mt-6 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          A look inside our programs, events, and community gatherings.
        </p>
      </section>

      {/* BENTO GRID */}
      <section className="py-14 sm:py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {loading ? (
            <p className="text-center text-white/40 text-sm py-12">Loading gallery...</p>
          ) : images.length === 0 ? (
            <div className="text-center py-16">
              <ImageIcon className="w-10 h-10 text-white/20 mx-auto" />
              <p className="mt-4 text-white/40 text-sm">
                No photos have been added yet. Check back soon.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-4 auto-rows-[130px] sm:auto-rows-[160px] gap-3 sm:gap-4 grid-flow-dense">
              {images.map((img, index) => {
                const sizeClass = SIZE_PATTERN[index % SIZE_PATTERN.length];
                return (
                  <button
                    key={img.id}
                    onClick={() => setActiveImage(img)}
                    className={`group relative rounded-xl overflow-hidden bg-gray-800 text-left ${sizeClass}`}
                  >
                    <img
                      src={img.image_url}
                      alt={img.caption || "Innville Foundation gallery photo"}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Base gradient so text is always legible, even without hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                    {/* Expand icon, appears on hover like the reference */}
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Maximize2 className="w-3.5 h-3.5 text-white" />
                    </div>

                    {/* Caption block */}
                    {(img.category || img.caption) && (
                      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                        {img.category && (
                          <p className="text-red-400 text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-1">
                            {img.category}
                          </p>
                        )}
                        {img.caption && (
                          <p className="text-white font-semibold text-sm sm:text-base leading-snug line-clamp-2">
                            {img.caption}
                          </p>
                        )}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* LIGHTBOX */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
        >
          <button
            onClick={() => setActiveImage(null)}
            aria-label="Close"
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={activeImage.image_url}
              alt={activeImage.caption || "Innville Foundation gallery photo"}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
            {(activeImage.category || activeImage.caption) && (
              <div className="mt-4 text-center">
                {activeImage.category && (
                  <p className="text-red-400 text-xs font-semibold uppercase tracking-widest mb-1">
                    {activeImage.category}
                  </p>
                )}
                {activeImage.caption && (
                  <p className="text-white/80 text-sm">{activeImage.caption}</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}