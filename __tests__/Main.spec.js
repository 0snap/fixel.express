jest.unmock('../src/components/main/Main.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Main from '../src/components/main/Main.jsx';

describe('Main', () => {

	const gerCont = { description: ['foo', 'bar'], title: 't1'}; 
	const engCont = { description: ['ping', 'pong'], title: 't2'};

	const content = {
		german: gerCont,
		english: engCont
	};

	const fixHeader = jest.genMockFunction();


	let main;

	beforeEach(function() {
        main = TestUtils.renderIntoDocument( <Main content={content} fixHeader={fixHeader} />);
    });

	it('should render', () => {
        const mainNode = ReactDOM.findDOMNode(main);
        expect(mainNode).toBeDefined();
        expect(main.state.content).toEqual(gerCont);
        const paragraphs = TestUtils.scryRenderedDOMComponentsWithTag(main, 'p');
        expect(paragraphs.length).toEqual(2);
        expect(paragraphs[0].textContent).toEqual('foo')
        expect(paragraphs[1].textContent).toEqual('bar')
	});

	it('should switch language correctly', () => {
		main.switchLanguage('english');
		expect(main.state.content).toEqual(engCont);

		main.switchLanguage('foobar'); // shouldnt change
		expect(main.state.content).toEqual(engCont);
	});

	it('should fix header', () => {
		expect(main.state.hideFixHint).toEqual(false);
		
		main.fixHeader();
		expect(main.state.hideFixHint).toEqual(true);
		expect(fixHeader).toBeCalled();
	});
});