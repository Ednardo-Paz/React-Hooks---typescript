import './SectionTitle.css'
import React from 'react'

type Props = {
    title?: string
}

const SectionTitle = ({ title }: Props) => (
    <div className="SectionTitle">
        <h3>{title}</h3>
    </div>
)

export default SectionTitle