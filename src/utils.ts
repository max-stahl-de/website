const handleOnClick = (elementId: string, action?: (param: boolean) => any) => {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        action && action(false);
    }
};

export default handleOnClick;
