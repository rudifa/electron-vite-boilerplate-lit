import { css } from 'lit'
export const styleSheet = css`
  * {
    padding: 0;
    margin: 0;
  }
  ul {
    list-style: none;
  }
  code {
    font-weight: 600;
    padding: 3px 5px;
    border-radius: 2px;
    background-color: #26282e;
    font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
    font-size: 85%;
  }
  a {
    color: #9feaf9;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
    outline: none;
  }
  a:hover {
    border-bottom: 1px solid;
  }
  #app {
    flex: 1;
    display: flex;
    flex-direction: column;
    max-width: 840px;
    margin: 0 auto;
    padding: 15px 30px 0 30px;
  }
  .versions {
    margin: 0 auto;
    float: none;
    clear: both;
    overflow: hidden;
    font-family: 'Menlo', 'Lucida Console', monospace;
    color: #c2f5ff;
    line-height: 1;
    transition: all 0.3s;
    padding: 10px;
    display: table;
  }
  .versions li {
    display: block;
    float: left;
    border-right: 1px solid rgba(194, 245, 255, 0.4);
    padding: 0 20px;
    font-size: 13px;
    opacity: 0.8;
  }
  .versions li:last-child {
    border: none;
  }
  .hero-logo {
    margin-top: -0.4rem;
    transition: all 0.3s;
  }
  @media (max-width: 840px) {
    .versions {
      display: none;
    }
    .hero-logo {
      margin-top: -1.5rem;
    }
  }
  .hero-text {
    font-weight: 400;
    color: #c2f5ff;
    text-align: center;
    margin-top: -0.5rem;
    margin-bottom: 10px;
  }
  @media (max-width: 660px) {
    .hero-logo {
      display: none;
    }
    .hero-text {
      margin-top: 20px;
    }
  }
  .hero-tagline {
    text-align: center;
    margin-bottom: 14px;
  }
  .links {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
    font-size: 18px;
    font-weight: 500;
  }
  .links a {
    font-weight: 500;
  }
  .links .link-item {
    padding: 0 4px;
  }
  .features {
    display: flex;
    flex-wrap: wrap;
    margin: -6px;
  }
  .features .feature-item {
    width: 33.33%;
    box-sizing: border-box;
    padding: 6px;
  }
  .features article {
    background-color: rgba(194, 245, 255, 0.1);
    border-radius: 8px;
    box-sizing: border-box;
    padding: 12px;
    height: 100%;
  }
  .features span {
    color: #d4e8ef;
    word-break: break-all;
  }
  .features .title {
    font-size: 17px;
    font-weight: 500;
    color: #c2f5ff;
    line-height: 22px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .features .detail {
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    margin-top: 6px;
  }
  @media (max-width: 660px) {
    .features .feature-item {
      width: 50%;
    }
  }
  @media (max-width: 480px) {
    .links {
      flex-direction: column;
      line-height: 32px;
    }
    .links .link-dot {
      display: none;
    }
    .features .feature-item {
      width: 100%;
    }
  }
  .lit-lite,
  .lit-dark:hover {
    color: #07e8fe;
  }
  .lit-dark {
    color: #3246ff;
  }
`
