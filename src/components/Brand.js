import React from 'react'
import { Link } from 'gatsby'

export default function Brand() {
  return (
    <Link className="brand" to="/" aria-label="Southlink Travels home">
      <img src="/images/southlink-logo.jpg" width="52" height="52" alt="" />
      <span>
        <strong>
          Southlink<span className="brand-dot">.</span>
        </strong>
        <small>TRAVELS · GALLE, SRI LANKA</small>
      </span>
    </Link>
  )
}
