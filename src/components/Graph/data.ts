export const originalElements = [
  {
    data: {
      id: 'node-1',
      generation: 0,
    },
  },
  {
    data: {
      id: 'node-2',
      generation: 0,
    },
  },
  {
    data: {
      id: 'node-3',
      generation: 0,
    },
  },
  {
    data: {
      id: 'node-4',
      generation: 0,
    },
  },
  {
    data: {
      id: 'edge-1',
      source: 'node-1',
      target: 'node-2',
      generation: 0,
    },
  },
  {
    data: {
      id: 'edge-2',
      source: 'node-1',
      target: 'node-3',
      generation: 0,
    },
  },
  {
    data: {
      id: 'edge-3',
      source: 'node-1',
      target: 'node-4',
      generation: 0,
    },
  },
  {
    data: {
      id: 'edge-4',
      source: 'node-4',
      target: 'node-3',
      generation: 0,
    },
  },
];

// {
//   data: {
//     id: 'edge-5',
//     source: 'node-1',
//     target: 'node-2',
//     generation: 0,
//   },
// },
// {
//   data: {
//     id: 'edge-6',
//     source: 'node-1',
//     target: 'node-2',
//     generation: 0,
//   },
// },
// {
//   data: {
//     id: 'edge-7',
//     source: 'node-1',
//     target: 'node-2',
//     generation: 0,
//   },
// },
// {
//   data: {
//     id: 'edge-8',
//     source: 'node-1',
//     target: 'node-2',
//     generation: 0,
//   },
// },

export const data = [
  { data: { id: 'Assigned', label: 'Assigned' } },
  { data: { id: 'Created', label: 'Created' } },
  { data: { id: 'Started', label: 'Started' } },
  { data: { id: 'On Hold', label: 'On Hold' } },
  { data: { id: 'Completed', label: 'Completed' } },
  { data: { id: 'Drafting Approved', label: 'Drafting Approved' } },
  { data: { id: 'Corrosion Approved', label: 'Corrosion Approved' } },
  { data: { id: 'Engineering Approved', label: 'Engineering Approved' } },
  { data: { source: 'Created', target: 'Assigned', label: 'assign' } },
  { data: { source: 'Assigned', target: 'Started', label: 'start' } },
  { data: { source: 'On Hold', target: 'Started', label: 'start' } },
  { data: { source: 'Started', target: 'On Hold', label: 'hold' } },
  { data: { source: 'Started', target: 'Completed', label: 'complete' } },
  {
    data: { source: 'Completed', target: 'Drafting Approved', label: 'approve' },
  },
  {
    data: {
      source: 'Drafting Approved',
      target: 'Corrosion Approved',
      label: 'corrosion-approve',
    },
  },
  {
    data: {
      source: 'Corrosion Approved',
      target: 'Engineering Approved',
      label: 'design-engineering-approve',
    },
  },
];
