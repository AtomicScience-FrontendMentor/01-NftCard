import * as React from 'react';
import "../../styles/fonts.scss"
import "../../styles/nftCard.scss"
import NftImage from './NftImage';

interface NftCardProps {
    
}
 
const NftCard: React.FunctionComponent<NftCardProps> = () => {
    return <div className='nft-card'> 
        <NftImage onClick={() => {}}/>
        <p className="semi-bold-font"> Semi-bold font </p>
        <p className="regular-font"> Regular font </p>
        <p className="light-font"> Light font </p>
    </div>;
}
 
export default NftCard;