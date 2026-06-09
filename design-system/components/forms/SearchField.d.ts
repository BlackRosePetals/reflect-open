/**
 * SearchFieldProps — the "Search anything…" sidebar trigger.
 *
 * @startingPoint section="Forms" subtitle="⌘K search trigger from the sidebar" viewport="700x90"
 */
export interface SearchFieldProps {
  placeholder?: string
  /** Shortcut shown as a ghost keycap. Default "mod+k". */
  shortcut?: string
  onClick?: () => void
  className?: string
  style?: React.CSSProperties
}
