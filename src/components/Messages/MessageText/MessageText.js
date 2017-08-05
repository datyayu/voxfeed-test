import React, { Component } from "react";
import PropTypes from "prop-types";
import "./MessageText.css";

export class MessageText extends Component {
  static propTypes = {
    content: PropTypes.string.isRequired
  };

  /**
   * Check if a word is a hashtag.
   *
   * @param {String} word Word to evaluate.
   * @returns {Boolean} Wheter the words stars with # or not.
   */
  isHashtag(word) {
    return /^#.+/i.test(word);
  }

  /**
   * Check if a word is an url.
   *
   * @param {String} url
   * @returns {Boolean} Wheter the word is an url or not
   */
  isUrl(url) {
    // Too many edge cases, this regex just works ¯\_(ツ)_/¯
    // Source: https://gist.github.com/dperini/729294
    const validationRegex = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;

    return validationRegex.test(url);
  }

  /**
   * Create a template with react components based on
   * the given text.
   *
   * @param {String} content Text to parse.
   * @returns {Component} Template generated.
   */
  parseContent(content) {
    const words = content.split(" ");

    const components = words.map((word, index) => {
      // Parse hashtags
      if (this.isHashtag(word)) {
        const url = `https://twitter.com/hashtag/${word.slice(1)}`;
        return (
          <span key={index}>
            <a href={url} target="_blank" className="message-text__link">
              {word}
            </a>{" "}
          </span>
        );
      }

      // Parse urls
      const wordAsUrl = word.replace(/(^https?):\/\/|^/i, "http://");
      if (this.isUrl(wordAsUrl)) {
        return (
          <span key={index}>
            <a href={wordAsUrl} target="_blank" className="message-text__link">
              {word}
            </a>{" "}
          </span>
        );
      }

      // Parse normal text
      return (
        <span key={index}>
          {word}{" "}
        </span>
      );
    });

    return components;
  }

  /**
   * Render
   */
  render() {
    const { content } = this.props;
    const parsedContent = this.parseContent(content);

    return (
      <div className="message-text">
        {parsedContent}
      </div>
    );
  }
}
