'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

const filters = [
    {
        href: '/browse?filter_by=all',
        title: 'all',
    },
    {
        href: '/browse?filter=shirts',
        title: '[👕] shirts',
    },
    {
        href: '/browse?filter=mugs',
        title: '[☕] mugs',
    },
    {
        href: '/browse?filter=coaster',
        title: '[🧫] coasters',
    },
];

const sorts = [
    {
        href: '/browse?sort=new',
        title: 'bagong labas 💅',
    },
    {
        href: '/browse?sort=cheapest',
        title: 'mura lang tols 🙏',
    },
    {
        href: '/browse?sort=cheapest',
        title: 'yung mahal na 😈',
    },
];

export default function BrowseNav() {
    const pathname = usePathname();

    return (
        <nav className="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1 lg:space-y-6">
            <div className="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
                <p className="justify-start text-md">Filter:</p>
                {filters.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                            buttonVariants({ variant: 'ghost' }),
                            pathname === item.href
                                ? 'bg-muted hover:bg-muted'
                                : 'hover:bg-transparent hover:underline',
                            'justify-start text-md'
                        )}
                    >
                        {item.title}
                    </Link>
                ))}
            </div>
            <div className="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
                <p className="justify-start text-md">Sort:</p>
                {sorts.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                            buttonVariants({ variant: 'ghost' }),
                            pathname === item.href
                                ? 'bg-muted hover:bg-muted'
                                : 'hover:bg-transparent hover:underline',
                            'justify-start text-md'
                        )}
                    >
                        {item.title}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
