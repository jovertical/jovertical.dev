export default function ExternalLink({ children, ...props }) {
  return (
    <a {...props} target="_blank" target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}
