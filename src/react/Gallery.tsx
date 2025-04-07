import { useEffect, useMemo, useState } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import { CATEGORIES, GALLERY, GALLERY_ALL } from '@/consts/gallery';


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

    const [currentCategory, setCurrentCategory] = useState<string>('Todas')

    const filterCategory = useMemo(() => {
        if (currentCategory === 'Todas') return GALLERY_ALL

        return GALLERY[currentCategory] ?? GALLERY_ALL

    }, [currentCategory])

    const onChangeCategory = (category: string) => () => {
        setCurrentCategory(category)
    }

    return (
        <section className='w-full relative'>
            <div className='flex flex-wrap gap-4 bg-white/80 justify-center py-8 sticky top-0 z-10 backdrop-blur-lg'>
                {CATEGORIES.map((category: string) => (
                    <button 
                    key={category}
                    className={`border font-montserrat text-sm rounded-full border-primary-900 px-4 py-1 text-primary-900 hover:bg-primary-900 hover:text-white transition-colors duration-200 ${currentCategory === category ? 'bg-primary-900 text-white' : ''}`}
                    onClick={onChangeCategory(category)}>
                        {category}
                    </button>
                ))}
            </div>
            <div className="pswp-gallery grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" id='mg-gallery'>
                {filterCategory.map(({ height, width, src }: any) => (
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
        </section>
    );
}
