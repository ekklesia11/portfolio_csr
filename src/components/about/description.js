import React from 'react';
import styled from 'styled-components';

const Description = () => {
  const description = {
    kr: {
      greeting: 'Hello World',
      describe:
        '8기통의 nodejs V8 엔진을 장착한 전설의 고래 docker 는 AWS 구름 위를 마음껏 날 수 있지만, 경쟁이 심한 개발 트랙에서 고속으로 달리려면 성능좋은 API 를 지속적으로 공급해주어야 합니다. 일단 고래 뒤쪽으로 가서 살펴보아야 하는데... 제가 한번 봐 드릴까요?',
      // '개발자로써의 삶을 시작한 이후로 다양한 서비스와 프로젝트, 그리고 좋은 결과를 만들어내기 위해 재능있는 사람들과 함께 했습니다. 그렇다보니 늘 긍정적이고, 호기심 가득하며, 끊임없이 성장하고 발전하기를 힘쓰는 개발자 입니다. 지금도 넘치는 아이디어로 시도하고 도전하기를 즐기고 있습니다. 낯을 많이 가리지만 잘 웃고, 친해지면 재밌습니다.',
    },
    en: {
      greeting: "Hi, I'm Daniel",
      describe:
        "Since beginning my journey as a developer, I've participated in various service projects, and collaborated with talented people to achieve great work perfomence. I'm naturally positive, reasonably curious, and perpetually working on improving my skills and problems at all time.",
    },
  };

  let language = 0;

  const descriptionView = (obj) => {
    return language ? (
      <div className='intro'>
        <h4>{obj.en.greeting}</h4>
        <span>{obj.en.describe}</span>
      </div>
    ) : (
      <div className='intro'>
        <h4>{obj.kr.greeting}</h4>
        <span>{obj.kr.describe}</span>
      </div>
    );
  };

  return <Container>{descriptionView(description)}</Container>;
};

const Container = styled.div`
  background-color: ${(props) => props.theme.color.white};
  font-size: 2rem;
  font-weight: 100;
  padding: 84px 0;

  .intro {
    text-align: center;
    width: 70%;
    margin: 0 auto;
    line-height: 2rem;
    color: ${(props) => props.theme.color.background};
  }

  span {
    font-size: 1.2rem;
    word-wrap: break-word;
  }

  h4 {
    margin: 0 auto 16px;
  }
`;

export default Description;
