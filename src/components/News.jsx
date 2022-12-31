import React from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment/moment";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";

const { Text, Title } = Typography;
const { Option } = Select;

const demoImage = "https://i.ibb.co/Z11pcGG/cryptocurrency.png"

const News = ({ simplified }) => {
  const cryptoCurrency = "Cryptocurrency";
  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({
    newsCategory: cryptoCurrency,
    count: simplified ? 6 : 12
  }
  );
  if (isFetching && !cryptoNews) return "Loading..."

  return (
    <>
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
                  <img src={ news?.image?.thumbnail?.contentUrl || demoImage } alt="news"/>
                </div>
                <p>
                  {news.description > 100 ? `${news.description.substring(0,100)}...` : news.description}
                </p>
              </a>

            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default News;
