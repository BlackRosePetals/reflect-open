/**
 * BadgeProps — small pill for tags, counts, status.
 */
export interface BadgeProps {
  /** `tag` prefixes a #; others carry status color. Default `neutral`. */
  variant?: 'neutral' | 'accent' | 'success' | 'warning' | 'tag'
  children?: React.ReactNode
  style?: React.CSSProperties
}
