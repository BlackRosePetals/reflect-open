import React from 'react'

/**
 * MenuItemProps — sidebar / dropdown navigation row.
 *
 * @startingPoint section="Navigation" subtitle="Sidebar nav row with icon, label, shortcut" viewport="700x180"
 */
export interface MenuItemProps {
  /** Leading icon (~16px line icon). */
  icon?: React.ReactNode
  /** Selected (painted) state. */
  selected?: boolean
  /** Shortcut element shown on hover (e.g. a <ShortcutKey/>). */
  shortcut?: React.ReactNode
  onClick?: () => void
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}
