const html = (html) => {
    let template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}


export { html }