export const FormatModalX = (menu: any, e: any) => {
    if (window.innerWidth - e.pageX > menu.clientWidth) {
        return (menu.style.left = e.pageX + "px");
    } else {
        return (menu.style.left = e.pageX - menu.clientWidth + "px");
    }
};
export const FormatModalY = (menu: any, e: any) => {
    if (window.innerHeight - e.pageY > menu.clientHeight) {
        return (menu.style.top = e.pageY + "px");
    } else {
        return (menu.style.top = e.pageY - menu.clientHeight + "px");
    }
};