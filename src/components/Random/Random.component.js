import React, { Component } from 'react';
import { getRandomGif } from '../../api';
import './Random.css';

import Gif from '../Gif';
import Spinner from '../Spinner';
import Button from '../Button';

export const Random = ({ gif, refreshGif }) => (
  <div className="Random">
    <Button onClick={refreshGif} disabled={!gif}>
      show me another one
    </Button>
    {gif ? <Gif id={gif.data.id} gif={gif.data} /> : <Spinner />}
  </div>
);

class RandomContainer extends Component {
  state = {
    randomGifData: null,
  };

  componentDidMount() {
    this.refreshGif();
  }

  refreshGif = async () => {
    this.setState({ randomGifData: null });
    const gifData = await getRandomGif();
    this.setState({ randomGifData: gifData });
  };

  render() {
    const { randomGifData } = this.state;
    return <Random gif={randomGifData} refreshGif={this.refreshGif} />;
  }
}

export default RandomContainer;
