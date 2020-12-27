import dayjs from 'dayjs'
import Card from '@/components/Card'
import CardText from '@/components/CardText'
import Link from '@/components/Link'

export default function ArticleCard({
  title,
  body,
  slug,
  publishedAt,
  ...props
}) {
  return (
    <Card className="mt-2 md:mt-4" {...props}>
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
    </Card>
  )
}
