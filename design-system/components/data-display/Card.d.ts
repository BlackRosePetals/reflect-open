import React from 'react'

/**
 * CardProps — a quiet surface container.
 *
 * @startingPoint section="Surfaces" subtitle="Flat hairline card / elevated panel" viewport="700x200"
 */
export interface CardProps {
  /** Float it: larger radius + soft shadow (popovers, dialogs). */
  elevated?: boolean
  /** Inner padding in px. Default 16. */
  padding?: number
  onClick?: () => void
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}
