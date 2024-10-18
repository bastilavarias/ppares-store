import Link from 'next/link';
import Image from 'next/image';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { toPrice } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export default function ProductPreviewCard() {
    return (
        <div className="space-y-3">
            <Card className="group border-0 shadow-none transition ease-in-out delay-150 hover:bg-primary">
                <CardContent className="pt-6">
                    <div className="aspect-w-1 aspect-h-1 mb-4 flex justify-center">
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
                    </div>
                </CardContent>
            </Card>
            <div>
                <p className="text-sm font-semibold">PHP Mesiah</p>
                <h3 className="text-md font-semibold"> {toPrice(325)}</h3>
            </div>
        </div>
    );
}
