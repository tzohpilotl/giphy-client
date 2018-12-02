import React from 'react';
import { shallow } from 'enzyme';
import { Gif } from './Gif.component';

const info = {
  data: {
    id: 'jj2',
    title: 'My gif',
    images: {
      original: { url: 'http://thegifurl.com' },
    },
  },
};

describe('Spinner component', () => {
  let wrapper = shallow(<Gif id={info.data.id} gif={info.data} />);

  it('should render', () => {
    expect(wrapper.isEmptyRender()).toEqual(false);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have proper attributes', () => {
    const image = wrapper.find('img').at(1);
    const props = image.props();
    expect(props.src).toEqual(info.data.images.original.url);
    expect(props.alt).toEqual(info.data.title);
  });
});
