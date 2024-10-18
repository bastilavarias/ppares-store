import ProductPreviewCard from '@/components/product-preview-card';
import Link from 'next/link';

export default function FeaturedProductBanner() {
    return (
        <section className="space-y-20">
            <div>
                <h1 className="text-6xl font-bold mb-1">PPARES Store</h1>
                <p className="text-lg">
                    Welcome sa Programming Pares Community Store! Kapag gumastos
                    ka dito mabibigyan mo kame ng pang boost sa
                    <span className="underline"> discord server</span>. Kaya
                    sige na ohhhhhhhhhhhhh, bumili kana 🙏🙏
                </p>
            </div>
            <div className="space-y-8">
                <h3 className="text-2xl font-bold mb-1">goodshits</h3>
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <ProductPreviewCard key={item} />
                    ))}
                </section>
                <div className="flex justify-center">
                    <Link
                        href="#"
                        className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-200 hover:text-black transition-colors"
                    >
                        Browse for shirts
                    </Link>
                </div>
            </div>

            <div className="space-y-8">
                <h3 className="text-2xl font-bold mb-1">other goodz</h3>
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                        <ProductPreviewCard key={item} />
                    ))}
                </section>
                <div className="flex justify-center">
                    <Link
                        href="#"
                        className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-200 hover:text-black transition-colors"
                    >
                        View All
                    </Link>
                </div>
            </div>
        </section>
    );
}
