

/**
 * [exports description]
 * @return {[type]} [description]
 */

module.exports = function(component, el) {
	component.parentNode.replaceChild(el, component);
}