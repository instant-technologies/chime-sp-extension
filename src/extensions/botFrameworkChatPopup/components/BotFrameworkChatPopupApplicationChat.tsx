import * as React from "react";

import webClientUrl from "../../../index"

export default class BotFrameworkChatPopupApplicationChat extends React.Component {
  private handleClick = () => {
    if (document.getElementById("chime-webclient").style.display === "none") {
      document.getElementById("chime-webclient").style.display = "block";
      document.getElementById("chime-webclient-x-btn").style.display = "block";
    } else {
      document.getElementById("chime-webclient").style.display = "none";
      document.getElementById("chime-webclient-x-btn").style.display = "none";
    }
  };

  public render() {
    return (
      <div>
        <button
          id="chime-webclient-x-btn"
          onClick={this.handleClick}
          style={{
            position: "fixed",
            bottom: 520,
            right: 28,
            border: "none",
            color: "gray",
            cursor: "pointer",
            display: "none"
          }}
        >
          &#10006;
        </button>
        <iframe
          id="chime-webclient"
          src={webClientUrl}
          height="500px"
          width="360px"
          style={{
            background: "white",
            position: "fixed",
            display: "none",
            border: "none",
            boxShadow:
              "rgba(0, 0, 0, 0.4) 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 2px 6px",
            bottom: 14,
            right: 28,
            zIndex: 10
          }}
        />
        <button
          onClick={this.handleClick}
          style={{
            position: "fixed",
            cursor: "pointer",
            width: 50,
            height: 50,
            bottom: 14,
            right: 28,
            padding: 5,
            border: "none",
            backgroundImage:
              "url('http://www.instant-tech.com/images/chime_square.png')",
            backgroundPosition: "center",
            backgroundSize: "contain"
          }}
        ></button>
      </div>
    );
  }
}
