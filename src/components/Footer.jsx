import ExternalLink from '@/components/ExternalLink';
import FooterLink from '@/components/FooterLink';
import SocialIcon from '@/components/SocialIcon';

export default function Footer() {
    return (
        <footer className="absolute bottom-0 w-full h-56 text-gray-lighter overflow-hidden bg-gray-lightest dark:bg-gray-darkest">
            <div className="container h-full md:max-w-screen-md lg:max-w-screen-xl m-auto px-5 md:px-24 lg:px-32 pb-12 pt-24">
                <div className="container flex-col justify-between md:space-y-8">
                    <nav className="hidden lg:flex flex-row items-center space-x-6 justify-center md:justify-end text-sm">
                        <FooterLink href="/">Home</FooterLink>
                        <FooterLink href="/blog">Writings</FooterLink>
                        <FooterLink href="/projects">Creations</FooterLink>
                    </nav>

                    <div className="flex flex-col-reverse md:flex-row md:justify-between space-y-reverse space-y-8 md:space-y-0">
                        <span
                            className="text-xs tracking-wider self-center md:self-end text-gray dark:text-gray-lighter"
                            aria-label="Copyright"
                        >
                            © {new Date().getFullYear()} Jovert. All Rights
                            Reserved.
                        </span>

                        <div className="flex flex-row items-center space-x-4 justify-center md:justify-end">
                            <a
                                href="mailto:jovertical@gmail.com"
                                aria-label="Email jovertical@gmail.com"
                                title="Email"
                            >
                                <SocialIcon>
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </SocialIcon>
                            </a>

                            <ExternalLink
                                href="https://github.com/jovertical"
                                aria-label="Visit Github profile"
                                title="Visit Github profile"
                            >
                                <SocialIcon>
                                    <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" />
                                </SocialIcon>
                            </ExternalLink>

                            <ExternalLink
                                href="https://www.linkedin.com/in/jovert-palonpon-958761185/"
                                aria-label="Visit Linkedin profile"
                                title="Visit Linkedin profile"
                            >
                                <SocialIcon>
                                    <path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z" />
                                </SocialIcon>
                            </ExternalLink>

                            <ExternalLink
                                href="https://twitter.com/Jovertical"
                                aria-label="Visit Twitter profile"
                                title="Visit Twitter profile"
                            >
                                <SocialIcon>
                                    <path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z" />
                                </SocialIcon>
                            </ExternalLink>

                            <ExternalLink
                                href="/rss.xml"
                                aria-label="Subscribe to RSS feed"
                                title="Subscribe to RSS feed"
                            >
                                <SocialIcon>
                                    <path d="M2.88,16.88a3,3,0,0,0,0,4.24,3,3,0,0,0,4.24,0,3,3,0,0,0-4.24-4.24Zm2.83,2.83a1,1,0,0,1-1.42-1.42,1,1,0,0,1,1.42,0A1,1,0,0,1,5.71,19.71ZM5,12a1,1,0,0,0,0,2,5,5,0,0,1,5,5,1,1,0,0,0,2,0,7,7,0,0,0-7-7ZM5,8a1,1,0,0,0,0,2,9,9,0,0,1,9,9,1,1,0,0,0,2,0,11.08,11.08,0,0,0-3.22-7.78A11.08,11.08,0,0,0,5,8Zm10.61.39A15.11,15.11,0,0,0,5,4,1,1,0,0,0,5,6,13,13,0,0,1,18,19a1,1,0,0,0,2,0A15.11,15.11,0,0,0,15.61,8.39Z" />
                                </SocialIcon>
                            </ExternalLink>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
