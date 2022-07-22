import * as React from 'react';
 
interface NftImageProps {
    onClick: () => void;
}

const NftImage: React.FunctionComponent<NftImageProps> = (props) => {
    return <div className="nft-image"> 
        <img src="image-equilibrium.jpg" alt="Equilibrium Collection"></img>
    </div>;
}
 
export default NftImage;