import React, { Component } from 'react';
import { Row, Col, Icon, Card, Avatar, Typography, Tag, PageHeader, Button } from 'antd';
import style from './list.less';

const { Meta } = Card;
const { Title, Text } = Typography;

const listProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 6,
  xl: 4,
  style: { marginBottom: 24 },
};

class Home extends Component {
  state = {
    list: [
      {
        title: '测试相册',
        type: 1,
        cover: '',
      },
      {
        title: '五年一班相册',
        type: 1,
        cover: '',
      },
      {
        title: '2017年秋季运动会集锦',
        type: 2,
        cover: '',
      },
    ],
  };

  componentDidMount() {}

  listEl() {
    return this.state.list.map(item => {
      return (
        <Col {...listProps}>
          <Card
            hoverable
            cover={
              <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
            }
          >
            <Tag className={style.tag} color={item.type === 1 ? '#2db7f5' : '#87d068'}>
              {item.type === 1 ? '班' : '校'}
            </Tag>
            <Text ellipsis>{item.title}</Text>
          </Card>
        </Col>
      );
    });
  }

  render() {
    return (
      <div>
        <PageHeader
          style={{ margin: '-24px -24px 24px' }}
          title="图片管理"
          extra={[
            <Button key="3">Operation</Button>,
            <Button key="2">Operation</Button>,
            <Button key="1" type="primary">
              Primary
            </Button>,
          ]}
        />
        <Row gutter={24} type="flex" style={{ marginBottom: '24px' }}>
          {this.listEl()}
        </Row>
      </div>
    );
  }
}

export default Home;
