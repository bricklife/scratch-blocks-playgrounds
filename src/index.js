const Blockly = require("scratch-blocks");

// https://developers.google.com/blockly/guides/configure/web/configuration_struct
const workspace = Blockly.inject('blocklyDiv', {
  collapse: true,
  comments: true,
  disable: false,
  media: 'media/',
  readOnly: false,
  scrollbars: true,
  toolboxPosition: 'start',
  horizontalLayout: false,
  trashcan: false,
  sounds: true,
  grid: {
    spacing: 20,
    length: 3,
    colour: '#ccc',
    snap: true
  },
  zoom: {
    controls: true,
    wheel: true,
    startScale: 0.75,
    maxScale: 4,
    minScale: 0.25,
    scaleSpeed: 1.1
  },
  colours: {
    fieldShadow: 'rgba(255, 255, 255, 0.3)',
    dragShadowOpacity: 0.6
  }
});

workspace.addChangeListener(e => console.log('workspace', e));

const toolboxWorkspace = workspace.getFlyout().getWorkspace();
toolboxWorkspace.addChangeListener(e => console.log('toolbox', e));
toolboxWorkspace.registerButtonCallback('MAKE_A_VARIABLE', e => console.log('MAKE_A_VARIABLE', e));
toolboxWorkspace.registerButtonCallback('MAKE_A_LIST', e => console.log('MAKE_A_LIST', e));
toolboxWorkspace.registerButtonCallback('MAKE_A_PROCEDURE', e => console.log('MAKE_A_PROCEDURE', e));

Blockly.Procedures.externalProcedureDefCallback = (data, callback) => console.log('externalProcedureDefCallback', data);

window.workspace = workspace;
