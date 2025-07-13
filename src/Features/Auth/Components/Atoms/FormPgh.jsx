import React from 'react'
import { Link } from 'react-router-dom'

export default function FormPgh({ pgh='' , formNav='' ,to='' }) {
  return <>
    <p className="text-muted fw-bolder mt-3">{pgh}
      <Link to={to} className="text-decoration-none text-primary">  {formNav}</Link>
    </p>
  </>
}
