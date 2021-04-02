import Link from '@/components/Link';

export default function FooterLink({ href, children }) {
    return (
        <Link
            href={href}
            className="font-normal text-base hover:text-blue dark:hover:text-green text-gray dark:text-gray-lighter transition duration-150"
        >
            {children}
        </Link>
    );
}
