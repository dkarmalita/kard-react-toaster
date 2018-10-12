import React from 'react'

export const Toast = ({ children, type }) => (
  <div className={type}>
    { children }
  </div>
)
