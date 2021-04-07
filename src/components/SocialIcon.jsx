import Icon from '@/components/Icon';

export default function SocialIcon({ children }) {
    return (
        <Icon
            className="text-gray dark:text-gray-lighter hover:text-blue dark:hover:text-turquoise transition duration-100"
            size="large"
            variant="filled"
        >
            {children}
        </Icon>
    );
}
