/**
 * CheckboxProps — task / to-do checkbox.
 */
export interface CheckboxProps {
  checked?: boolean
  disabled?: boolean
  /** Optional label; struck through + muted when checked. */
  label?: string
  onChange?: (checked: boolean) => void
  style?: React.CSSProperties
}
