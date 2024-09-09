import React, { useEffect } from 'react';

const GoogleAd = () => {
    useEffect(() => {
        // Check if adsbygoogle exists to prevent multiple calls
        if (window.adsbygoogle && window.adsbygoogle.loaded !== true) {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
    }, []);

    return (
        <div>
            <ins className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-5320134310767934"
                data-ad-slot="9892817488"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
        </div>
    );
};

export default GoogleAd;