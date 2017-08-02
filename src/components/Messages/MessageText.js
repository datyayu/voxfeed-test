import React, { Component } from "react";
import * as Colors from "../../config/colors";

export class MessageText extends Component {
  isHashtag(word) {
    return /^#.+/i.test(word);
  }

  isUrl(url) {
    // Too many edge cases, this regex just works ¯\_(ツ)_/¯
    // Source: https://gist.github.com/dperini/729294
    const validationRegex = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;

    return validationRegex.test(url);
  }

  parseContent(content) {
    const words: Array<string> = content.split(" ");

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

  render() {
    const { content } = this.props;
    const parsedContent = this.parseContent(content);

    return (
      <div className="message-text">
        {parsedContent}

        <style jsx global>{`
          .message-text {
            word-break: break-word;
          }
          .message-text__link {
            color: ${Colors.MAIN_COLOR};
            text-decoration: none;
          }

          .message-text__link:hover {
            text-decoration: underline;
          }
        `}</style>
      </div>
    );
  }
}
