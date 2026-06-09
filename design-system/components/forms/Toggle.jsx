import React from 'react'

/**
 * Toggle — a small switch used in Preferences (e.g. spell-check, dark mode).
 * Indigo when on; slides with a calm 150ms transition (no bounce).
 */
export function Toggle({ checked = false, disabled = false, onChange, style = {} }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => !disabled && onChange && onChange(!checked)}
      style={{
        width: 36,
        height: 20,
        flex: 'none',
        padding: 2,
        borderRadius: 'var(--radius-full)',
        border: 'none',
        background: checked ? 'var(--accent)' : 'var(--coolgray-300)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1,
        transition: 'background var(--duration-base) var(--ease-in-out)',
        display: 'inline-flex',
        ...style,
      }}
    >
      <span
        style={{
          width: 16,
          height: 16,
          borderRadius: 'var(--radius-full)',
          background: '#fff',
          boxShadow: 'var(--shadow-sm)',
          transform: checked ? 'translateX(16px)' : 'translateX(0)',
          transition: 'transform var(--duration-base) var(--ease-in-out)',
        }}
      />
    </button>
  )
}
