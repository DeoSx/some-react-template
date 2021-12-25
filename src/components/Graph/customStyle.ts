// const COLORS = {
//   purp: '#43447a',
// };
//
// const nodeStyles = [
//   {
//     selector: 'node',
//     style: {
//       'transition-property': 'background-color border-color',
//       'transition-duration': '0.3s',
//       'transition-timing-function': 'ease-in-sine',
//       'background-color': COLORS.purp,
//     },
//   },
// ];
// const edgeStyles = [
//   {
//     selector: 'edge',
//     style: {
//       'curve-style': 'bezier',
//       'target-arrow-shape': 'triangle',
//       'target-arrow-color': COLORS.purp,
//       'line-color': COLORS.purp,
//     },
//   },
// ];
//
// export default [...nodeStyles, ...edgeStyles];

export const cytoscapeStylesheet = [
  {
    selector: 'node',
    style: {
      'background-color': '#43447a',
      width: 'label',
      height: 'label',
      padding: '6px',
      shape: 'round-rectangle',
    },
  },
  {
    selector: 'node[label]',
    style: {
      label: 'data(label)',
      'font-size': '12',
      color: 'white',
      'text-halign': 'center',
      'text-valign': 'center',
    },
  },
  {
    selector: 'edge',
    style: {
      'curve-style': 'bezier',
      'target-arrow-shape': 'triangle',
      width: 1.5,
    },
  },
  {
    selector: 'edge[label]',
    style: {
      label: 'data(label)',
      'font-size': '12',

      'text-background-color': 'white',
      'text-background-opacity': 1,
      'text-background-padding': '2px',

      'text-border-color': 'black',
      'text-border-style': 'solid',
      'text-border-width': 0.5,
      'text-border-opacity': 1,

      // "text-rotation": "autorotate"
    },
  },
] as Array<cytoscape.Stylesheet>;
