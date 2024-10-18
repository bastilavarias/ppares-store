import FeaturedProductBanner from '@/components/featured-product-banner';
import ProductPreviewCard from '@/components/product-preview-card';
import Link from 'next/link';

export default function Home() {
    return (
        <div className="py-16 space-y-20">
            <FeaturedProductBanner />
            <div className="space-y-8">
                <h3 className="text-2xl font-bold">goodshits</h3>
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <ProductPreviewCard key={item} />
                    ))}
                </section>
                <div className="flex justify-center">
                    <Link
                        href="/browse?filter=all"
                        className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-200 hover:text-black transition-colors"
                    >
                        Browse for shirts
                    </Link>
                </div>
            </div>

            <div className="space-y-8">
                <h3 className="text-2xl font-bold ">other goodz</h3>
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                        <ProductPreviewCard key={item} />
                    ))}
                </section>
                <div className="flex justify-center">
                    <Link
                        href="/browse?filter=shirt"
                        className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-200 hover:text-black transition-colors"
                    >
                        View All
                    </Link>
                </div>
            </div>
        </div>
    );
}
