import { useRouter } from 'next/router';
import Link from '@/components/Link';

export default function HeaderLink({ href, children }) {
    let router = useRouter();

    return (
        <Link
            href={href}
            className={cx('font-normal text-base transition duration-150', {
                'text-accent dark:text-accent-dark': router.asPath === href,
                'text-secondary dark:text-secondary-dark hover:text-accent dark:hover:text-accent-dark':
                    router.asPath !== href,
            })}
        >
            {children}
        </Link>
    );
}
