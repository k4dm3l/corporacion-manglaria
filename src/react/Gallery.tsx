import { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import { GALLERY_ALL } from '@/consts/gallery';

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
        <div className="pswp-gallery grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" id='mg-gallery'>
            {GALLERY_ALL.map(({ height, width, src, }) => (
                <a
                    href={src}
                    data-pswp-width={width}
                    data-pswp-height={height}
                    key={src}
                    target="_blank"
                    rel="noreferrer"
                    className='w-full h-full aspect-square relative overflow-hidden group'
                >
                    <img src={src} alt="" className='w-full cursor-pointer h-full duration-200 object-cover aspect-square group-hover:scale-110 transition-all' />
                    <span className='w-full h-full absolute top-0 left-0 bg-primary-900/50 pointer-events-none group-hover:opacity-0 transition-opacity duration-200' />
                </a>
            ))}
        </div>
    );
}
