'use strict';

import chai, {expect} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

import defaultContainer from '../src/index';

describe('containme', () => {
    beforeEach(() => {
        sinon.stub(console, 'error');
    });

    afterEach(() => {
        sinon.restore();
    });

    it('invalid parameter', () => {
        defaultContainer({
            component: () => {},
            actions: {},
            mapStateToProps: {},
            invalid: true,
        });

        expect(console.error).to.be.calledWith('[containme] The option "invalid" is not valid.');
        expect(console.error).to.be
            .calledWith('[containme] The option "mapStateToProps" is expected to be "function" but received as "object".');
    });

    it('valid parameters', () => {
        defaultContainer({
            component: () => {},
            actions: {},
            mapStateToProps: () => {},
        });

        expect(console.error).not.to.be.called;
    });
});
