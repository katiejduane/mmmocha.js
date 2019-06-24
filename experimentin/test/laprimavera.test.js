let practice = require('../laprimavera.js')
var expect = require('chai').expect;
var should = require('chai').should();
var assert = require('chai').assert;


// reverseStr test
describe('reverseStr()', function() {
    context('with string argument', function() {
        it('should return string in reverse', function(){
            practice.reverseStr('cat').should.equal('tac')
        });
    });

    context('with empty string argument', function() {
        it('should return an empty string', function(){
            practice.reverseStr('').should.equal('').with.lengthOf(0)
        });
    });

    context('with no arguments', function(){
        it('should throw an error', function(){
            (function(){
                practice.reverseStr()
            }.should.throw())
        })
    })
})


// frequency counter test
describe('firstCounter()', function(){
    context('with string argument', function(){
        it('should return an object', function(){
            practice.firstCounter('peaches and plums').should.be.an('object')
        })
        it('should have letter properties with numerical values', function() {
            practice.firstCounter('peaches and plums').should.have.property('p', 2)
        })
    })
    context('with no arguments', function () {
        it('should throw an error', function () {
            (function () {
                practice.firstCounter()
            }.should.throw())
        })
    })
})

// filter test
describe('getRidOfType()', function(){
    context('with array and type number arguments', function(){
        it('should return an array of string items', function(){
            practice.getRidOfType(['a', 2], 'string').should.have.lengthOf(1).and.eql([2])
        })
    })
    context('with array and type string arguments', function () {
        it('should return an array of number items', function () {
            practice.getRidOfType(['a', 2], 'number').should.have.lengthOf(1).and.eql(['a'])
        })
    })
    context('with missing second argument', function () {
        it('should return original array', function () {
            practice.getRidOfType(['a', 2]).should.eql(['a', 2])
        })
    })
    context('with no arguments, or missing array argument', function() {
        it('should throw an error', function(){
            (function(){
                practice.getRidOfType()
            }.should.throw())
        })
        it('should throw an error', function () {
            (function () {
                practice.getRidOfType('string')
            }.should.throw())
        })
    })
})



// ================================== for syntax reference ===================================
// describe('#indexOf()', function () {
//     context('when not present', function () {
//         it('should not throw an error', function () {
//             (function () {
//                 [1, 2, 3].indexOf(4);
//             }.should.not.throw());
//         });
//         it('should return -1', function () {
//             [1, 2, 3].indexOf(4).should.equal(-1);
//         });
//     });
//     context('when present', function () {
//         it('should return the index where the element first appears in the array', function () {
//             [1, 2, 3].indexOf(3).should.equal(2);
//         });
//     });
// });