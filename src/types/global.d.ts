type SVGRProps = React.SVGAttributes<SVGElement> & {
  title?: string;
};
type SVGRComponent = React.FC<SVGRProps>;

/** Usage: temporary replacement of specific type. Easy to find via global search */
type TODO_ANY = any; // eslint-disable-line

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.svg' {
  const ReactComponent: SVGRComponent;
  const content: string;

  export default content;
  export { ReactComponent };
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

declare module '*.gif' {
  const content: string;
  export default content;
}

declare module '*.woff' {
  const content: string;
  export default content;
}

declare module '*.woff2' {
  const content: string;
  export default content;
}

declare module 'cytoscape-cola';

declare module 'cytoscape-cose-bilkent';
