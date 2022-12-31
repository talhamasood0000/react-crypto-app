import React, { useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment/moment";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../services/cryptoApi";

const { Text, Title } = Typography;
const { Option } = Select;

const demoImage = "https://i.ibb.co/Z11pcGG/cryptocurrency.png"

const News = ({ simplified }) => {
  const cryptoCurrency = "Cryptocurrency";
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency')
  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({
    newsCategory: newsCategory,
    count: simplified ? 6 : 12
  });
  const { data} = useGetCryptosQuery(100);

  if (isFetching && !cryptoNews) return "Loading..."

  return (
    <>
    {!simplified && (
      <Col>
        <Select
          showSearch
          className="select-news"
          placeholder="Select a Crypto"
          optionFilterProp="children"
          onChange={(value)=> setNewsCategory(value)}
          filterOption={(input, option)=> option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value="Cryptocurrency">Cryptocurrency</Option>
            {data?.data?.coins.map((coin)=> <Option value={coin.name}>{coin.name}</Option>)}
        </Select>
      </Col>
    )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptoNews?.value?.map((news, i)=>(
          <Col xs={24} sm={12} lg={6} key={i}>
            <Card
              hoverable
              className="news-card"
            >
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className="news-image-container">
                  <Title className="news-title" level={4}>{news.name}</Title>
                  <img style={{maxWidth: '200px', maxHeight: '100px'}} src={ news?.image?.thumbnail?.contentUrl || demoImage } alt="news"/>
                </div>
                <p>
                  {news.description > 100 ? `${news.description.substring(0,100)}...` : news.description}
                </p>
                <div className="provider-container">
                  <div>
                    <Avatar src={news?.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt=""/>
                    <Text className="provider-name">{news?.provider[0]?.name}</Text>
                  </div>
                    <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default News;
