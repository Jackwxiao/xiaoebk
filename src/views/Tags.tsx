import Layout from 'components/Layout';
import React from 'react';
import {useTags} from 'useTags';
import styled from 'styled-components';
import Icon from 'components/Icon';
import {Link} from 'react-router-dom';
import {Button} from 'components/Button';
import {Center} from 'components/Center';
import {Space} from 'components/Space';

const TagList = styled.ol`
font-size: 16px;
background: #FDFAF1;
>li{
  border-bottom: 1px solid #d5d5d9; margin-left: 18px; line-height: 20px;
  > a{
  padding:12px 16px 12px 0; display: flex;
  justify-content: space-between;
  align-items: center;
  }
}
`;

function Tags() {
  const {tags,addTag} = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map(tag =>
          <li key={tag.id}>
            <Link to={'/tags/' + tag.id}>
              <span className="oneLine">{tag.name}</span>
              <Icon name="right"></Icon>
            </Link>
          </li>
        )}
      </TagList>
      <Center>
        <Space/>
        <Button onClick={addTag}>新增标签</Button>
        <Space/>
      </Center>
    </Layout>
  );
}

export default Tags;