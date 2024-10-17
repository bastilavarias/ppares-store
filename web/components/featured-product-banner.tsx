import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import Link from 'next/link';
import Image from 'next/image';

export default function FeaturedProductBanner() {
    return (
        <section>
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    PPARES Store
                </h1>
                <p className="text-xl mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Iste, repellendus.
                </p>
                <Link
                    href="#"
                    className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
                >
                    Shop Now
                </Link>
            </div>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="group">
                        <div className="aspect-w-1 aspect-h-1 mb-4">
                            <Image
                                src="/assets/images/tshirt1.png"
                                alt="Tshirt 1"
                                width={1920}
                                height={1080}
                                className="w-full"
                            />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">
                            ACME Product {item}
                        </h3>
                        <p className="text-gray-400">$99.00 USD</p>
                    </div>
                ))}
            </section>{' '}
        </section>
    );
}
