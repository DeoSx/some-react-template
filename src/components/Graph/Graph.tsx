import React, { FC, useRef, useEffect } from 'react';
import cytoscape, { Core, Layouts } from 'cytoscape';
// import cola from 'cytoscape-cola';
import COSEBilkent from 'cytoscape-cose-bilkent';

// types
import { GraphProps } from './types';

// styles
import { Container } from './styles';
import { cytoscapeStylesheet } from './customStyle';

const Graph: FC<GraphProps> = ({ className, elements }) => {
  const container = useRef<HTMLDivElement>(null);
  const graph = useRef<Core>();
  const layout = useRef<Layouts>();

  useEffect(() => {
    if (graph.current) {
      if (layout.current) {
        layout.current.stop();
      }
      graph.current.add(elements);
      layout.current = graph.current.elements().makeLayout({
        name: 'cose-bilkent',
      });
      layout.current.run();
    }
  }, [elements]);

  useEffect(() => {
    if (!container.current) {
      return;
    }
    try {
      if (!graph.current) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        // cytoscape.use(cola);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        cytoscape.use(COSEBilkent);
        graph.current = cytoscape({
          elements,
          // @ts-ignore
          style: cytoscapeStylesheet,
          maxZoom: 1,
          // @ts-ignore
          padding: 50,
          wheelSensitivity: 0.2,
          nodeDimensionsIncludeLabels: true,
          edgeElasticity: 0.1,
          container: container.current,
        });
      }
    } catch (error) {
      console.error(error);
    }
    // eslint-disable-next-line consistent-return
    return () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      graph.current && graph.current.destroy();
    };
  }, []);

  return <Container className={`${className || ''} graph`} ref={container} />;
};

export default Graph;
