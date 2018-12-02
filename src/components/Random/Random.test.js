import React from 'react';
import { shallow, mount } from 'enzyme';
import RandomContainer, { Random } from './Random.component';
import Gif from '../Gif';
import Spinner from '../Spinner';
import Button from '../Button';
import { getRandomGif } from '../../api';

jest.mock('../../api', () => ({ getRandomGif: jest.fn() }));

const randomGifData = {
  data: {
    title: 'My gif',
    images: {
      original: { url: 'http://thegifurl.com' },
    },
  },
};

describe('Random component', () => {
  it('should render', () => {
    expect(shallow(<Random />).isEmptyRender()).toEqual(false);
  });

  it('should match snapshots', () => {
    expect(shallow(<Random />)).toMatchSnapshot();
  });

  it('should fetch a new gif on mounting', () => {
    mount(<RandomContainer />);
    expect(getRandomGif).toHaveBeenCalled();
  });

  it('should load the spinner if no gif is loaded', () => {
    const wrRandomer = shallow(<Random />);
    expect(wrRandomer.containsMatchingElement(<Spinner />)).toBe(true);
  });

  it('should render a gif if the component has the gif info', () => {
    const wrRandomer = shallow(<Random gif={randomGifData} />);
    const gif = wrRandomer.find(Gif);
    expect(gif).toHaveLength(1);
  });

  it('should fetch a new gif if the button is clicked', () => {
    const wrRandomer = shallow(<Random />);
    wrRandomer.find(Button).simulate('click');
    expect(getRandomGif).toHaveBeenCalled();
  });
});
