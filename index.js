

/**
 * Expose 'molder'
 *
 * @param {Element} component
 * @param {Element} el
 * @api public
 */

module.exports = function(component, el) {
	component.parentNode.replaceChild(el, component);
}