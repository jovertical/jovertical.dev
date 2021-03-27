import { useRouter } from 'next/router'
import * as googleTag from '@/helpers/googleTag'

export default function useTracking() {
  let router = useRouter()

  React.useEffect(() => {
    let handleRouteChange = (url) => {
      googleTag.pageViewed(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return null
}
