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
            invalid: true,
        });

        expect(console.error).to.be.calledOnceWith('[containme] The option "invalid" is not valid.');
    });
});
