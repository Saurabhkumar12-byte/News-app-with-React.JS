import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import propTypes from "prop-types";

export class News extends Component {
  articles = [];
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
};
  static propTypes = {
    country: propTypes.string,
    pageSize: propTypes.number,
    category: propTypes.string,
  };
 
  constructor(props) {
    super(props);

    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
    let title = `${this.props.category}`;
    document.title = title[0].toUpperCase() + title.slice(1) + " - NewsSpy";
  }
  // async componentDidMount() {
  //   let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=22a5022795d640a48d727ad3ce005fdf&page=1&pageSize=${this.props.pageSize}`;
  //   this.setState({ loading: true });
  //   let data = await fetch(url);
  //   let parseData = await data.json();
  //   console.log(parseData);

  //   this.setState({
  //     articles: parseData.articles,
  //     totalResults: parseData.totalResults,
  //     loading: false,
  //   });
  // }
  // handlePrevClick = async () => {
  //   let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
  //     this.props.category
  //   }&apiKey=22a5022795d640a48d727ad3ce005fdf&page=${
  //     this.state.page - 1
  //   }&pageSize=${this.props.pageSize}`;
  //   this.setState({ loading: true });
  //   let data = await fetch(url);
  //   let parseData = await data.json();

  //   this.setState({
  //     page: this.state.page - 1,
  //     articles: parseData.articles,
  //     loading: false,
  //   });
  // };
  // handleNextClick = async () => {
  //   if (
  //     !(
  //       this.state.page + 1 >
  //       Math.ceil(this.state.totalResults / this.props.pageSize)
  //     )
  //   ) {
  //     let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
  //       this.props.category
  //     }&apiKey=22a5022795d640a48d727ad3ce005fdf&page=${
  //       this.state.page + 1
  //     }&pageSize=${this.props.pageSize}`;
  //     this.setState({ loading: true });
  //     let data = await fetch(url);
  //     let parseData = await data.json();

  //     this.setState({
  //       page: this.state.page + 1,
  //       articles: parseData.articles,
  //       loading: false,
  //     });
  //   }
  // };

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=22a5022795d640a48d727ad3ce005fdf&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);

    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.updateNews();
  }

  handlePrevClick = async () => {
    this.setState({
      page: this.state.page - 1,
    });
    this.updateNews();
  };

  handleNextClick = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    this.updateNews();
  };
  
  
  render() {
    return (
      <div className="container mt-0 mb-4 p-0">
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((e) => {
              return (
                <div
                  className="col-lg-6 col-sm-6  col-xl-4 col-md-6 row-no-padding padd "
                  key={e.url}
                >
                  <NewsItem
                    title={e.title ? e.title : ""}
                    imageUrl={e.urlToImage}
                    description={e.description ? e.description : ""}
                    newsUrl={e.url}
                    source={e.source.name}
                    author={e.author}
                    date={e.publishedAt}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between px-lg-5 mx-lg-3">
          <button
            className="btn btn-dark"
            disabled={this.state.page <= 1}
            onClick={this.handlePrevClick}
          >
            &laquo; Previous
          </button>
          <button
            className="btn btn-dark"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            onClick={this.handleNextClick}
          >
            Next &raquo;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
