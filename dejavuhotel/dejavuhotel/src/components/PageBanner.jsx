import React from 'react'
import { Link } from 'react-router-dom'
import './PageBanner.css'

export default function PageBanner({ title, subtitle, crumb, bgColor }) {
  return (
    <div className="page-banner" style={bgColor ? { background: bgColor } : {}}>
      <div className="page-banner-overlay"></div>
      <div className="container page-banner-content">
        <span className="page-banner-subtitle">{subtitle}</span>
        <h1 className="page-banner-title">{title}</h1>
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span className="breadcrumb-sep"><i className="fas fa-angle-right"></i></span>
          <span>{crumb || title}</span>
        </div>
      </div>
    </div>
  )
}
