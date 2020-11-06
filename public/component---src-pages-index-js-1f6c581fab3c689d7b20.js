webpackJsonp([35783957827783],{210:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,n){return e.raw=n,e}n.__esModule=!0;var l=i(["\n"],["\n"]),r=i(["\n    height: 160px;\n    padding: 0 20% 0 20%;\n    display: block;\n    position: relative;\n    transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1.0);\n\n    display: grid;\n    grid-template-columns: 7fr 3fr;\n    @media (max-width: 1440px) {\n        grid-template-columns: 1fr;\n        padding: 0;\n        height: 100%;\n    }\n\n    &:nth-child(even) {\n        background: #fafafa;\n    }\n\n    &:nth-child(odd) {\n        background: #fafafa;\n    }\n\n    :hover {\n        background: #ffffff;\n    }\n"],["\n    height: 160px;\n    padding: 0 20% 0 20%;\n    display: block;\n    position: relative;\n    transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1.0);\n\n    display: grid;\n    grid-template-columns: 7fr 3fr;\n    @media (max-width: 1440px) {\n        grid-template-columns: 1fr;\n        padding: 0;\n        height: 100%;\n    }\n\n    &:nth-child(even) {\n        background: #fafafa;\n    }\n\n    &:nth-child(odd) {\n        background: #fafafa;\n    }\n\n    :hover {\n        background: #ffffff;\n    }\n"]),d=i(["\n    height: 160px;\n    width: auto;\n    margin: 0;\n    padding: 0;\n    @media (max-width: 1440px) {\n        grid-template-columns: 1fr;\n        height: 100%;\n    }\n"],["\n    height: 160px;\n    width: auto;\n    margin: 0;\n    padding: 0;\n    @media (max-width: 1440px) {\n        grid-template-columns: 1fr;\n        height: 100%;\n    }\n"]),o=i(["\n    align-self: center;\n    height:100%;\n    margin: 0 auto;\n    @media (max-width: 1440px) {\n        width: 100%;\n    }\n"],["\n    align-self: center;\n    height:100%;\n    margin: 0 auto;\n    @media (max-width: 1440px) {\n        width: 100%;\n    }\n"]),f=i(["\n    display: grid;\n    margin: 40px;\n    @media (max-width: 1440px) {\n        grid-template-columns: 1fr;\n        margin: 32px;\n    }\n"],["\n    display: grid;\n    margin: 40px;\n    @media (max-width: 1440px) {\n        grid-template-columns: 1fr;\n        margin: 32px;\n    }\n"]),m=i(["\n    color: black;\n    font-size: 20px;\n    font-weight: 400;\n    margin: 0;\n    @media (max-width: 1440px) {\n        font-size: 14px;\n        margin: 0px;\n    }\n"],["\n    color: black;\n    font-size: 20px;\n    font-weight: 400;\n    margin: 0;\n    @media (max-width: 1440px) {\n        font-size: 14px;\n        margin: 0px;\n    }\n"]),u=i(["\n    color: black;\n    font-size: 12px;\n    font-weight: 300;\n    @media (max-width: 1440px) {\n        font-size: 12px;\n        margin: 0px;\n    }\n"],["\n    color: black;\n    font-size: 12px;\n    font-weight: 300;\n    @media (max-width: 1440px) {\n        font-size: 12px;\n        margin: 0px;\n    }\n"]),c=t(2),s=a(c),p=t(77),x=a(p),g=x.default.a(l),h=x.default.div(r),b=x.default.div(d),w=x.default.img(o),E=x.default.div(f),z=x.default.h3(m),C=x.default.h4(u),k=function(e){return s.default.createElement(g,{href:e.link},s.default.createElement(h,{image:e.image},s.default.createElement(E,null,s.default.createElement(z,null,e.title),s.default.createElement(C,null,e.subtitle)),s.default.createElement(b,null,s.default.createElement(w,{src:e.logo}))))};n.default=k,e.exports=n.default},211:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,n){return e.raw=n,e}n.__esModule=!0;var l=i(["\n    width: 100%;\n    position:relative;\n    overflow: hidden;\n    border-radius: 10px;\n    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);\n    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n    font-weight: 300;\n    line-height: 1.5;\n    @media (max-width: 640px) {\n        margin: 60px 0 0 0;\n    }\n"],["\n    width: 100%;\n    position:relative;\n    overflow: hidden;\n    border-radius: 10px;\n    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);\n    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n    font-weight: 300;\n    line-height: 1.5;\n    @media (max-width: 640px) {\n        margin: 60px 0 0 0;\n    }\n"]),r=i(["\n    background: #ffffff;\n    position: absolute;\n    top: 0;\n    height: 110%;\n    z-index: -1;\n    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n"],["\n    background: #ffffff;\n    position: absolute;\n    top: 0;\n    height: 110%;\n    z-index: -1;\n    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n"]),d=i(['\n    margin: 40px 40px;\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    grid-template-rows: 60px 60px;\n    grid-column-gap: 20px;\n    grid-template-areas:\n    "CardTitle CardTitle"\n    "CardSubtitle1 CardSubtitle2"\n    "CardText1 CardText2"\n    "CardFooterText .";\n    @media (max-width: 640px) {\n        display: block;\n    }\n'],['\n    margin: 40px 40px;\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    grid-template-rows: 60px 60px;\n    grid-column-gap: 20px;\n    grid-template-areas:\n    "CardTitle CardTitle"\n    "CardSubtitle1 CardSubtitle2"\n    "CardText1 CardText2"\n    "CardFooterText .";\n    @media (max-width: 640px) {\n        display: block;\n    }\n']),o=i(["\n    color: black;\n    font-size: 24px;\n    margin: 0;\n    grid-area: CardTitle;\n    @media (max-width: 720px) {\n        font-size: 24px;\n    }\n"],["\n    color: black;\n    font-size: 24px;\n    margin: 0;\n    grid-area: CardTitle;\n    @media (max-width: 720px) {\n        font-size: 24px;\n    }\n"]),f=i(["\n    color: black;\n    font-size: 24px;\n    font-weight: 400;\n    grid-area: CardSubtitle1;\n    @media (max-width: 720px) {\n        font-size: 16px;\n    }\n"],["\n    color: black;\n    font-size: 24px;\n    font-weight: 400;\n    grid-area: CardSubtitle1;\n    @media (max-width: 720px) {\n        font-size: 16px;\n    }\n"]),m=i(["\n    color: black;\n    font-size: 24px;\n    font-weight: 400;\n    grid-area: CardSubtitle2;\n    @media (max-width: 720px) {\n        font-size: 16px;\n    }\n"],["\n    color: black;\n    font-size: 24px;\n    font-weight: 400;\n    grid-area: CardSubtitle2;\n    @media (max-width: 720px) {\n        font-size: 16px;\n    }\n"]),u=i(["\n    color: rgba(0, 0, 0, 0.8);\n    font-size: 14px;\n    grid-area: CardText1;\n    @media (max-width: 720px) {\n        font-size: 12px;\n    }\n"],["\n    color: rgba(0, 0, 0, 0.8);\n    font-size: 14px;\n    grid-area: CardText1;\n    @media (max-width: 720px) {\n        font-size: 12px;\n    }\n"]),c=i(["\n    color: rgba(0, 0, 0, 0.8);\n    font-size: 14px;\n    grid-area: CardText2;\n    @media (max-width: 720px) {\n        font-size: 12px;\n    }\n"],["\n    color: rgba(0, 0, 0, 0.8);\n    font-size: 14px;\n    grid-area: CardText2;\n    @media (max-width: 720px) {\n        font-size: 12px;\n    }\n"]),s=i(["\n    color: rgba(0, 0, 0, 0.8);\n    font-size: 14px;\n    grid-area: CardFooterText;\n    @media (max-width: 720px) {\n        font-size: 12px;\n    }\n"],["\n    color: rgba(0, 0, 0, 0.8);\n    font-size: 14px;\n    grid-area: CardFooterText;\n    @media (max-width: 720px) {\n        font-size: 12px;\n    }\n"]),p=t(2),x=a(p),g=t(77),h=a(g),b=h.default.div(l),w=h.default.img(r),E=h.default.div(d),z=h.default.h3(o),C=h.default.h4(f),k=h.default.h4(m),v=h.default.p(u),T=h.default.p(c),S=h.default.p(s),y=function(e){return x.default.createElement(b,{image:e.bg,className:"Card"},x.default.createElement(E,{className:"CardTitleGroup"},x.default.createElement(z,{className:"CardTitle"},e.title),x.default.createElement(C,{className:"CardSubtitle1"},e.subtitle1),x.default.createElement(v,{className:"CardText1"},e.text1),x.default.createElement(k,{className:"CardSubtitle2"},e.subtitle2),x.default.createElement(T,{className:"CardText2"},e.text2),x.default.createElement(S,{className:"CardFooterText"},e.footerText)),x.default.createElement(w,{src:e.image}))};n.default=y,e.exports=n.default},219:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}n.__esModule=!0;var i=t(2),l=a(i),r=t(34),d=(a(r),t(211)),o=(a(d),t(210)),f=a(o),m=t(41),u=(a(m),t(53)),c=function(){return l.default.createElement("div",{className:"Index"},l.default.createElement("div",{className:"Hero"},l.default.createElement("div",{className:"HeroGroup"},l.default.createElement("h1",null,"Saebom April Kwon"),l.default.createElement("p",null,"Hello, I am a UX designer living in Mountain View, CA. ",l.default.createElement("br",null),"I am passionate in creating simple, usable, and inclusive user interfaces."),l.default.createElement("a",{href:"/FullProject/"},"See the featured work"))),l.default.createElement("div",null,l.default.createElement(f.default,{link:"/FullProject/",title:"Strategic Sourcing Project",subtitle:"UX Research / UX Design",logo:"../../Full_Project_0.png"})),l.default.createElement("div",null,l.default.createElement(f.default,{link:"/PatternLibrary/",title:"How I created Team Design Pattern Library",subtitle:"Design System / Interaction Design",logo:"../../PatternLibrary_0.png"})),l.default.createElement("div",null,l.default.createElement(f.default,{link:"/SupplierInvitationUX/",title:"Supplier Invitation UX",subtitle:"UX Research / UX Design / Component",logo:"../../SupplierInvitationUX_0.png"})),l.default.createElement("div",null,l.default.createElement(f.default,{link:"/ConditionBuilder/",title:"Visibility Condition Builder UI",subtitle:"Interaction Design / Component",logo:"../../ConditionBuilder_0.png"})),l.default.createElement("div",{className:"Footer"},l.default.createElement("div",{className:"FooterGroup"},l.default.createElement("div",{className:"copyright"},l.default.createElement("p",null,"Designed by Saebom April Kwon",l.default.createElement("br",null),"with React from scratch")),l.default.createElement("div",{className:"facebook"},l.default.createElement("a",{href:"https://kr.linkedin.com/in/saebomkwon","aria-label":"Go to Linkedin Profile"},l.default.createElement(u.FaLinkedin,{color:"black",fontSize:"24px"}))),l.default.createElement("div",{className:"instagram"},l.default.createElement("a",{href:"https://www.instagram.com/aprilsbkwon/","aria-label":"Go to Instagram Profile"},l.default.createElement(u.FaInstagram,{color:"black",fontSize:"24px"}))),l.default.createElement("div",{className:"email"},l.default.createElement("a",{href:"mailto: saebom@umich.edu","aria-label":"Send email"},l.default.createElement(u.FaRegEnvelope,{color:"black",fontSize:"24px"}))))))};n.default=c,e.exports=n.default}});
//# sourceMappingURL=component---src-pages-index-js-1f6c581fab3c689d7b20.js.map