import { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import { GALLERY_ALL } from '@/consts/gallery';
import Masonry from 'react-masonry-css'

export default function Gallery() {
    useEffect(() => {
        let lightbox: PhotoSwipeLightbox | null = new PhotoSwipeLightbox({
            gallery: '#mg-gallery',
            children: 'a',
            pswpModule: () => import('photoswipe'),
        });
        lightbox.init();

        return () => {
            lightbox?.destroy();
            lightbox = null;
        };
    }, []);

    return (
        <div className="pswp-gallery" id='mg-gallery'>
            {GALLERY_ALL.map(({ height, width, src, }) => (
                <a
                    href={src}
                    data-pswp-width={width}
                    data-pswp-height={height}
                    key={src}
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={src} alt="" />
                </a>
            ))}
        </div>
    );
}
