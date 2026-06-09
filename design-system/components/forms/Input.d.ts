import React from 'react'

/**
 * SearchFieldProps — the text input primitive.
 *
 * @startingPoint section="Forms" subtitle="Quiet white field, indigo focus ring" viewport="700x120"
 */
export interface InputProps {
  value?: string
  defaultValue?: string
  placeholder?: string
  type?: string
  disabled?: boolean
  /** Optional icon shown before the text (~14px). */
  leadingIcon?: React.ReactNode
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  style?: React.CSSProperties
}
