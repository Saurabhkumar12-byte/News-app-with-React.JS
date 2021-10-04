import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, date, source, author } =
      this.props;

    return (
      <div className="my-3 mx-md-5 px-md-3">
        <div
          className="card "
          style={{ }}
        >
          <span
            className="position-absolute top-0  translate-middle badge rounded-pill bg-success"
            style={{ left: "90%" }}
          >
          {source}
          </span>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body ">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p>
              <small className="text-muted">
                Published by {author ? author : "unknown"}, on{" "}
                {new Date(date).toLocaleDateString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-warning btn-lg"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
