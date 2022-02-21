import * as React from 'react';
 
interface NftImageProps {
    onClick: () => void;
}

const NftImage: React.FunctionComponent<NftImageProps> = (props) => {
    return <div className="nft-image"> 
        <img src="image-equilibrium.jpg"></img>
    </div>;
}
 
export default NftImage;