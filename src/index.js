import EaselJS from './CreateJS/EaselJS';
import PreloadJS from './CreateJS/PreloadJS';
import SoundJS from './CreateJS/SoundJS';
import TweenJS from './CreateJS/TweenJS';
import Elements from './Elements';
import Translations from './Translations';
import Sounds from './Sounds';

((global, factory) => {
  if(typeof module === 'object' && typeof module.exports === 'object') {
    // For CommonJS and CommonJS-like environments where a proper `window`
    // is present, execute the factory and get CreateJS-Elements.
    // For environments that do not have a `window` with a `document`
    // (such as Node.js), expose a factory as module.exports.
    // This accentuates the need for the creation of a real `window`.
    module.exports = global.document ?
      factory(global, true) :
      (w) => {
        if(!w.document) {
          throw new Error('CreateJS-Elements requires a window with a document');
        }
        return factory(w);
      };
  } else {
    factory(global);
  }
  // Pass this if window is not defined yet
})(typeof window !== 'undefined' ? window : this, (window) => {
  return {
    EaselJS,
    PreloadJS,
    SoundJS,
    TweenJS,
    Elements,
    Translations,
    Sounds,
  };
});