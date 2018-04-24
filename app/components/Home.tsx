import * as React from 'react';
import {Card, Button} from 'antd';

const styles = require('./Home.less');

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <Card>
            <Button type="primary">test</Button>
          </Card>
        </div>
      </div>
    );
  }
}
