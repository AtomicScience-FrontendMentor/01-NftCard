import * as React from 'react';
import "../../styles/fonts.scss"
import "../../styles/nftCard.scss"
import NftImage from './NftImage';
import NftStatusBar from "./NftStatusBar";
import image from "../../icons/image-avatar.png";

interface NftCardProps {
    
}
 
const NftCard: React.FunctionComponent<NftCardProps> = () => {
    return <div className='nft-card'> 
        <NftImage onClick={() => {}}/>
        <a className="title" href="/"> Equilibrium #3429 </a>
        <p className="description"> Our Equilibrium collection promotes balance and calm. </p>
        <NftStatusBar/>
        <hr/>
        <div className="attribution"> 
          <img src={ image } className="avatar" alt="Author"/>
          Creation of <a className="author" href="/"> Jules Wyvern</a>
        </div>
    </div>;
}
 
export default NftCard;