import React from 'react'

export default function FormPgh({ pgh='' , formNav='' }) {
  return <>
    <p className="text-muted fw-bolder mt-3">{pgh}
      <a href="#" className="text-decoration-none text-primary">  {formNav}</a>
    </p>
  </>
}
