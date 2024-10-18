'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Moon, Sun, ShoppingCart, User, Heart } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function Header() {
    const [darkMode, setDarkMode] = useState(false);
    const { setTheme, theme } = useTheme();

    const toggleDarkMode = () => {
        if (theme === 'light') {
            setTheme('dark');
            setDarkMode(true);
        } else {
            setTheme('light');
            setDarkMode(false);
        }
    };

    return (
        <header>
            <div className="container mx-auto p-4">
                <div className="flex items-center justify-between mb-4">
                    {/*<h1 className="text-2xl font-black"></h1>*/}
                    <div></div>
                    <div className="flex items-center space-x-4">
                        <Button size="icon" variant="ghost">
                            <User className="h-5 w-5" />
                        </Button>
                        <Button size="icon" variant="ghost">
                            <Heart className="h-5 w-5" />
                        </Button>
                        <Button size="icon" variant="ghost">
                            <ShoppingCart className="h-5 w-5" />
                        </Button>
                        <Switch
                            checked={darkMode}
                            onCheckedChange={toggleDarkMode}
                            className="ml-4"
                            aria-label="Toggle dark mode"
                        />
                        {darkMode ? (
                            <Moon className="h-5 w-5" />
                        ) : (
                            <Sun className="h-5 w-5" />
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}
