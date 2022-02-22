import * as React from 'react';
import "../../styles/fonts.scss"
import "../../styles/nftCard.scss"
import NftImage from './NftImage';
import NftStatusBar from "./NftStatusBar";

interface NftCardProps {
    
}
 
const NftCard: React.FunctionComponent<NftCardProps> = () => {
    return <div className='nft-card'> 
        <NftImage onClick={() => {}}/>
        <p className="title"> Equilibrium #3429 </p>
        <p className="description"> Our Equilibrium collection promotes balance and calm. </p>
        <NftStatusBar/>
        <hr/>
    </div>;
}
 
export default NftCard;