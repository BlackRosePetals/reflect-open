import React from 'react'

/**
 * IconButtonProps — a square chromeless icon target.
 */
export interface IconButtonProps {
  /** Pixel size of the square. Default 28. */
  size?: number
  /** Painted (selected) state. */
  active?: boolean
  disabled?: boolean
  /** Accessible label + tooltip. */
  label?: string
  onClick?: () => void
  className?: string
  style?: React.CSSProperties
  /** The icon element (e.g. a Lucide icon at ~16px). */
  children?: React.ReactNode
}
