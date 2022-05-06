import { createGlobalStyle } from "styled-components";

const color = {

  orangePrimary: "#b33400",
  orangeSecondary: "#f74902",
  blackPrimary: "#080808",
  blackSecondary: "#16181b",
  whitePrimary: " #ffffff",
  whiteSecondary: "#d4d4d4",
  greyBorder: "#4c4c4c",
  greenPrimary: "#105f04",
  redPrimary: "#b50303",
  grey: "#e7e7e7e7",
  whiteBoxShadowSecondary: "#e3e3e3",
  iconTransitionBlackPrimary: " #080808 0.9s ease-in-out",
  iconTransitionWhitePrimary: " #ffffff 0.9s ease-in-out",
  whiteGrayBlockedContent: "#2624245c",
  blackGrayBlockedContent: "#2624245c",
  whiteThird: "#f1eded",// create for other colors too


};

const LightTheme = {
  body: color.whitePrimary,
  fontColor: color.blackPrimary,
  headerBackground: color.whitePrimary,
  iconsColor: color.blackSecondary,
  badgeFontColor: color.whitePrimary,
  badgeBackground: color.blackPrimary,
  searchBarBackground: color.grey,
  border: color.blackSecondary,
  barBoxShadow: color.whiteBoxShadowSecondary,
  badge: color.blackSecondary,
  hoverColor: color.redPrimary,
  sidebarBackground: color.whiteSecondary,
  hoverBackground: color.whitePrimary,
  icontTransition: color.iconTransitionWhitePrimary,
  productCardShadow: color.whiteBoxShadowSecondary,
  topMenuBlockedContent: color.whiteGrayBlockedContent,
  sellersCanvasItems: color.whiteThird,
};

const OrangeTheme =  {
    body: color.orangePrimary,
    fontColor: color.whiteSecondary,
    headerBackground: color.orangePrimary,
    iconsColor: color.whitePrimary,
    badgeFontColor: color.orangePrimary,
    badgeBackground: color.blackPrimary,
    searchBarBackground: color.grey,
    border: color.whitePrimary,
    barBoxShadow: color.whiteBoxShadowSecondary,
    badge: color.whiteSecondary,
    hoverColor: color.redPrimary,
    sidebarBackground: color.orangeSecondary,
    hoverBackground: color.orangePrimary,
    iconTransition: color.iconTransitionBlackPrimary,
    productCardShadow: color.whitePrimary,
    topMenuBlockedContent: color.whiteGrayBlockedContent,


  
  };

const DarkTheme = {
  body: color.blackPrimary,
  fontColor: color.whiteSecondary,
  headerBackground: color.blackPrimary,
  iconsColor: color.whitePrimary,
  badgeFontColor: color.whitePrimary,
  badgeBackground: color.blackPrimary,
  searchBarBackground: color.grey,
  border: color.whiteSecondary,
  barBoxShadow: color.whiteBoxShadowSecondary,
  badge: color.whiteSecondary,
  hoverColor: color.redPrimary,
  sidebarBackground: color.blackSecondary,
  hoverBackground: color.blackPrimary,
  iconTransition: color.iconTransitionBlackPrimary,
  productCardShadow: color.whiteBoxShadowSecondary,
  topMenuBlockedContent: color.whiteGrayBlockedContent,



};

const GlobalStyles = createGlobalStyle`

body {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.fontColor};
}

.header {
    background-color: ${(props) => props.theme.headerBackground}
}

.header__icons, .video__canvas__left__content__video__icons, .sidebar li, .header__icons__environment, .header__left__menu{
    color: ${props => props.theme.iconsColor}
}

.search__bar {
    background-color: ${(props) => props.theme.searchBarBackground};
    border-color: ${props => props.theme.searchBarBicons__environmentrderColor}
}

.search__bar input {
    color: ${props => props.theme.fontColor};
}

.search__bar button {
    color: ${props => props.theme.iconsColor};
}

.footer {
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.fontColor}
}

.badge, .video__top span {
    background-color: ${props => props.theme.badgeBackground};
    color: ${props => props.theme.badgeFontColor};
}


 .header .sidebar {
    box-shadow:  ${props => props.theme.barBoxShadow};
}

.footer__icons, .header__icons {
    -webkit-top-highlight-color: transparent;
    transition: ${props => props.theme.iconTransition};
}

.footer__icons__basket {
    background-color: ${props => props.theme.badge};
    color: ${props => props.theme.badgeFontColor}
}

.clicked,
.cursor:hover,
.footer__icons__home:hover,
.footer__icons__gift:hover,
.footer__icons__basket:hover,
.footer__icons__apps:hover,
.footer__icons__search:hover {
   color: ${props => props.theme.hoverColor}
    }

.sidebar, .left__side__nav {
    background-color: ${props => props.theme.sidebarBackground};
    border-left: 5px solid ${props => props.theme.body};
    
}
 .product__display__container {
     box-shadow: 0px 0px 8px 1px ${props => props.theme.productCardShadow}
 }

.sidebar .open {
    border-right: 4px solid  ${props => props.theme.sidebarBackground};
    border-radius: 0 18px;
}

.sidebar li:hover, .active {
    background-color: ${props => props.theme.hoverBackground};
    border-right: 4px solid  ${props => props.theme.sidebarBackground};
    border-radius: 0 18px;
}



.sidebar hr, .left__side__nav hr {
    color: ${props => props.theme.iconsColor}
}

.left__side__nav__menus li:hover, .mobile__footer li:hover {
    box-shadow: 0px 0px 5px 0px ${props => props.theme.fontColor}
}

.sidebar::-webkit-scrollbar, .video__canvas__left__content::-webkit-scrollbar, .sellers__body::-webkit-scrollbar {
    width: 6px;
    background-color: ${props => props.theme.sidebarBackground};
}

.sidebar::-webkit-scrollbar:hover, .video__canvas__left__content::-webkit-scrollbar:hover, .sellers__body::-webkit-scrollbar:hover {
    width: 6px;
    border-radius: 6px;
    border: 1px solid ${props => props.theme.fontColor}
}

.sidemenu__content .open__sidemenu {
    background-color: ${props => props.theme.topMenuBlockedContent}
}

a {
    color: ${props => props.theme.fontColor}
}

.sidebar::-webkit-scrollbar-thumb, .video__canvas__left__content::-webkit-scrollbar-thumb, .sellers__body::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.fontColor};
    border-radius: 6px
}



.top__trending__item__image {
    background-color: ${props => props.theme.fontColor};
}

.video__canvas {
    background-color: ${props => props.theme.body}
}

.video__title {
    color: ${props => props.theme.fontColor}
}

 
.video__canvas .video__canvas__right__content .video {
    background: ${props => props.theme.body};
    box-shadow: 2px 6px 1em ${props => props.theme.sidebarBackground}
}

.sellers__canvas.open {
    color:  ${props => props.theme.fontColor};
    background: ${props => props.theme.sidebarBackground};
    box-shadow: 2px 6px 1em ${props => props.theme.sidebarBackground};
}

.sellers__canvas .contain__content {
    background: ${props => props.theme.sellersCanvasItems}
}





`;

export { LightTheme, DarkTheme, OrangeTheme, GlobalStyles };
