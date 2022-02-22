import * as React from 'react';
import "../../styles/fonts.scss"
import "../../styles/nftCard.scss"
import { ReactComponent as EthereumIcon } from "../../icons/icon-ethereum.svg"
import { ReactComponent as ClockIcon } from "../../icons/icon-clock.svg"

const NftStatusBar: React.FunctionComponent = () => {
    return <div className='nft-status-bar'> 
        <div className='nft-cost'>
            <EthereumIcon/> 
            0.041 ETH
        </div>

        <div className='nft-age'>
            <ClockIcon/> 
            3 days left
        </div>
    </div>;
}
 
export default NftStatusBar;