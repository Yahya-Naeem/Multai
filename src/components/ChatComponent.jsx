import React from 'react';
import { Button, Col, Row,Input ,Typography, Flex, Tooltip, Layout } from 'antd';
import { UpOutlined } from '@ant-design/icons';
import TextComponent from './Textcomponent';

const { Title, Paragraph } = Typography;
const { Content } = Layout;

export default function ChatComponent() {
  return (
    <Flex vertical={true} gap='middle'>
        <Row>
            <Col span={24}>
                <Flex justify='center'>
                    <Title level={1} style={{ color: 'orange' }}>
                        MultAI
                    </Title>
                </Flex>
            </Col>
            <Col span={24}>
                <TextComponent />
            </Col>
        </Row>
        
        <Layout style={{ backgroundImage:'linear-gradient(to right,#000, #00072D)', minHeight: '100vh' }}>
          <Content style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '100%' }}>
            <Row align='bottom' gutter={16} justify='center' style={{ position: 'absolute', bottom: '5%', width: '100%' }}>
              <Col offset={6} span={10}>
                <Input
                        placeholder="Enter your Name"
                        //onChange={(e) => setInputValue(e.target.value)}
                />
              </Col>
              <Col span={6}>
                <Tooltip title="upload">
                  <Button shape='circle' icon={<UpOutlined />} />
                </Tooltip>
              </Col>
            </Row>
          </Content>
        </Layout>
    </Flex>
  );
}
