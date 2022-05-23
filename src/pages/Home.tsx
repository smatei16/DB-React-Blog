import React, { Component } from 'react'
import Article from '../components/Article';

type Props = {}

type State = {
  articles: Articlee[];
}

type Articlee = {
  id: number;
  title: string;
  tag: string;
  author: string;
  date: string;
  img: string;
  content: string;
}

class Home extends Component<Props, State> {
  state = {
    articles: []
  }

  async componentDidMount() {
    const response = await fetch(`http://localhost:3000/articles`);
    const json = await response.json();
    console.log(json);
    this.setState({ articles: json });
  }

  render() {
    const {articles} = this.state;
    const articleList = articles.map((article : Articlee) =>
     (<Article
       id={article.id} 
       title={article.title}
       tag={article.tag}
       author={article.author}
       date={article.date}
       img={article.img}
       content={article.content}
       />));
    return (
      <div>{articleList}</div>
    )
  }
}

export default Home