import React, {useEffect} from "react";


function HelperChat() {
useEffect((function(d, m){
    var kommunicateSettings = 
        {"appId":"2446e7576e1fd6a8770288153963be7d5","popupWidget":true,"automaticChatOpenOnNavigation":true};
    var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
    s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
    var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
    window.kommunicate = m; m._globals = kommunicateSettings;
})(document, window.kommunicate || {}), [])
    return (
        <div>
            
        </div>
    )
}

export default HelperChat