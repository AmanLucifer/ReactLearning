function customRender(tag, container) {
    const domElement = document.createElement(tag.type);
    domElement.innerHTML = tag.children;

    for (const prop in tag.props) {
        domElement.setAttribute(prop, tag.props[prop]);
    }

    container.appendChild(domElement);
}

const tag = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click here to visit Google'
};

const root = document.querySelector('#root');

customRender(tag, root);
