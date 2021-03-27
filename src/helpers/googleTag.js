// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export function pageViewed(url) {
  window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
    page_path: url,
  })
}
