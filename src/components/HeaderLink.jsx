import { useRouter } from 'next/router';
import Link from '@/components/Link';

export default function HeaderLink({ href, children }) {
    let router = useRouter();

    return (
        <Link
            href={href}
            className={cx('font-normal text-base transition duration-150', {
                'text-blue dark:text-turquoise': router.asPath === href,
                'text-gray dark:text-gray-lighter hover:text-blue dark:hover:text-turquoise':
                    router.asPath !== href,
            })}
        >
            {children}
        </Link>
    );
}
