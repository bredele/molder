var tape = require('tape')
var molder = require('..')


tape('replace element with other element', test => {
	test.plan(1)
	var parent = document.createElement('div')
	parent.innerHTML = '<div><div>'

	var component = document.createElement('button')

	molder(parent.firstChild, component)
	test.equal(parent.firstChild.outerHTML, '<button></button>')
})


tape('subsitute content', test => {
	test.plan(1)
	var parent = document.createElement('div')
	parent.innerHTML = '<div>Hello world<div>'

	var component = document.createElement('button')
	component.innerHTML = '<content />'

	molder(parent.firstChild, component)
	test.equal(parent.firstChild.outerHTML, '<button>Hello world</button>')
})


tape('subsitute content using queries', test => {
  test.plan(1)
})


