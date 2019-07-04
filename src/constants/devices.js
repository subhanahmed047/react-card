const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
};

const devices = {
    MOBILE_S: `(min-width: ${size.mobileS})`,
    MOBILE_M: `(min-width: ${size.mobileM})`,
    MOBILE_L: `(min-width: ${size.mobileL})`,
    TABLET: `(min-width: ${size.tablet})`,
    LAPTOP: `(min-width: ${size.laptop})`,
    LAPTOP_L: `(min-width: ${size.laptopL})`,
    DESKTOP: `(min-width: ${size.desktop})`,
    DESKTOP_L: `(min-width: ${size.desktop})`,
};

export default devices;
