import React from 'react'

type Props = {
    id: number;
    title: string;
    tag: string;
    author: string;
    date: string;
    img: string;
    content: string;
}

export default function Article({id, title, tag, author, date, img, content}: Props) {
  return (
    <article className="article">
            <div className="article-title-container">
                <h1 className="article-title">{title}</h1>
            </div>
            <ul className="article-about">
                <li className="article-about-item">{tag}</li>
                <li className="article-about-item">Added by <span className="article-author">{author}</span></li>
                <li className="article-about-item">{date}</li>
            </ul>
            <ul className="edit-delete-container">
                <li className="edit-delete-item"><button className="edit-delete-button edit-button">Edit</button></li>
                <li className="edit-delete-item">|</li>
                <li className="edit-delete-item"><button className="edit-delete-button edit-delete-last delete-button">Delete</button></li>
            </ul>
            <img className="article-image" src={img} alt="Bike"/>
            <div className="article-text-container">
                <p className="article-text">{content}</p>
            </div>
        </article>
  )
}