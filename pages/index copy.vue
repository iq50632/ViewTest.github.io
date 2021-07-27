<template>
  <div class="container">
    <Row>
      <Col span='8'>
      {{person.length}}
      </Col>
      <Col span='16'>
      <Tabs value="name1" style="width:100%">
        <TabPane :label="label" name="name1">群組聊天室的内容</TabPane>
        <TabPane v-for="i in person" :key="i.id" :label="i.name" name="name2">标签二的内容</TabPane>
      </Tabs>
      </Col>
      <Button type="info" ghost>Info</Button>
    </Row>
  </div>
</template>

<script>
  export default {
    layout: 'user',
    data() {
      return {
        person: [{
            number: '0711',
            name: 'Hanhan',
            sax: 1,
            staus: 'Admin'
          },
          {
            number: '0721',
            name: 'Harry',
            sax: 0,
            staus: 'Tourist'
          },
          {
            number: '0812',
            name: 'Amy',
            sax: 1,
            staus: 'Tourist'
          },
          {
            number: '0126',
            name: 'David',
            sax: 0,
            staus: 'Tourist'
          },
        ],
        label: (h) => {
          return h('div', [
            h('span', '群組聊天室'),
            h('Badge', {
              props: {
                count: 3
              }
            })
          ])
        }
      }
    },
  }

</script>

<style>
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family:
      'Quicksand',
      'Source Sans Pro',
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      'Helvetica Neue',
      Arial,
      sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }

</style>
