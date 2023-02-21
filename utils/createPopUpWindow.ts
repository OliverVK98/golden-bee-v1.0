const createPopUpWindow = (url: string, title: string) => {
    const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
    const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;

    const width = window.innerWidth
        || document.documentElement.clientWidth
        || window.screen.width;

    const height = window.innerHeight
        || document.documentElement.clientHeight
        || window.screen.height;

    const left = ((width / 2) - (500 / 2)) + dualScreenLeft;
    const top = ((height / 2) - (550 / 2)) + dualScreenTop;

    const newWindow = window.open(
        url,
        title,
        `width=500,height=550,left=${left},top=${top}`
    );

    newWindow?.focus();
};

export default createPopUpWindow