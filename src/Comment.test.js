import React from 'react';
import {shallow, mount, render} from 'enzyme'
import Comment from './Comment'

describe('<Comment />', () => {
    
    it('renderiza sem quebrar', () => {
        const comment = {
            comment: 'alex'
        }
        const wrapper = shallow(<Comment comment={comment} />)
        expect(wrapper.length).toBe(1)
        expect(wrapper.is('.well')).toBe(false)
        expect(wrapper.text()).toBe(comment.comment)
    })
    
})
