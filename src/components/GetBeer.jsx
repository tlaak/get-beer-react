import React, { Component } from "react";

class GetBeer extends Component {
  render() {
    return (
      <div className="get-beer">
        <button
          type="button"
          onClick={this.props.getBeer}
          className="get-beer__button"
        >
          Show me the beers!
        </button>
        {this.props.isLoading && (
          <div className="get-beer__spinner">
            <p>Fetching beer... be patient!</p>
          </div>
        )}
        <div className="get-beer__beers">
          <ol className="get-beer__beers-list">
            {this.props.beers.map(beer => {
              <li className="get-beer__beers-list-item">
                <div className="get-beer__beers-list-item--beer-name">
                  {beer.name}
                </div>
                <div className="get-beer__beers-list-item--beer-tagline">
                  {beer.tagline}
                </div>
              </li>;
            })}
          </ol>
        </div>
      </div>
    );
  }
}

export default GetBeer;
