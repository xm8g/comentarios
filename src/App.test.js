import React from 'react';
import App from './App';

import {shallow, mount, render} from 'enzyme'

describe('<App />', () => {
  const base = {
    syncState: jest.fn()
  }
  it('deve ter um .class container do bootstrap', () => {
    const wrapper = shallow(<App base={base} />)
    expect(wrapper.is('.container')).toBe(true)
  })
  /* it('mostra o componente <App />', () =>{
    const wrapperShallow = shallow(<App />)
    const wrapperMount = mount(<App />)
    const wrapperRender = render(<App />)

    console.log(wrapperRender.html())
  }) */
  it('mostra os Comments', () =>{
    const wrapper = shallow(<App base={base} />)
    expect(wrapper.find('Comments').length).toBe(1)
  })
  it('mostra o NewComment', () =>{
    const wrapper = shallow(<App base={base} />)
    expect(wrapper.find('NewComment').length).toBe(1)
  })
  it('adiciona um Comentario no state quando o POST é feito', () =>{
    const wrapper = mount(<App base={base} />)
    wrapper.instance().postNewComment({comment: 'test'})
    const comments = Object.keys(wrapper.instance().state.comments)
    expect(comments.length).toBe(1)
  })


})
