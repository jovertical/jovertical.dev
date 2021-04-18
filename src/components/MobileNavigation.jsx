import * as React from 'react';
import Link from '@/components/Link';
import ThemeFlipper from '@/components/ThemeFlipper';

export default function MobileNavigation() {
    let [open, setOpen] = React.useState(false);

    return (
        <div>
            <button
                className="md:hidden fixed right-0 px-5 py-12 z-50 focus:outline-none"
                onClick={() => setOpen(!open)}
            >
                <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    {open ? (
                        <path
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            fillRule="evenodd"
                            clipRule="evenodd"
                        />
                    ) : (
                        <path
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                            fillRule="evenodd"
                            clipRule="evenodd"
                        />
                    )}
                </svg>
            </button>

            <div
                className={cx('relative z-10', { hidden: !open, block: open })}
            >
                <div className="w-full h-screen fixed bg-white dark:bg-gray-darker opacity-90">
                    <nav className="right-0 h-screen mt-auto py-48 px-6 fixed flex flex-col items-end font-medium text-gray-dark dark:text-gray-lightest tracking-widest">
                        <div className="flex-grow">
                            <Link href="/">HOME</Link>
                        </div>

                        <div className="flex-grow">
                            <Link href="/blog">WRITINGS</Link>
                        </div>

                        <div className="flex-grow">
                            <Link href="/projects">CREATIONS</Link>
                        </div>

                        <ThemeFlipper />
                    </nav>
                </div>
            </div>
        </div>
    );
}
