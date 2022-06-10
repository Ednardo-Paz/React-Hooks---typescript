import './PageTitle.css'
import React from 'react'

type Props = {
    error?: string
    title?: string
    subtitle?: string
}

const PageTitle = ({ error, title, subtitle }: Props) => (
    <div className={`PageTitle ${error ? "error" : ""}`}>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
    </div>
)

export default PageTitle