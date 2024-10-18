import BrowseNav from '@/components/browse-nav';
import ProductPreviewCard from '@/components/product-preview-card';

export default function Browse() {
    return (
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0 pb-16">
            <aside className="-mx-4 lg:w-1/5">
                <BrowseNav />
            </aside>
            <div className="flex-1 lg:max-w-2xl space-y-8">
                <h3 className="text-2xl font-bold">all</h3>
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                        <ProductPreviewCard key={item} />
                    ))}
                </section>
            </div>
        </div>
    );
}
