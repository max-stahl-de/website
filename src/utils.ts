const handleOnClick = (elementId: string, action?: () => any) => {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        action && action();
    }
};

export default handleOnClick;
