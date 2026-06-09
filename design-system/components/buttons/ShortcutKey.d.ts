/**
 * ShortcutKeyProps — keyboard shortcut keycaps.
 */
export interface ShortcutKeyProps {
  /** e.g. "mod+k", "mod+shift+d". `mod` → ⌘ on Apple, Ctrl elsewhere. */
  shortcut: string
  /** Render Apple symbols (⌘⇧⌥). Default true. */
  apple?: boolean
  /** Faint, borderless inline style (used inside the search field). */
  ghost?: boolean
  style?: React.CSSProperties
}
