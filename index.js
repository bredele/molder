
/**
 * Expose 'molder'
 *
 * Subsitute elements with custom elements syntax.
 *
 * @param {Element} component
 * @param {Element} el
 * @api public
 */

module.exports = function(component, el) {
	component.parentNode.replaceChild(el, component)
	var contents = el.querySelectorAll('content')
	for(var i = 0, l = contents.length; i < l; i++) {
		var content = contents[i]
		var select = content.getAttribute('select')
		content.parentNode.replaceChild(select
			? component.querySelector(select)
			: fragment([].slice.call(component.childNodes)), content)
	}
}


/**
 * Fragment array of nodes.
 *
 * @param {Array} arr
 * @return {DocumentFragment}
 * @api private
 */

function fragment(arr) {
  var el = document.createDocumentFragment()
	arr.map(item => el.appendChild(item))
  return el
}
