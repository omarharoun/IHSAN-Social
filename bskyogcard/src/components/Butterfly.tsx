import React from 'react'

export function Butterfly(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 200 50"
      {...props}>
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="currentColor"
        fontSize="32"
        fontWeight="900"
        letterSpacing="2">
        IHSAN
      </text>
    </svg>
  )
}
