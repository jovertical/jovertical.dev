import { useRouter } from 'next/router';
import Link from '@/components/Link';

export default function HeaderLink({ href, children }) {
    let router = useRouter();
    let active = router.asPath.split('?').first() === href;

    return (
        <Link
            href={href}
            className={cx('font-normal text-base transition duration-150', {
                'text-blue dark:text-turquoise': active,
                'text-gray dark:text-gray-lighter hover:text-blue dark:hover:text-turquoise': !active,
            })}
        >
            {children}
        </Link>
    );
}
