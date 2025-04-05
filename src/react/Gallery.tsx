import { useEffect, useState } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import { GALLERY_ALL, GALLERY } from '@/consts/gallery';
import Masonry from 'react-masonry-css';

const categories = ["todas", ...Object.keys(GALLERY)];

const breakpointColumnsObj = {
  default: 3,
  1024: 2,
  640: 1,
};

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("todas");
  const images = activeCategory === "todas" ? GALLERY_ALL : GALLERY[activeCategory];

  useEffect(() => {
    let lightbox: PhotoSwipeLightbox | null = new PhotoSwipeLightbox({
      gallery: '.mg-gallery',
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });

    lightbox.init();

    return () => {
      lightbox?.destroy();
      lightbox = null;
    };
  }, [images]); // <- importante: volver a inicializar cuando cambien las imágenes

  return (
    <div className="px-4 py-8">
      {/* Chips */}
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1 rounded-full border text-sm font-medium transition-all ${
              activeCategory === cat
                ? "bg-black text-white border-black"
                : "bg-white text-black border-gray-300 hover:border-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry Grid + PhotoSwipe */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex w-auto mg-gallery"
        columnClassName="masonry-column"
      >
        {images.map((img) => (
          <a
            key={`${img.src}-${img.id}`}
            href={img.src}
            data-pswp-width={img.width}
            data-pswp-height={img.height}
            target="_blank"
            rel="noreferrer"
            className="block"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full"
              style={{
                aspectRatio: `${img.width} / ${img.height}`,
              }}
              loading="lazy"
            />
          </a>
        ))}
      </Masonry>
    </div>
  );
}
