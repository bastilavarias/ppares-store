import Header from '@/components/header';
import FeaturedProductBanner from '@/components/featured-product-banner';

export default function Home() {
    return (
        <div>
            <Header />
            <main className="container mx-auto container mx-auto px-4 py-12">
                <FeaturedProductBanner />
            </main>
        </div>
    );
}
