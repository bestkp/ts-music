import React, { Component } from 'react'
import { Carousel } from 'antd'
import {getBanner} from "@/utils/api";

interface IState {
  banner: IBanner[]
}

interface IBanner {
  imageUrl: string,
}

export default class Banner extends Component<{}, IState> {
  state = {
    banner: []
  };
  componentDidMount() {
    getBanner({type: 0}).then((res: AxiosResponse) => {
      console.log(res.data.banners)
      this.setState({
        banner: res.data.banners
      })
    })
  }
  render() {
    let { banner } = this.state;
    return (
      <div>
        <Carousel autoplay={true}>
          {
            banner.map((b: IBanner) => <div>
              <img style={{width: '100%', height: 400}} src={b.imageUrl} alt=""/>
            </div>)
          }
        </Carousel>
      </div>
    )
  }
}
