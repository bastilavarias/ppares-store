import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { toPrice } from '@/lib/utils';

export default function ProductPreviewCard() {
    return (
        <div className="space-y-3">
            <Card className="group border-0 shadow-none transition ease-in-out delay-150 hover:bg-primary">
                <CardContent className="pt-6">
                    <div className="aspect-w-1 aspect-h-1 mb-4 flex justify-center">
                        <Link href="/product/test">
                            <Image
                                src="/assets/images/tshirt-back-view.png"
                                alt="Tshirt back view"
                                width={1920}
                                height={1080}
                                className="w-auto h-56"
                                style={{
                                    filter: 'drop-shadow(0 0 0.75rem rgba(255, 255, 255, 0.7))',
                                }}
                            />
                        </Link>
                    </div>
                </CardContent>
            </Card>
            <div>
                <Link href="/product/test">
                    <p className="text-sm font-semibold">PHP Mesiah</p>
                </Link>
                <h3 className="text-md font-semibold"> {toPrice(325)}</h3>
            </div>
        </div>
    );
}
