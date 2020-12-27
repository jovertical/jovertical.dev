import dayjs from 'dayjs'
import Card from '@/components/Card'
import CardText from '@/components/CardText'
import Icon from '@/components/Icon'
import Link from '@/components/Link'
import ArrowRightIcon from '@/components/icons/ArrowRight'

export default function ArticleCard({
  title,
  body,
  slug,
  publishedAt,
  ...props
}) {
  return (
    <Card {...props}>
      <CardText
        variant="title"
        className=" hover:text-accent dark:hover:text-accent-dark"
      >
        <Link as={`/articles/${slug}`} href="/articles/[slug]">
          {title}
        </Link>
      </CardText>

      {publishedAt && (
        <CardText className="mt-2" variant="subtitle">
          {dayjs(publishedAt).format('MMMM D, YYYY')}
        </CardText>
      )}

      <CardText className={cx({ 'mt-2': !publishedAt, 'mt-4': publishedAt })}>
        {body}
      </CardText>

      <div className="mt-6">
        <Link
          className="inline-flex items-center hover:text-accent dark:hover:text-accent-dark"
          as={`/articles/${slug}`}
          href="/articles/[slug]"
        >
          <span>Read more</span>

          <Icon className="ml-1" variant="outlined" size="small">
            <ArrowRightIcon />
          </Icon>
        </Link>
      </div>
    </Card>
  )
}
