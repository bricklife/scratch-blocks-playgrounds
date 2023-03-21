const Blockly = require("scratch-blocks");

// https://developers.google.com/blockly/guides/configure/web/configuration_struct
window.workspace = Blockly.inject('blocks', {
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
