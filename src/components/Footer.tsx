import * as React from "react";
import "../styles/footer.scss"
import GitHubButton from 'react-github-btn'

interface FooterProps {

}

export const Footer: React.FunctionComponent<FooterProps> = (props) => {
  return <div className="footer">
    <span>
      <b>NFT Card Component</b> by AtomicScience
    </span>

    <GitHubButton data-size="large" href="https://github.com/AtomicScience-FrontendMentor/01-NftCard">Repo</GitHubButton>
  </div>;
};