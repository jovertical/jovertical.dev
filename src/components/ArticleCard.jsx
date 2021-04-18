import dayjs from 'dayjs';
import Card from '@/components/Card';
import CardText from '@/components/CardText';
import Icon from '@/components/Icon';
import Link from '@/components/Link';
import ArrowRightIcon from '@/components/icons/ArrowRight';

export default function ArticleCard({
    title,
    body,
    slug,
    minuteRead,
    publishedAt,
    ...props
}) {
    return (
        <Card {...props}>
            <CardText
                variant="title"
                className="hover:text-blue dark:hover:text-turquoise"
            >
                <Link as={`/${slug}`} href="/[slug]">
                    {title}
                </Link>
            </CardText>

            <div className="mt-2 flex">
                {publishedAt && (
                    <CardText variant="subtitle">
                        {dayjs(publishedAt).format('MMMM D, YYYY')}
                    </CardText>
                )}

                {minuteRead && (
                    <CardText className="ml-1" variant="subtitle">
                        {` • ${minuteRead} minute read`}
                    </CardText>
                )}
            </div>

            <CardText
                className={cx({ 'mt-2': !publishedAt, 'mt-4': publishedAt })}
            >
                {body}
            </CardText>

            <div className="mt-6">
                <Link
                    className="inline-flex items-center hover:text-blue dark:hover:text-turquoise"
                    as={`/${slug}`}
                    href="/[slug]"
                >
                    <span>Read more</span>
                    <Icon className="ml-1" variant="outlined" size="small">
                        <ArrowRightIcon />
                    </Icon>
                </Link>
            </div>
        </Card>
    );
}
